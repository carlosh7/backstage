# 🎭 Backstage — Roadmap Completo

> Editor profesional de escenarios y eventos 3D.
> Inspirado en: Disguise (visión) + Vectorworks Spotlight (profesional) + Social Tables (eventos) + Planner 5D (accesibilidad)
> Stack: React 19 + Three.js r184 + R3F v9 + Hono + Vite 8 + Tailwind v4

---

## ⚡ Estado Actual

| Item | Valor |
|------|-------|
| **Versión** | v0.1.0 |
| **Estado** | Fundación del proyecto completa |
| **Stack** | React 19 + Three.js r184 + R3F v9 + Hono + Vite 8 + Tailwind v4 |
| **Monorepo** | npm workspaces + Turborepo |
| **Build** | ✅ Todos los packages compilan |
| **Licencia** | MIT |

---

## 📁 Estructura del Proyecto

```
Backstage/
├── apps/
│   ├── studio/         # Editor 3D (Vite + React + R3F + Zustand)
│   └── api/            # Backend API (Hono + better-sqlite3)
├── packages/
│   ├── shared-types/   # Tipos compartidos (FloorPlanObject, CatalogItem, etc.)
│   ├── engine-core/    # Motor 3D base (scene, camera, snapping)
│   ├── engine-catalog/ # Catálogo de objetos profesionales (iluminación, truss, mobiliario)
│   └── shared-tsconfig/# Configuración base de TypeScript
├── docs/               # Documentación
├── package.json        # Raíz del monorepo
└── turbo.json          # Config de Turborepo
```

---

## 🎯 Plan Maestro de Desarrollo

### Fase 0 — Fundación (v0.1.0) ✅ COMPLETADA

| # | Tarea | Esfuerzo | Estado |
|---|-------|----------|--------|
| 0.1 | Crear monorepo con npm workspaces + Turborepo | 1h | ✅ |
| 0.2 | Configurar TypeScript base compartido | 0.5h | ✅ |
| 0.3 | Crear apps/studio (Vite + React + R3F) | 2h | ✅ |
| 0.4 | Crear apps/api (Hono + SQLite) | 2h | ✅ |
| 0.5 | Crear packages (shared-types, engine-core, engine-catalog) | 3h | ✅ |
| 0.6 | Configurar Tailwind v4 + tema oscuro | 1h | ✅ |
| 0.7 | Dockerfile + CI/CD | 2h | ⏳ |
| 0.8 | Verificar build completo | 1h | ✅ |

---

### Fase 1 — Catálogo Profesional (v0.31 → v0.35)

*Equipar el planner con objetos reales de iluminación, trusses y mobiliario*

| Sub-fase | # | Tarea | Inspiración | Esfuerzo |
|----------|---|-------|-------------|----------|
| **1A** | 1.1 | **Iluminación**: 25 instrumentos LED PAR, moving head, beam, spot, strobe, laser, follow spot, blinders | Vectorworks Spotlight | 8h |
| | 1.2 | **Trusses + Rigging**: Truss recto/curvo/cuadrado, torre, motor, punto de carga, shackle, chain hoist | Vectorworks | 6h |
| | 1.3 | **Escenarios + Gradas**: Platformas 1x1/2x2, tarimas, pasarela, barandal, escalón, graderío, barricada | Social Tables | 4h |
| | 1.4 | **Pantallas LED + Video**: LED panel P2/P3/P4, video wall, proyector, pantalla, video processor, cables | Disguise | 4h |
| | 1.5 | **Audio**: Line array, subwoofer, monitor, amplifier, mixer, DI box, mic stand, speaker stand | Vectorworks | 4h |
| **1B** | 1.6 | **Mobiliario eventos**: Mesa redonda (60/90/120/150/180cm), rectangular, cocktail, alta, bar, banquet | Social Tables | 4h |
| | 1.7 | **Sillas**: Trono, plegable, ejecutiva, lounge, sofá VIP, banco, taburete, gradas | Social Tables | 3h |
| | 1.8 | **Estructuras + Carpas**: Carpa tensada, frame, domo, geodesic, pagoda, stand modular | Vectorworks | 4h |
| | 1.9 | **Decoración + Escenografía**: Podio, atril, alfombra, biombo, banderola, globos, telón, back wall | — | 3h |
| **1C** | 1.10 | **Sistema de búsqueda + filtros**: Por tipo, fabricante, peso, consumo, precio, categoría | Vectorworks | 3h |
| | 1.11 | **Propiedades técnicas por objeto**: Peso, consumo eléctrico, precio, fabricante, manual PDF | — | 4h |
| | 1.12 | **Carga masiva de objetos** (import GLTF batch + metadata CSV) | Planner 5D | 4h |

