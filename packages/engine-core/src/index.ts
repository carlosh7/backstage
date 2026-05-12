import type { Vec3 } from '@backstage/shared-types'

export function createDefaultScene() {
  return {
    gridSize: 0.5,
    snapToGrid: true,
    showGrid: true,
    showLabels: false,
  }
}

export function snapToGrid(value: number, gridSize: number): number {
  return Math.round(value / gridSize) * gridSize
}

export function snapVec3(pos: Vec3, gridSize: number): Vec3 {
  return {
    x: snapToGrid(pos.x, gridSize),
    y: snapToGrid(pos.y, gridSize),
    z: snapToGrid(pos.z, gridSize),
  }
}
