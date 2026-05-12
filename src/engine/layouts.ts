import type { FloorPlanObject } from '../../packages/shared-types/src'
import { nanoid } from 'nanoid'

function obj(type: string, name: string, x: number, z: number, w: number, d: number, color: string): FloorPlanObject {
  return { id: nanoid(), type, category: 'seating', name, position: { x, y: 0, z }, rotation: 0, scale: { x: w, y: 0.02, z: d }, color, visible: true, locked: false }
}

function chair(x: number, z: number): FloorPlanObject {
  return { id: nanoid(), type: 'chair-folding', category: 'seating', name: 'Silla', position: { x, y: 0, z }, rotation: 0, scale: { x: 0.45, y: 0.85, z: 0.45 }, color: '#64748b', visible: true, locked: false }
}

function table(x: number, z: number, r: number, color: string): FloorPlanObject {
  return { id: nanoid(), type: 'table-round-150', category: 'tables', name: 'Mesa redonda', position: { x, y: 0, z }, rotation: 0, scale: { x: r, y: 0.75, z: r }, color, visible: true, locked: false }
}

export function generateAuditorium(rows: number, cols: number, spacing: number): FloorPlanObject[] {
  const items: FloorPlanObject[] = []
  // Stage
  items.push({ id: nanoid(), type: 'stage-custom', category: 'staging', name: 'Escenario', position: { x: 0, y: 0, z: -(rows * spacing + 2) }, rotation: 0, scale: { x: 5.8, y: 0.35, z: 3.8 }, color: '#1e3a5f', visible: true, locked: false })
  // Chairs in rows
  for (let r = 0; r < rows; r++) {
    const zPos = r * spacing
    for (let c = 0; c < cols; c++) {
      const xPos = (c - cols / 2) * spacing + spacing / 2
      items.push(chair(xPos, zPos))
    }
  }
  return items
}

export function generateBanquet(numTables: number, tableSpacing: number): FloorPlanObject[] {
  const items: FloorPlanObject[] = []
  const cols = Math.ceil(Math.sqrt(numTables))
  for (let i = 0; i < numTables; i++) {
    const c = i % cols
    const r = Math.floor(i / cols)
    const x = (c - cols / 2) * tableSpacing + tableSpacing / 2
    const z = (r - numTables / cols / 2) * tableSpacing + tableSpacing / 2
    items.push(table(x, z, 1.5, '#b45309'))
    // Add chairs around table
    const chairSpacing = 0.7
    const numChairs = 6
    for (let ci = 0; ci < numChairs; ci++) {
      const angle = (ci / numChairs) * Math.PI * 2
      items.push(chair(x + Math.sin(angle) * 0.9, z + Math.cos(angle) * 0.9))
    }
  }
  return items
}

export function generateCocktail(numTables: number, spacing: number): FloorPlanObject[] {
  const items: FloorPlanObject[] = []
  const cols = Math.ceil(Math.sqrt(numTables))
  for (let i = 0; i < numTables; i++) {
    const c = i % cols
    const r = Math.floor(i / cols)
    const x = (c - cols / 2) * spacing + spacing / 2
    const z = (r - numTables / cols / 2) * spacing + spacing / 2
    items.push({ id: nanoid(), type: 'table-cocktail', category: 'tables', name: 'Mesa cocktail', position: { x, y: 0, z }, rotation: 0, scale: { x: 0.7, y: 1.1, z: 0.7 }, color: '#d97706', visible: true, locked: false })
  }
  return items
}

export function generateClassroom(cols: number, rows: number): FloorPlanObject[] {
  const items: FloorPlanObject[] = []
  const sp = 0.8
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c - cols / 2) * sp + sp / 2
      const z = r * sp
      items.push({ id: nanoid(), type: 'table-rect', category: 'tables', name: 'Mesa', position: { x, y: 0, z }, rotation: 0, scale: { x: 0.7, y: 0.75, z: 0.5 }, color: '#b45309', visible: true, locked: false })
    }
  }
  return items
}