**Total F1:** ~51h

---

### Fase 2 — Layouts Inteligentes (v0.36 → v0.39)

*Dejar de colocar objetos uno por uno → generar configuraciones completas*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| 2.1 | **Layouts de sillería**: Hileras rectas/curvas, banquete, escuela, herradura, cocktail, aula, teatro, auditorio | Social Tables | 6h |
| 2.2 | **Distribución automática**: "50 mesas redondas para 400 personas" → genera layout óptimo en 1 clic | Social Tables | 4h |
| 2.3 | **Seating chart con invitados reales**: Integrar API de Check → arrastrar invitados a asientos | Social Tables | 6h |
| 2.4 | **Wizard de setup**: "Nuevo layout → tipo de evento → capacidad → generar" | — | 4h |
| 2.5 | **Template system**: 15 templates (concierto, boda, corporativo, feria, teatro, gala, conferencia, festival, after, expo, cena, cocktail, desfile, exhibición, worship) | Vectorworks | 6h |
| 2.6 | **Auto-save + versiones**: Historial de cambios con diff visual y restore | — | 4h |

**Total F2:** ~30h

---

### Fase 3 — Profesionalización (v0.40 → v0.44)

*Documentación, planos constructivos, rigging, cumplimiento normativo*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| **Documentación** | | | |
| 3.1 | **Planos 2D acotados**: Planta, alzado, perfil — cotas automáticas, escala gráfica, leyendas | Vectorworks | 8h |
| 3.2 | **Exportar PDF profesional**: Bloques de título, lista de equipos, BOM, fecha, versión, cliente | Vectorworks | 6h |
| 3.3 | **Hoja de equipos automática**: Inventario con peso, consumo, precio total por categoría | Vectorworks | 4h |
| **Rigging** | | | |
| 3.4 | **Rigging estructural**: Trusses, motores, puntos de carga, cálculo de peso total por punto | Braceworks | 12h |
| 3.5 | **Planos de iluminación**: Instrumentos en planta con DMX addresses, dimmers, universos, cables | Vectorworks Spotlight | 8h |
| 3.6 | **Planos de audio**: PA colgado, delays, subwoofers, cobertura estimada | Vectorworks | 6h |
| **Compliance** | | | |
| 3.7 | **Códigos de incendio**: Distancia mínima entre sillas, pasillos, salidas de emergencia | — | 4h |
| 3.8 | **ADA/Accessibilidad**: Rampas, espacio silla ruedas, alturas, % de cumplimiento | — | 3h |
| 3.9 | **Ocupación máxima**: Cálculo automático por metro cuadrado por tipo de layout | — | 2h |
| 3.10 | **Exportar compliance PDF**: Reporte de cumplimiento normativo para autoridades | — | 3h |
| **Unidades** | | | |
| 3.11 | **Sistema de unidades configurable**: Métrico / imperial (pulgadas/pies para EEUU) | — | 2h |
| 3.12 | **Regulaciones regionales**: Eurocodes / ANSI / NOM para cálculos estructurales | Braceworks | 4h |

**Total F3:** ~62h

---

### Fase 4 — Visualización Avanzada (v0.45 → v0.48)

