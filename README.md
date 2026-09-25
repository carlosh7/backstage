# Backstage

Backstage es un editor profesional de escenarios y eventos en 3D. Se trata de una aplicación web diseñada para la planificación, diseño y visualización de escenarios, eventos y configuraciones técnicas (backstage) de forma interactiva.

## 🛠 Stack Tecnológico

El proyecto utiliza un conjunto de tecnologías enfocadas en ofrecer un editor 3D de alto rendimiento:

- **Frontend / UI**: React (v19) y React Router (`react-router-dom`) para la navegación y estructura de la app web.
- **Motor 3D**: Three.js junto con `@react-three/fiber` y `@react-three/drei` para la visualización, renderizado e interacciones 3D en React.
- **Backend / API**: Hono, un framework web ligero.
- **Base de Datos**: SQLite utilizando `better-sqlite3`.
- **Exportación de Documentos**: `jspdf` para generar archivos PDF y reportes del proyecto.
- **Estado y Sincronización**: Zustand para la gestión del estado global y Yjs para características colaborativas.
- **Estilos**: Tailwind CSS (v4) integrado en Vite.

## 📁 Estructura del Proyecto

La estructura principal de carpetas en el repositorio es la siguiente:

- `apps/`: Aplicaciones principales del proyecto. Contiene `studio/` (el editor 3D).
- `docs/`: Documentación del proyecto, hojas de ruta (Roadmap) y directivas de desarrollo.
- `packages/`: Paquetes y módulos compartidos en la arquitectura (como tipos, motor principal de escenarios `engine-core` y catálogos de objetos `engine-catalog`).
- `src/`: Código fuente adicional y de inicialización del frontend de la aplicación, incluyendo componentes, manejadores de estado e interfaces visuales (como `App.tsx` y las rutas del editor).
- `public/`: Archivos estáticos de la aplicación web.

## ⚙️ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (se recomienda una versión reciente o LTS).
- **npm** (Node Package Manager) como gestor de paquetes, ya que el proyecto utiliza un archivo `package-lock.json`.

## 🚀 Instalación y Ejecución

1. Clona el repositorio e instala las dependencias utilizando npm:
   ```bash
   npm install
   ```

2. **Scripts disponibles**: Puedes utilizar los siguientes comandos definidos en el `package.json` para trabajar con el proyecto:

   - **Iniciar el entorno de desarrollo:**
     Arranca el servidor de desarrollo local (Vite) para trabajar en el frontend.
     ```bash
     npm run dev
     ```

   - **Construir el proyecto para producción:**
     Compila la aplicación y la optimiza para su despliegue.
     ```bash
     npm run build
     ```

   - **Previsualizar la build:**
     Inicia un servidor web local ligero para probar la versión de producción generada por el comando de build.
     ```bash
     npm run preview
     ```

   - **Iniciar la API localmente:**
     Ejecuta el servidor backend con Hono (utilizando `tsx`).
     ```bash
     npm run api
     ```
