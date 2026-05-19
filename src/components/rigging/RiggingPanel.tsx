import { useEditorStore } from '../../stores/editorStore'

export default function RiggingPanel() {
  const objects = useEditorStore((s) => s.objects)

  const safe = objects ?? []

  const trusses = safe.filter((o) => o.category === 'truss')
  const lights = safe.filter((o) => o.category === 'lighting')
  const audio = safe.filter((o) => o.category === 'audio')
  const video = safe.filter((o) => o.category === 'video')

  const totalWeight = safe.reduce((s, o) => s + (o.metadata?.weight ?? 0), 0)
  const totalPower = safe.reduce((s, o) => s + (o.metadata?.power ?? 0), 0)
  const totalPrice = safe.reduce((s, o) => s + (o.metadata?.price ?? 0), 0)

  return (
    <div className="p-3 space-y-3 text-xs">
      <p className="text-text-secondary uppercase tracking-wider text-[10px] mb-2">Rigging & Producción</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-surface rounded p-2 text-center">
          <p className="text-lg font-bold text-backstage">{totalWeight} kg</p>
          <p className="text-[10px] text-text-secondary">Peso total</p>
        </div>
        <div className="bg-surface rounded p-2 text-center">
          <p className="text-lg font-bold text-amber-400">{totalPower} W</p>
          <p className="text-[10px] text-text-secondary">Consumo</p>
        </div>
        <div className="bg-surface rounded p-2 text-center">
          <p className="text-lg font-bold text-green-400">${totalPrice.toLocaleString()}</p>
          <p className="text-[10px] text-text-secondary">Valor equipos</p>
        </div>
        <div className="bg-surface rounded p-2 text-center">
          <p className="text-lg font-bold text-text">{objects.length}</p>
          <p className="text-[10px] text-text-secondary">Objetos total</p>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="space-y-1">
        <p className="text-text-secondary text-[10px]">Por categoría:</p>
        {[
          { label: 'Iluminación', items: lights, color: 'text-amber-400' },
          { label: 'Audio', items: audio, color: 'text-blue-400' },
          { label: 'Video', items: video, color: 'text-purple-400' },
          { label: 'Truss', items: trusses, color: 'text-slate-400' },
        ].map((cat) => (
          <div key={cat.label} className="flex justify-between text-[10px]">
            <span className={cat.color}>{cat.label}</span>
            <span className="text-text-secondary">{cat.items.length} obj · {cat.items.reduce((s, o) => s + (o.metadata?.weight ?? 0), 0)} kg</span>
          </div>
        ))}
      </div>

      {/* Compliance */}
      <div className="border-t border-border pt-2 mt-2">
        <p className="text-text-secondary text-[10px] mb-1">Compliance:</p>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-text-secondary">Ocupación: {objects.length} personas</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-text-secondary">Salidas: 2 recomendadas</span>
        </div>
      </div>
    </div>
  )
}
