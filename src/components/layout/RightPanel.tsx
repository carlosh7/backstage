import { useEditorStore } from '../../stores/editorStore'

export default function RightPanel() {
  const selectedIds = useEditorStore((s) => s.selectedIds)
  const objects = useEditorStore((s) => s.objects)
  const updateObject = useEditorStore((s) => s.updateObject)
  const removeObject = useEditorStore((s) => s.removeObject)

  const selected = selectedIds.length === 1
    ? objects.find((o) => o.id === selectedIds[0])
    : null

  if (!selected) {
    return (
      <aside className="w-56 bg-surface-2 border-l border-border p-3 shrink-0">
        <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Propiedades</p>
        {selectedIds.length > 1 ? (
          <p className="text-xs text-text-secondary italic">{selectedIds.length} objetos seleccionados</p>
        ) : (
          <p className="text-xs text-text-secondary italic">Selecciona un objeto</p>
        )}
      </aside>
    )
  }

  return (
    <aside className="w-56 bg-surface-2 border-l border-border flex flex-col shrink-0">
      <div className="p-3 border-b border-border">
        <h3 className="text-xs font-semibold text-text truncate">{selected.name}</h3>
        <span className="text-[10px] text-text-secondary">{selected.category}</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
        {/* Position */}
        <div>
          <p className="text-text-secondary mb-1 text-[10px] uppercase tracking-wider">Posición</p>
          <div className="grid grid-cols-3 gap-1">
            {(['x', 'y', 'z'] as const).map((axis) => (
              <label key={axis} className="flex items-center gap-1">
                <span className="text-text-secondary w-3">{axis.toUpperCase()}</span>
                <input
                  type="number"
                  step={0.1}
                  value={Number(selected.position[axis]).toFixed(2)}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value) || 0
                    updateObject(selected.id, {
                      position: { ...selected.position, [axis]: val },
                    })
                  }}
                  className="w-full px-1 py-0.5 bg-surface border border-border rounded text-text text-[10px]"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Rotation */}
        <div>
          <p className="text-text-secondary mb-1 text-[10px] uppercase tracking-wider">Rotación</p>
          <input
            type="number"
            step={5}
            value={Math.round((selected.rotation * 180) / Math.PI)}
            onChange={(e) => {
              const deg = parseFloat(e.target.value) || 0
              updateObject(selected.id, { rotation: (deg * Math.PI) / 180 })
            }}
            className="w-full px-2 py-1 bg-surface border border-border rounded text-text"
          />
        </div>

        {/* Scale */}
        <div>
          <p className="text-text-secondary mb-1 text-[10px] uppercase tracking-wider">Escala</p>
          <div className="grid grid-cols-3 gap-1">
            {(['x', 'y', 'z'] as const).map((axis) => (
              <label key={axis} className="flex items-center gap-1">
                <span className="text-text-secondary w-3">{axis.toUpperCase()}</span>
                <input
                  type="number"
                  step={0.1}
                  min={0.1}
                  value={Number(selected.scale[axis]).toFixed(2)}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value) || 0.1
                    updateObject(selected.id, {
                      scale: { ...selected.scale, [axis]: val },
                    })
                  }}
                  className="w-full px-1 py-0.5 bg-surface border border-border rounded text-text text-[10px]"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <p className="text-text-secondary mb-1 text-[10px] uppercase tracking-wider">Color</p>
          <input
            type="color"
            value={selected.color ?? '#4f46e5'}
            onChange={(e) => updateObject(selected.id, { color: e.target.value })}
            className="w-full h-6 rounded cursor-pointer"
          />
        </div>

        {/* Delete */}
        <button
          onClick={() => removeObject(selected.id)}
          className="w-full py-1.5 bg-red-700 text-white rounded hover:bg-red-600 transition-colors text-xs"
        >
          Eliminar objeto
        </button>
      </div>
    </aside>
  )
}
