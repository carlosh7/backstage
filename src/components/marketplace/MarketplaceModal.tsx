import { useState } from 'react'
import { allItems } from '../../../packages/engine-catalog/src'

interface Props {
  onClose: () => void
}

export default function MarketplaceModal({ onClose }: Props) {
  const [tab, setTab] = useState<'browse' | 'upload'>('browse')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-surface-2 border border-border rounded-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text">Marketplace de objetos</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text text-xl">&times;</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-border pb-2">
          <button onClick={() => setTab('browse')} className={`text-xs font-medium px-3 py-1 rounded ${tab === 'browse' ? 'bg-backstage text-white' : 'text-text-secondary hover:text-text'}`}>Explorar</button>
          <button onClick={() => setTab('upload')} className={`text-xs font-medium px-3 py-1 rounded ${tab === 'upload' ? 'bg-backstage text-white' : 'text-text-secondary hover:text-text'}`}>Subir objeto</button>
        </div>

        {tab === 'browse' ? (
          <div className="grid grid-cols-2 gap-2">
            {allItems.filter((_, i) => i < 10).map((item) => (
              <div key={item.id} className="border border-border rounded-lg p-3 hover:border-backstage transition-colors cursor-pointer">
                <span className="text-xl block mb-1">{item.icon}</span>
                <p className="text-xs font-semibold text-text">{item.name}</p>
                <p className="text-[10px] text-text-secondary">{item.category} · {item.width}x{item.depth}m</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-text-secondary">Comparte tus objetos 3D con la comunidad de Backstage.</p>
            <label className="block">
              <span className="text-xs text-text-secondary">Nombre del objeto</span>
              <input type="text" className="w-full mt-1 px-2 py-1.5 text-xs bg-surface border border-border rounded text-text" placeholder="Ej: Mesa redonda 180cm" />
            </label>
            <label className="block">
              <span className="text-xs text-text-secondary">Archivo GLTF/GLB</span>
              <input type="file" accept=".gltf,.glb" className="w-full mt-1 text-xs text-text-secondary file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-backstage file:text-white" />
            </label>
            <button className="w-full py-2 bg-backstage text-white rounded text-xs font-medium hover:opacity-90 transition-opacity">Subir al marketplace</button>
          </div>
        )}

        <p className="text-[10px] text-text-secondary text-center mt-4 italic">Marketplace disponible próximamente</p>
      </div>
    </div>
  )
}
