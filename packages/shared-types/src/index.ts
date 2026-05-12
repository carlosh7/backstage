export interface Vec3 {
  x: number
  y: number
  z: number
}

export type ObjectCategory =
  | 'seating' | 'tables' | 'staging' | 'truss' | 'lighting'
  | 'audio' | 'video' | 'rigging' | 'decor' | 'barrier'
  | 'tent' | 'furniture' | 'other'

export interface ObjectMeta {
  weight?: number
  power?: number
  price?: number
  manufacturer?: string
  modelUrl?: string
}

export interface FloorPlanObject {
  id: string
  type: string
  category: ObjectCategory
  name: string
  position: Vec3
  rotation: number
  scale: Vec3
  color?: string
  label?: string
  visible: boolean
  locked: boolean
  metadata?: ObjectMeta
}

export interface CatalogItem {
  id: string
  name: string
  icon: string
  category: ObjectCategory
  width: number
  depth: number
  height: number
  color: string
  metadata?: ObjectMeta
}

export type ViewMode = '3d' | 'top' | 'front' | 'side' | 'walk' | 'render'

export interface Project {
  id: string
  name: string
  eventId: string
  layoutId: string | null
  objects: FloorPlanObject[]
  settings: {
    gridSize: number
    snapToGrid: boolean
    unit: 'm' | 'cm' | 'ft' | 'in'
  }
  createdAt: string
  updatedAt: string
}
