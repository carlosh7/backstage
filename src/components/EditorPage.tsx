import { useState } from 'react'
import { useEditorStore } from '../stores/editorStore'
import Scene3D from './viewport/Scene3D'
import ObjectCatalog from './catalog/ObjectCatalog'

export default function EditorPage() {
  const objects = useEditorStore((s) => s.objects)
  const selectedIds = useEditorStore((s) => s.selectedIds)
  const viewMode = useEditorStore((s) => s.viewMode)
  const [search, setSearch] = useState('')

  return (
    <div className="w-full h-screen flex flex-col bg-surface text-text select-none">
      {/* TopBar */}
      <header className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-backstage font-bold text-lg">Backstage</span>
          <span className="text-xs text-text-secondary">Event Design Studio</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-text-secondary">{objects.length} objetos</span>
          {selectedIds.length > 0 && (
            <span className="text-backstage">{selectedIds.length} seleccionados</span>
          )}
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* LeftPanel - Catalog */}
        <aside className="w-56 bg-surface-2 border-r border-border flex flex-col shrink-0">
          <div className="p-2">
            <input
              type="text"
              placeholder="Buscar objetos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 py-1 text-xs bg-surface border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-backstage"
            />
          </div>
          <div className="flex-1 overflow-y-auto px-2 pb-2">
            <ObjectCatalog search={search} />
          </div>
        </aside>

        {/* Viewport */}
        <main className="flex-1 relative">
          <Scene3D />
        </main>

        {/* RightPanel */}
        <aside className="w-56 bg-surface-2 border-l border-border p-3 shrink-0">
          <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Propiedades</p>
          {selectedIds.length === 0 ? (
            <p className="text-xs text-text-secondary italic">Selecciona un objeto</p>
          ) : (
            <p className="text-xs text-text-secondary">{selectedIds.length} objeto(s) seleccionados</p>
          )}
        </aside>
      </div>

      {/* StatusBar */}
      <footer className="flex items-center justify-between px-4 py-1 bg-surface-2 border-t border-border text-[10px] text-text-secondary shrink-0">
        <span>Backstage v0.1.0</span>
        <div className="flex items-center gap-3">
          <span>{viewMode}</span>
        </div>
      </footer>
    </div>
  )
}
