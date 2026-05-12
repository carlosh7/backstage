import { useState } from 'react'
import { useEditorStore } from '../../stores/editorStore'
import { generateAuditorium, generateBanquet, generateCocktail, generateClassroom } from '../../engine/layouts'

interface Props {
  onClose: () => void
}

const layouts = [
  { id: 'auditorium', name: 'Auditorio', icon: '🎭', desc: 'Hileras de sillas frente al escenario' },
  { id: 'banquet', name: 'Banquete', icon: '🍽️', desc: 'Mesas redondas con sillas alrededor' },
  { id: 'cocktail', name: 'Cocktail', icon: '🍸', desc: 'Mesas altas para cóctel' },
  { id: 'classroom', name: 'Escuela', icon: '📚', desc: 'Mesas rectangulares en hileras' },
]

function promptLayout(layoutId: string, loadObjects: (objs: any[]) => void, onClose: () => void) {
  let objects: any[] = []
  switch (layoutId) {
    case 'auditorium': objects = generateAuditorium(8, 10, 0.8); break
    case 'banquet': objects = generateBanquet(9, 2.5); break
    case 'cocktail': objects = generateCocktail(12, 1.5); break
    case 'classroom': objects = generateClassroom(6, 5); break
  }
  loadObjects(objects)
  onClose()
}

export default function LayoutModal({ onClose }: Props) {
  const loadObjects = useEditorStore((s) => s.loadObjects)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-surface-2 border border-border rounded-xl p-6 max-w-md w-full mx-4">
        <h2 className="text-lg font-bold text-text mb-4">Generar layout</h2>
        <div className="space-y-2">
          {layouts.map((l) => (
            <button
              key={l.id}
              onClick={() => promptLayout(l.id, loadObjects, onClose)}
              className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors border border-border"
            >
              <span className="text-xl">{l.icon}</span>
              <div>
                <p className="text-sm font-semibold text-text">{l.name}</p>
                <p className="text-xs text-text-secondary">{l.desc}</p>
              </div>
            </button>
          ))}
        </div>
        <button onClick={onClose} className="w-full mt-4 py-2 text-xs text-text-secondary hover:text-text transition-colors">
          Cancelar
        </button>
      </div>
    </div>
  )
}