*Render fotorrealista, walkthrough, VR, animación*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| 4.1 | **Modo Render 4K**: Iluminación global, sombras realistas, post-procesamiento (Bloom, AO, tone mapping) | Planner 5D + Disguise | 8h |
| 4.2 | **Walkthrough cinemático**: Cámara en tercera persona, colisiones, transiciones suaves, easing | Disguise + Vision | 6h |
| 4.3 | **Modo nocturno / ambientación**: Simular iluminación del evento — colores, intensidades, gobos, efectos | Vectorworks Spotlight | 6h |
| 4.4 | **VR Preview**: WebXR para ver el layout completo en visor VR | Disguise | 8h |
| 4.5 | **Time-based animation**: Secuencia de iluminación que cambia durante el evento (sunset → night → party) | Disguise | 6h |
| 4.6 | **LOD automático**: Objetos lejanos → geometría reducida, objetos cercanos → detalle completo | — | 4h |
| 4.7 | **Multi-monitor support**: Vista 3D en pantalla principal, planos en secundaria | — | 3h |

**Total F4:** ~41h

---

### Fase 5 — Colaboración y Cloud (v0.49 → v0.52)

*Trabajo en equipo, APIs, integraciones externas*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| **Colaboración** | | | |
| 5.1 | **Edición multiusuario en tiempo real**: WebSocket + Operational Transform + locking | Disguise Cloud | 10h |
| 5.2 | **Comentarios y anotaciones**: Notas sobre el diseño, @menciones, aprobaciones, versiones | Disguise Cloud | 4h |
| 5.3 | **Share links**: Enlace público para cliente (vista, no edición) + password opcional | Disguise Cloud | 3h |
| **Integraciones DMX** | | | |
| 5.4 | **Exportar GDTF/MVR**: Formato estándar de intercambio de diseño de iluminación | Vectorworks Spotlight | 6h |
| 5.5 | **Integración GrandMA**: Exportar show file con fixture IDs, patch, presets | Vectorworks Spotlight | 4h |
| 5.6 | **Integración Chamsys / Avolites / Hog**: Misma lógica, formatos específicos | Vectorworks | 4h |
| **Integraciones Audio** | | | |
| 5.7 | **Importar L-Acoustics Soundvision**: Parsear archivos .sfi para posicionar PA forecast | — | 4h |
| **Integraciones Video** | | | |
| 5.8 | **Exportar a Watchout / Pixera / Resolume**: Datos de mapeo de pantallas LED | Disguise | 4h |
| **API** | | | |
| 5.9 | **REST API pública documentada**: OpenAPI/Swagger para desarrollo externo | Disguise | 6h |
| 5.10 | **Webhooks**: Notificar a sistemas externos cuando cambia un layout / se aprueba / se exporta | — | 3h |

**Total F5:** ~48h

---

### Fase 6 — Experiencia en Tiempo Real (v0.53 → v0.56)

*El nivel Disguise — render en tiempo real, video mapping, AR, AI*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| 6.1 | **RenderStream bridge**: Conectar con Unreal Engine para render fotorrealista en tiempo real | Disguise RenderStream | 16h |
| 6.2 | **Projection mapping**: Mapear contenido de video sobre superficies 3D del escenario | Disguise | 12h |
| 6.3 | **AR preview onsite**: Ver escenario virtual superpuesto en el venue real vía cámara del celular | Disguise xR + Planner 5D | 10h |
| 6.4 | **LED wall content simulator**: Simular loops de contenido en pantallas del escenario | Disguise | 8h |
| 6.5 | **AI Layout Generator**: Prompt → "Concierto rock 5000 pers 3 bandas pantalla 20m" → layout completo | — | 12h |
| 6.6 | **AI Capacity Optimizer**: "Coloca X sillas maximizando espacio disponible" | — | 6h |
| 6.7 | **AI Compliance Check**: Revisión automática de código de incendios y accesibilidad | — | 6h |

**Total F6:** ~70h

---

### Fase 7 — Negocio y Plataforma (v0.57+)

