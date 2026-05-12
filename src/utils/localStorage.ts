import type { FloorPlanObject } from '../../../packages/shared-types/src'

const STORAGE_KEY = 'backstage-plans'

export interface SavedPlan {
  id: string
  name: string
  objects: FloorPlanObject[]
  createdAt: string
  updatedAt: string
  settings: { gridSize: number; snapToGrid: boolean }
}

function getAll(): SavedPlan[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
}

function saveAll(plans: SavedPlan[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans))
}

export const localPlans = {
  list() { return getAll().sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()) },
  get(id: string) { return getAll().find((p) => p.id === id) ?? null },
  create(name: string): SavedPlan {
    const now = new Date().toISOString()
    const plan: SavedPlan = { id: crypto.randomUUID?.() ?? `plan_${Date.now()}`, name, objects: [], createdAt: now, updatedAt: now, settings: { gridSize: 0.5, snapToGrid: true } }
    const plans = getAll(); plans.push(plan); saveAll(plans)
    return plan
  },
  update(id: string, data: { name?: string; objects?: FloorPlanObject[]; settings?: Partial<SavedPlan['settings']> }) {
    const plans = getAll(); const idx = plans.findIndex((p) => p.id === id)
    if (idx === -1) return false
    if (data.name !== undefined) plans[idx].name = data.name
    if (data.objects !== undefined) plans[idx].objects = data.objects
    if (data.settings) Object.assign(plans[idx].settings, data.settings)
    plans[idx].updatedAt = new Date().toISOString()
    saveAll(plans); return true
  },
  delete(id: string) { saveAll(getAll().filter((p) => p.id !== id)) },
}
