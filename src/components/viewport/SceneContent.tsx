import { useCallback } from 'react'
import * as THREE from 'three'
import { useMemo } from 'react'
import { useEditorStore } from '../../stores/editorStore'
import type { FloorPlanObject } from '../../../packages/shared-types/src'

function ObjectMesh({ obj }: { obj: FloorPlanObject }) {
  const selectObject = useEditorStore((s) => s.selectObject)
  const selectedIds = useEditorStore((s) => s.selectedIds)
  const isSelected = selectedIds?.includes(obj.id) ?? false

  const geometry = useMemo(() => {
    return new THREE.BoxGeometry(obj.scale.x, obj.scale.y, obj.scale.z)
  }, [obj.scale.x, obj.scale.y, obj.scale.z])

  const handlePointerDown = useCallback((e: any) => {
    e.stopPropagation()
    selectObject(obj.id, e.nativeEvent?.shiftKey || false)
  }, [obj.id, selectObject])

  return (
    <mesh
      geometry={geometry}
      position={[obj.position.x, obj.position.y, obj.position.z]}
      rotation={[0, obj.rotation, 0]}
      castShadow
      receiveShadow
      onPointerDown={handlePointerDown}
    >
      <meshStandardMaterial
        color={obj.color ?? '#64748b'}
        roughness={0.5}
        metalness={0.1}
        emissive={isSelected ? new THREE.Color('#3b82f6') : new THREE.Color('#000000')}
        emissiveIntensity={isSelected ? 0.3 : 0}
      />
    </mesh>
  )
}

export default function SceneContent() {
  const objects = useEditorStore((s) => s.objects)

  return (
    <group>
      {objects?.map((obj) => (
        <ObjectMesh key={obj.id} obj={obj} />
      ))}
    </group>
  )
}