*Monetización, white label, marketplace, certificación*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| **Modelo de negocio** | | | |
| 7.1 | **Sistema de planes**: Free (básico) / Pro (iluminación, rigging) / Enterprise (white label, API) | — | 6h |
| 7.2 | **White label**: Personalizar logo, colores, dominio para empresas de producción | — | 8h |
| 7.3 | **Marketplace de objetos**: Vender templates, modelos 3D, plugins de terceros | Planner 5D (8K items) | 12h |
| **Roles** | | | |
| 7.4 | **Sistema de roles**: Admin, diseñador, cliente (vista), venue manager, proveedor | — | 4h |
| 7.5 | **Workflow de aprobación**: Cliente diseña → venue aprueba → producción ejecuta | Disguise Cloud | 6h |
| **Onboarding** | | | |
| 7.6 | **Tutorial interactivo**: Guía paso a paso al primer uso | — | 4h |
| 7.7 | **Proyectos de ejemplo precargados**: 10 ejemplos completos para aprender | — | 4h |
| **Documentación** | | | |
| 7.8 | **Guía de usuario completa**: Documentación con ejemplos, screenshots, videos | — | 8h |
| 7.9 | **Video tutoriales embebidos**: Como Disguise Learn — dentro de la app | Disguise Learn | 6h |
| 7.10 | **API docs**: OpenAPI/Swagger para desarrolladores de plugins | — | 4h |
| **Certificación** | | | |
| 7.11 | **Check 3D Planner University**: Cursos online con certificación oficial | Vectorworks University | 10h |

**Total F7:** ~72h

---

### Fase 8 — Plataformas y Mobile (v0.61+)

*Multi-dispositivo, offline, touch*

| # | Tarea | Inspiración | Esfuerzo |
|---|-------|-------------|----------|
| 8.1 | **UI responsive para tablet**: Touch events adaptados, gestos, layout rediseñado | — | 6h |
| 8.2 | **Modo vista invitado mobile**: "¿Dónde está mi asiento?" — mapa interactivo en el celular | — | 4h |
| 8.3 | **PWA offline-first**: Funcionar sin internet para venue surveys en campo | Planner 5D | 6h |
| 8.4 | **Importar CAD**: DWG, DXF, SketchUp, IFC — plano del venue real como base | Vectorworks | 10h |
| 8.5 | **Apple Vision Pro**: Experiencia inmersiva en visor de Apple | Planner 5D Vision Pro | 12h |

**Total F8:** ~38h

---

## 📊 Resumen General

| Fase | Enfoque | Horas | Prioridad |
|------|---------|-------|-----------|
| **0** | Fundación técnica | 13h | 🔴 **Completada** |
| **1** | Catálogo profesional | 51h | 🔴 Alta |
| **2** | Layouts inteligentes | 30h | 🔴 Alta |
| **3** | Profesionalización + Compliance | 62h | 🟡 Media |
| **4** | Visualización avanzada | 41h | 🟡 Media |
| **5** | Colaboración + Integraciones | 48h | 🟡 Media |
| **6** | Tiempo real (Disguise level) | 70h | 🟢 Baja |
| **7** | Negocio + Marketplace | 72h | 🟢 Baja |
| **8** | Plataformas + Mobile | 38h | 🟢 Baja |
| | **Total** | **~425h** | |

---

## 🧠 Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| **UI Framework** | React | 19.2+ |
| **3D Engine** | Three.js | r184 |
| **React 3D** | @react-three/fiber | v9.6+ |
| **Helpers 3D** | @react-three/drei | v10.7+ |
| **Post-proc** | @react-three/postprocessing | v2.16+ |
| **State** | Zustand | v5 |
| **Build** | Vite | v8 |
| **CSS** | Tailwind CSS | v4 |
| **Colaboración** | Yjs + Hocuspocus | v13+ |
| **Backend API** | Hono | v4+ |
| **BD** | SQLite (better-sqlite3) | v11+ |
| **Monorepo** | npm workspaces + Turborepo | v2+ |

---

## 📚 Inspiraciones

| Producto | Referencia | Área |
|----------|-----------|------|
| **Disguise** | disguise.one | Visión: render en tiempo real, video mapping, xR |
| **Vectorworks Spotlight** | vectorworks.net/spotlight | Estándar: iluminación, trusses, rigging, planos |
| **Vectorworks Braceworks** | vectorworks.net/braceworks | Análisis estructural, cálculo de cargas |
| **Social Tables (Cvent)** | socialtables.com | Diagramación de eventos, seating charts |
| **Planner 5D** | planner5d.com | Catálogo masivo, AI, AR, cross-platform |

---

## 📋 Documentación Referenciada

| Archivo | Propósito |
|---------|-----------|
| `docs/ARQUITECTURA.md` | Arquitectura del sistema |
| `docs/AGENTS.md` | Directivas para el agente |
