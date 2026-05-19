import { create } from 'zustand'
import type { FloorPlanObject, ViewMode } from '../../packages/shared-types/src'

interface HistoryEntry {
  objects: FloorPlanObject[]
}

interface EditorState {
  objects: FloorPlanObject[]
  selectedIds: string[]
  viewMode: ViewMode
  snapToGrid: boolean
  gridSize: number
  showGrid: boolean
  history: HistoryEntry[]
  historyIndex: number
  setPendingSave: (v: boolean) => void
  
  addObject: (obj: FloorPlanObject) => void
  removeObject: (id: string) => void
  updateObject: (id: string, partial: Partial<FloorPlanObject>) => void
  selectObject: (id: string | null, shift?: boolean) => void
  clearSelection: () => void
  alignObjects: (axis: 'x' | 'z') => void
  setViewMode: (mode: ViewMode) => void
  setSnapToGrid: (snap: boolean) => void
  setGridSize: (size: number) => void
  loadObjects: (objects: FloorPlanObject[]) => void
  undo: () => void
  redo: () => void
}

function pushHistory(state: EditorState): Partial<EditorState> {
  const newHistory = state.history.slice(0, state.historyIndex + 1)
  newHistory.push({ objects: [...state.objects] })
  return { history: newHistory, historyIndex: newHistory.length - 1, pendingSave: true }
}

export const useEditorStore = create<EditorState>((set, get) => ({
  objects: [],
  selectedIds: [],
  viewMode: '3d',
  snapToGrid: true,
  gridSize: 0.5,
  showGrid: true,
  history: [{ objects: [] }],
  historyIndex: 0,
  pendingSave: false,

  addObject: (obj) => set((s) => ({ objects: [...s.objects, obj], ...pushHistory(s) })),

  removeObject: (id) => set((s) => ({
    objects: s.objects.filter((o) => o.id !== id),
    selectedIds: s.selectedIds.filter((sid) => sid !== id),
    ...pushHistory(s),
  })),

  updateObject: (id, partial) => set((s) => ({
    objects: s.objects.map((o) => (o.id === id ? { ...o, ...partial } : o)),
    ...pushHistory(s),
  })),

  selectObject: (id, shift = false) => set((s) => {
    if (!id) return { selectedIds: [] }
    if (shift) {
      const ids = s.selectedIds.includes(id)
        ? s.selectedIds.filter((i) => i !== id)
        : [...s.selectedIds, id]
      return { selectedId: id, selectedIds: ids }
    }
    return { selectedId: id, selectedIds: [id] }
  }),

  clearSelection: () => set({ selectedIds: [] }),

  alignObjects: (axis) => {
    const { selectedIds, objects } = get()
    const targetIds = selectedIds.length > 0 ? selectedIds : []
    if (targetIds.length < 2) return
    const selected = objects.filter((o) => targetIds.includes(o.id))
    const avg = selected.reduce((s, o) => s + o.position[axis], 0) / selected.length
    const updated = objects.map((o) =>
      targetIds.includes(o.id) ? { ...o, position: { ...o.position, [axis]: avg } } : o
    )
    set({ objects: updated, ...pushHistory(get()) })
  },

  setViewMode: (mode) => set({ viewMode: mode }),
  setSnapToGrid: (snap) => set({ snapToGrid: snap }),
  setGridSize: (size) => set({ gridSize: size }),

  loadObjects: (objects) => set({
    objects: objects ?? [],
    history: [{ objects: objects ?? [] }],
    historyIndex: 0,
    selectedIds: [],
  }),

  setPendingSave: (v) => set({ pendingSave: v }),

  undo: () => {
    const { historyIndex, history } = get()
    if (historyIndex <= 0) return
    const newIdx = historyIndex - 1
    set({ objects: [...history[newIdx].objects], historyIndex: newIdx })
  },

  redo: () => {
    const { historyIndex, history } = get()
    if (historyIndex >= history.length - 1) return
    const newIdx = historyIndex + 1
    set({ objects: [...history[newIdx].objects], historyIndex: newIdx })
  },
}))
