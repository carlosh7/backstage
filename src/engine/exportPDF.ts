import { jsPDF } from 'jspdf'
import type { FloorPlanObject } from '../../packages/shared-types/src'

export function exportPDF(objects: FloorPlanObject[]) {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })

  // Background
  doc.setFillColor(15, 23, 42)
  doc.rect(0, 0, 297, 210, 'F')

  // Title
  doc.setFontSize(14)
  doc.setTextColor(255, 255, 255)
  doc.text('Backstage — Plano de evento', 148.5, 15, { align: 'center' })

  // Stats
  doc.setFontSize(8)
  doc.setTextColor(148, 163, 184)
  doc.text(`Objetos: ${objects.length}`, 10, 25)
  doc.text(`Generado: ${new Date().toLocaleString()}`, 10, 30)

  // Count by category
  const cats: Record<string, number> = {}
  objects.forEach((o) => { cats[o.category] = (cats[o.category] || 0) + 1 })
  const catStr = Object.entries(cats).map(([k, v]) => `${k}: ${v}`).join(' · ')
  doc.text(catStr, 10, 35)

  // Draw objects on plan (top view)
  const scale = 1.5 // mm per unit
  const offsetX = 148.5
  const offsetY = 105

  doc.setDrawColor(124, 58, 237)
  doc.setLineWidth(0.3)

  // Grid lines
  doc.setDrawColor(51, 65, 85)
  doc.setLineWidth(0.1)
  for (let g = -12; g <= 12; g++) {
    const pos = g * scale
    doc.line(offsetX + pos, offsetY - 100, offsetX + pos, offsetY + 100)
    doc.line(offsetX - 100, offsetY + pos, offsetX + 100, offsetY + pos)
  }

  // Objects
  objects.forEach((o) => {
    const x = offsetX + o.position.x * scale
    const z = offsetY + o.position.z * scale // Use z as depth in top view
    const w = o.scale.x * scale
    const d = o.scale.z * scale

    doc.setDrawColor(124, 58, 237)
    doc.setFillColor(124, 58, 237, 0.2)
    doc.rect(x - w / 2, z - d / 2, w, d, 'FD')

    // Label
    doc.setFontSize(4)
    doc.setTextColor(148, 163, 184)
    doc.text(o.name.substring(0, 10), x, z + 1, { align: 'center' })
  })

  // Legend
  let ly = 200
  doc.setFontSize(6)
  doc.setTextColor(148, 163, 184)
  doc.text('Leyenda:', 10, ly)
  ly += 4
  Object.entries(cats).forEach(([cat, count]) => {
    doc.setFillColor(124, 58, 237, 0.3)
    doc.rect(10, ly - 2, 4, 4, 'F')
    doc.text(`${cat} (${count})`, 16, ly + 1)
    ly += 4
  })

  return doc.output('blob')
}
