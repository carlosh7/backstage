import { useEffect, useState, useRef, useCallback } from 'react'
import { useEditorStore } from '../stores/editorStore'
import Scene3D from './viewport/Scene3D'
import ObjectCatalog from './catalog/ObjectCatalog'
import RightPanel from './layout/RightPanel'
import LayoutModal from './layout/LayoutModal'
import MarketplaceModal from './marketplace/MarketplaceModal'
import WhiteLabelModal from './whitelabel/WhiteLabelModal'
import { localPlans } from '../utils/localStorage'
import { exportPDF } from '../engine/exportPDF'

export default function EditorPage() {
  const objects = useEditorStore((s) => s.objects)
  const selectedIds = useEditorStore((s) => s.selectedIds)
  const removeObject = useEditorStore((s) => s.removeObject)
  const pendingSave = useEditorStore((s) => s.pendingSave)
  const viewMode = useEditorStore((s) => s.viewMode)
  const snapToGrid = useEditorStore((s) => s.snapToGrid)
  const gridSize = useEditorStore((s) => s.gridSize)
  const [search, setSearch] = useState('')
  const [showLayout, setShowLayout] = useState(false)
  const [showMarketplace, setShowMarketplace] = useState(false)
  const [showWhiteLabel, setShowWhiteLabel] = useState(false)
  const [showLeft, setShowLeft] = useState(true)
  const [showRight, setShowRight] = useState(true)
  const planIdRef = useRef<string | null>(null)

  // Initialize plan
  useEffect(() => {
    if (!planIdRef.current) {
      const existing = localPlans.list()
      if (existing.length > 0) {
        const plan = existing[0]
        planIdRef.current = plan.id
        useEditorStore.getState().loadObjects(plan.objects)
      } else {
        const plan = localPlans.create('Nuevo layout')
        planIdRef.current = plan.id
      }
    }
  }, [])

  // Auto-save every 30s when pending
  useEffect(() => {
    if (!planIdRef.current) return
    const interval = setInterval(() => {
      if (useEditorStore.getState().pendingSave && planIdRef.current) {
        const state = useEditorStore.getState()
        localPlans.update(planIdRef.current, { objects: state.objects, settings: { snapToGrid, gridSize } })
        state.setPendingSave?.(false)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [snapToGrid, gridSize])

  // Save on unload
  useEffect(() => {
    const handleUnload = () => {
      if (planIdRef.current) {
        const state = useEditorStore.getState()
        localPlans.update(planIdRef.current, { objects: state.objects })
      }
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (document.activeElement?.tagName === 'INPUT') return
        selectedIds.forEach((id) => removeObject(id))
      }
      if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (e.shiftKey) useEditorStore.getState().redo()
        else useEditorStore.getState().undo()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selectedIds, removeObject])

  return (
    <div className="w-full h-screen flex flex-col bg-surface text-text select-none">
      {/* TopBar */}
      <header className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-backstage font-bold text-lg">Backstage</span>
          <span className="text-xs text-text-secondary">Event Design Studio</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <button onClick={() => setShowLayout(true)} className="px-2 py-1 bg-backstage/20 text-backstage rounded hover:bg-backstage/30 transition-colors text-[10px] font-medium">+ Layout</button>
          <button onClick={() => { const blob = exportPDF(objects); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'backstage-plano.pdf'; a.click(); URL.revokeObjectURL(url) }} className="px-2 py-1 bg-backstage/20 text-backstage rounded hover:bg-backstage/30 transition-colors text-[10px] font-medium">PDF</button>
          <button onClick={() => setShowMarketplace(true)} className="px-2 py-1 bg-backstage/20 text-backstage rounded hover:bg-backstage/30 transition-colors text-[10px] font-medium">🛍️</button>
          <button onClick={() => setShowWhiteLabel(true)} className="px-2 py-1 bg-backstage/20 text-backstage rounded hover:bg-backstage/30 transition-colors text-[10px] font-medium">⚙️</button>
          <span className="text-text-secondary hidden sm:inline">{(objects || []).length} objetos</span>
          {selectedIds?.length > 0 && (
            <span className="text-backstage font-medium">{selectedIds.length} seleccionados</span>
          )}
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* LeftPanel - Catalog */}
        {showLeft && (
          <aside className="w-56 bg-surface-2 border-r border-border flex flex-col shrink-0 hidden md:flex">
            <div className="p-2">
              <input type="text" placeholder="Buscar objetos..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-1 text-xs bg-surface border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-backstage" />
            </div>
            <div className="flex-1 overflow-y-auto px-2 pb-2">
              <ObjectCatalog search={search} />
            </div>
          </aside>
        )}

        {/* Viewport */}
        <main className="flex-1 relative">
          <Scene3D />
        </main>

        {/* RightPanel */}
        {showRight && <RightPanel />}
      </div>

      {/* Layout modal */}
{showLayout && <LayoutModal onClose={() => setShowLayout(false)} />}
{showMarketplace && <MarketplaceModal onClose={() => setShowMarketplace(false)} />}
{showWhiteLabel && <WhiteLabelModal onClose={() => setShowWhiteLabel(false)} />}

{/* StatusBar */}
      <footer className="flex items-center justify-between px-4 py-1 bg-surface-2 border-t border-border text-[10px] text-text-secondary shrink-0">
        <span>Backstage v0.3.0</span>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowLeft(!showLeft)} className="text-text-secondary hover:text-text transition-colors">{showLeft ? '◀' : '▶'}</button>
          <span>{viewMode} · {objects.length} objetos</span>
          <button onClick={() => setShowRight(!showRight)} className="text-text-secondary hover:text-text transition-colors">{showRight ? '▶' : '◀'}</button>
        </div>
      </footer>
    </div>
  )
}
