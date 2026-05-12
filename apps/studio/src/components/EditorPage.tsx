export default function EditorPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-surface text-text select-none">
      {/* TopBar placeholder */}
      <header className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-backstage font-bold text-lg">Backstage</span>
          <span className="text-xs text-text-secondary">Event Design Studio</span>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* LeftPanel placeholder */}
        <aside className="w-56 bg-surface-2 border-r border-border p-3 flex flex-col gap-2">
          <p className="text-xs text-text-secondary uppercase tracking-wider">Catálogo</p>
          <p className="text-xs text-text-secondary italic">Próximamente</p>
        </aside>

        {/* Viewport */}
        <main className="flex-1 relative">
          <div className="w-full h-full flex items-center justify-center text-text-secondary text-sm">
            <p>Escena 3D — próximamente</p>
          </div>
        </main>

        {/* RightPanel placeholder */}
        <aside className="w-56 bg-surface-2 border-l border-border p-3">
          <p className="text-xs text-text-secondary uppercase tracking-wider">Propiedades</p>
          <p className="text-xs text-text-secondary italic">Selecciona un objeto</p>
        </aside>
      </div>

      {/* StatusBar placeholder */}
      <footer className="flex items-center justify-between px-4 py-1 bg-surface-2 border-t border-border text-[10px] text-text-secondary">
        <span>Backstage v0.1.0</span>
        <span>Sin conexión</span>
      </footer>
    </div>
  )
}
