import { useEditorStore } from '../../stores/editorStore'
import { allItems } from '../../../packages/engine-catalog/src'
import type { CatalogItem } from '../../../packages/shared-types/src'
import { nanoid } from 'nanoid'

export default function ObjectCatalog({ search }: { search: string }) {
  const addObject = useEditorStore((s) => s.addObject)
  const snapToGrid = useEditorStore((s) => s.snapToGrid)
  const gridSize = useEditorStore((s) => s.gridSize)

  const filtered = search
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      )
    : allItems

  function handleAddItem(item: CatalogItem) {
    addObject({
      id: nanoid(),
      type: item.id,
      category: item.category,
      name: item.name,
      position: { x: 0, y: 0, z: 0 },
      rotation: 0,
      scale: { x: item.width, y: item.height, z: item.depth },
      color: item.color,
      visible: true,
      locked: false,
      metadata: item.metadata,
    })
  }

  return (
    <div className="space-y-1">
      {filtered.map((item) => (
        <button
          key={item.id}
          onClick={() => handleAddItem(item)}
          className="w-full flex items-center gap-2 p-2 rounded text-xs text-left hover:bg-surface/50 transition-colors"
          title={`${item.name} — ${item.width}x${item.depth}m`}
        >
          <span className="text-sm shrink-0">{item.icon}</span>
          <div className="min-w-0">
            <p className="text-text truncate">{item.name}</p>
            <p className="text-[10px] text-text-secondary">{item.category}</p>
          </div>
        </button>
      ))}
      {filtered.length === 0 && (
        <p className="text-xs text-text-secondary italic px-2">Sin resultados</p>
      )}
    </div>
  )
}
