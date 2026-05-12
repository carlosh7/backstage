import type { CatalogItem } from '@backstage/shared-types'

export const chairs: CatalogItem[] = [
  {
    id: 'chair-folding',
    name: 'Silla plegable',
    icon: '💺',
    category: 'seating',
    width: 0.45,
    depth: 0.45,
    height: 0.85,
    color: '#64748b',
    metadata: { weight: 4, manufacturer: 'Generic', price: 15 },
  },
  {
    id: 'chair-executive',
    name: 'Silla ejecutiva',
    icon: '🪑',
    category: 'seating',
    width: 0.6,
    depth: 0.6,
    height: 0.95,
    color: '#1e293b',
    metadata: { weight: 8, manufacturer: 'Generic', price: 45 },
  },
  {
    id: 'sofa-vip',
    name: 'Sofá VIP',
    icon: '🛋️',
    category: 'seating',
    width: 1.6,
    depth: 0.8,
    height: 0.7,
    color: '#7c3aed',
    metadata: { weight: 25, manufacturer: 'Generic', price: 200 },
  },
]

export const tables: CatalogItem[] = [
  {
    id: 'table-round-150',
    name: 'Mesa redonda 150cm',
    icon: '🟤',
    category: 'tables',
    width: 1.5,
    depth: 1.5,
    height: 0.75,
    color: '#b45309',
    metadata: { weight: 15, manufacturer: 'Generic', price: 80 },
  },
  {
    id: 'table-round-180',
    name: 'Mesa redonda 180cm',
    icon: '🟤',
    category: 'tables',
    width: 1.8,
    depth: 1.8,
    height: 0.75,
    color: '#b45309',
    metadata: { weight: 20, manufacturer: 'Generic', price: 100 },
  },
  {
    id: 'table-rect',
    name: 'Mesa rectangular',
    icon: '⬜',
    category: 'tables',
    width: 1.8,
    depth: 0.8,
    height: 0.75,
    color: '#b45309',
    metadata: { weight: 18, manufacturer: 'Generic', price: 90 },
  },
  {
    id: 'table-cocktail',
    name: 'Mesa cocktail alta',
    icon: '🍸',
    category: 'tables',
    width: 0.7,
    depth: 0.7,
    height: 1.1,
    color: '#d97706',
    metadata: { weight: 8, manufacturer: 'Generic', price: 40 },
  },
]

export const staging: CatalogItem[] = [
  {
    id: 'platform-1x1',
    name: 'Plataforma 1x1',
    icon: '📦',
    category: 'staging',
    width: 1.0,
    depth: 1.0,
    height: 0.18,
    color: '#1d4ed8',
    metadata: { weight: 12, manufacturer: 'Generic', price: 60 },
  },
  {
    id: 'platform-2x2',
    name: 'Plataforma 2x2',
    icon: '📦',
    category: 'staging',
    width: 2.0,
    depth: 2.0,
    height: 0.18,
    color: '#1e40af',
    metadata: { weight: 25, manufacturer: 'Generic', price: 120 },
  },
  {
    id: 'stage-custom',
    name: 'Escenario 5.8x3.8',
    icon: '🎭',
    category: 'staging',
    width: 5.8,
    depth: 3.8,
    height: 0.35,
    color: '#1e3a5f',
    metadata: { weight: 80, manufacturer: 'Generic', price: 350 },
  },
]

export const trusses: CatalogItem[] = [
  {
    id: 'truss-straight',
    name: 'Truss recto 3m',
    icon: '🔩',
    category: 'truss',
    width: 3.0,
    depth: 0.3,
    height: 0.3,
    color: '#94a3b8',
    metadata: { weight: 15, manufacturer: 'Prolyte', price: 120 },
  },
]

export const lighting: CatalogItem[] = [
  {
    id: 'led-par',
    name: 'LED PAR 64',
    icon: '💡',
    category: 'lighting',
    width: 0.25,
    depth: 0.25,
    height: 0.35,
    color: '#fbbf24',
    metadata: { weight: 2, power: 200, manufacturer: 'Chauvet', price: 80 },
  },
  {
    id: 'moving-head',
    name: 'Moving Head Beam',
    icon: '🪩',
    category: 'lighting',
    width: 0.3,
    depth: 0.3,
    height: 0.5,
    color: '#a855f7',
    metadata: { weight: 8, power: 350, manufacturer: 'Martin', price: 800 },
  },
]

export const audio: CatalogItem[] = [
  {
    id: 'speaker',
    name: 'Altavoz PA',
    icon: '🔊',
    category: 'audio',
    width: 0.6,
    depth: 0.5,
    height: 1.0,
    color: '#1e293b',
    metadata: { weight: 25, power: 800, manufacturer: 'L-Acoustics', price: 1200 },
  },
  {
    id: 'subwoofer',
    name: 'Subwoofer 18"',
    icon: '🔉',
    category: 'audio',
    width: 0.6,
    depth: 0.7,
    height: 0.6,
    color: '#1e293b',
    metadata: { weight: 35, power: 1200, manufacturer: 'L-Acoustics', price: 1500 },
  },
]

export const allItems: CatalogItem[] = [
  ...chairs, ...tables, ...staging, ...trusses, ...lighting, ...audio,
]
