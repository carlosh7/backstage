import { useEditorStore } from '../../stores/editorStore'
import type { FloorPlanObject } from '../../../packages/shared-types/src'
import * as THREE from 'three'
import { useMemo } from 'react'

const tempVec = new THREE.Vector3()
const tempScale = new THREE.Vector3()

function ObjectMesh({ obj }: { obj: FloorPlanObject }) {
  const geometry = useMemo(() => {
    const box = new THREE.BoxGeometry(obj.scale.x, obj.scale.y, obj.scale.z)
    return box
  }, [obj.scale.x, obj.scale.y, obj.scale.z])

  const color = obj.color ?? '#64748b'

  return (
    <mesh
      geometry={geometry}
      position={[obj.position.x, obj.position.y, obj.position.z]}
      rotation={[0, obj.rotation, 0]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
    </mesh>
  )
}

export default function SceneContent() {
  const objects = useEditorStore((s) => s.objects)
  const selectedIds = useEditorStore((s) => s.selectedIds)

  return (
    <group>
      {objects.map((obj) => (
        <ObjectMesh key={obj.id} obj={obj} />
      ))}
    </group>
  )
}
