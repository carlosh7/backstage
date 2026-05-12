import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const EditorPage = lazy(() => import('./components/EditorPage'))

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <div className="w-6 h-6 border-2 border-backstage border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-xs text-text-secondary">Cargando Backstage...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}><EditorPage /></Suspense>
        } />
        <Route path="/editor" element={
          <Suspense fallback={<Loading />}><EditorPage /></Suspense>
        } />
        <Route path="/editor/:planId" element={
          <Suspense fallback={<Loading />}><EditorPage /></Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}
