import * as Y from 'yjs'
import { useEditorStore } from '../stores/editorStore'
import type { FloorPlanObject } from '../../packages/shared-types/src'

let ydoc: Y.Doc | null = null
let yObjects: Y.Array<FloorPlanObject> | null = null
let ws: WebSocket | null = null
let unsub: (() => void) | null = null

export function connectCollaboration(url: string) {
  ydoc = new Y.Doc()
  yObjects = ydoc.getArray('objects')

  // Connect WebSocket
  ws = new WebSocket(url)
  ws.onopen = () => console.log('[COLLAB] Connected')
  ws.onmessage = (event) => {
    const update = new Uint8Array(event.data)
    Y.applyUpdate(ydoc, update)
  }
  ws.onclose = () => setTimeout(() => connectCollaboration(url), 3000)

  // Sync Yjs updates to WebSocket
  ydoc.on('update', (update: Uint8Array) => {
    if (ws?.readyState === WebSocket.OPEN) ws.send(update)
  })

  // Sync Yjs → Zustand
  yObjects.observe(() => {
    if (!yObjects) return
    const objects = yObjects.toArray().filter(Boolean)
    useEditorStore.getState().loadObjects(objects)
  })

  // Sync Zustand → Yjs
  unsub = useEditorStore.subscribe((state) => {
    if (!yObjects) return
    const current = yObjects.toArray()
    const objects = state.objects
    // Simple sync: replace if different
    if (JSON.stringify(current) !== JSON.stringify(objects)) {
      yObjects.delete(0, yObjects.length)
      yObjects.push(objects)
    }
  })
}

export function disconnectCollaboration() {
  if (unsub) unsub()
  if (ws) ws.close()
  ydoc?.destroy()
}
