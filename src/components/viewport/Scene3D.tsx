import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { useEditorStore } from '../../stores/editorStore'
import SceneContent from './SceneContent'

export default function Scene3D() {
  const showGrid = useEditorStore((s) => s.showGrid)
  const gridSize = useEditorStore((s) => s.gridSize)

  return (
    <Canvas
      shadows="percentage"
      camera={{ position: [8, 6, 8], fov: 50, near: 0.1, far: 100 }}
      gl={{ antialias: true, toneMappingExposure: 1 }}
      onPointerMissed={() => useEditorStore.getState().clearSelection()}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[8, 12, 8]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <hemisphereLight args={['#87ceeb', '#3a3a3a', 0.4]} />

        {showGrid && (
          <Grid
            position={[0, -0.005, 0]}
            args={[30, 30]}
            cellSize={gridSize}
            cellThickness={0.6}
            cellColor="#4b5563"
            sectionSize={gridSize * 5}
            sectionThickness={1.2}
            sectionColor="#6b7280"
            fadeDistance={40}
            infiniteGrid
          />
        )}

        <ContactShadows position={[0, 0, 0]} opacity={0.5} width={20} height={20} blur={2.5} far={15} />
        <SceneContent />
        <OrbitControls makeDefault enableDamping dampingFactor={0.15} maxPolarAngle={Math.PI / 2.05} minDistance={1} maxDistance={30} />
        <color attach="background" args={['#1a1a2e']} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} intensity={0.3} />
          <ToneMapping mode={2} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
