import { useState } from 'react'

interface Props {
  onClose: () => void
}

export default function WhiteLabelModal({ onClose }: Props) {
  const [brandColor, setBrandColor] = useState('#6366f1')
  const [logoUrl, setLogoUrl] = useState('')
  const [studioName, setStudioName] = useState('')
  const [plan, setPlan] = useState<'free' | 'pro' | 'enterprise'>('free')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-surface-2 border border-border rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text">White Label</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text text-xl">&times;</button>
        </div>

        {/* Plan selector */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {(['free', 'pro', 'enterprise'] as const).map((p) => (
            <button key={p} onClick={() => setPlan(p)}
              className={`p-3 rounded-lg border text-center transition-colors ${plan === p ? 'border-backstage bg-backstage/10' : 'border-border hover:border-backstage'}`}>
              <p className="text-xs font-bold text-text capitalize">{p}</p>
              <p className="text-[10px] text-text-secondary">{p === 'free' ? 'Gratis' : p === 'pro' ? '$29/mes' : '$99/mes'}</p>
            </button>
          ))}
        </div>

        {plan !== 'free' && (
          <div className="space-y-3">
            <div>
              <span className="text-xs text-text-secondary">Nombre del estudio</span>
              <input type="text" value={studioName} onChange={(e) => setStudioName(e.target.value)}
                className="w-full mt-1 px-2 py-1.5 text-xs bg-surface border border-border rounded text-text" placeholder="Mi Estudio de Eventos" />
            </div>
            <div>
              <span className="text-xs text-text-secondary">Color de marca</span>
              <input type="color" value={brandColor} onChange={(e) => setBrandColor(e.target.value)}
                className="w-full h-8 mt-1 rounded cursor-pointer" />
            </div>
            <div>
              <span className="text-xs text-text-secondary">Logo URL</span>
              <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)}
                className="w-full mt-1 px-2 py-1.5 text-xs bg-surface border border-border rounded text-text" placeholder="https://..." />
            </div>
          </div>
        )}

        {plan !== 'free' && (
          <button className="w-full mt-4 py-2 bg-backstage text-white rounded text-xs font-medium hover:opacity-90 transition-opacity">
            {plan === 'pro' ? 'Suscribirse a Pro' : 'Contactar para Enterprise'}
          </button>
        )}

        {plan === 'free' && (
          <p className="text-xs text-text-secondary text-center mt-4">Plan Free: acceso básico sin marca personalizada.</p>
        )}
      </div>
    </div>
  )
}
