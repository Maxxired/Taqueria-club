# Proyecto taqueria

¡Bienvenido a tu primer proyecto con React, Vite y TypeScript! Esta guía te ayudará a entender qué son estas tecnologías y cómo ejecutar este proyecto paso a paso.

## ¿Qué tecnologías usamos? 🤔

### React
React es una biblioteca de JavaScript que nos ayuda a crear interfaces de usuario (las páginas web que ves) de manera más fácil y organizada. Piénsalo como un conjunto de herramientas que hace que crear sitios web sea más sencillo y rápido.

### Vite
Vite es una herramienta de construcción súper rápida que hace que desarrollar sea más eficiente. Es como tener un asistente que hace que tus cambios se vean instantáneamente en el navegador.

### TypeScript
TypeScript es JavaScript con "superpoderes". Te ayuda a detectar errores antes de que sucedan y hace que tu código sea más fácil de entender y mantener.

### ¿Por qué usar esta combinación?
- **React**: Componentes reutilizables y código organizado
- **Vite**: Desarrollo súper rápido y compilación eficiente
- **TypeScript**: Menos errores y código más claro
- **Popular en la industria**: Muchas empresas modernas usan esta combinación

## Instalación y configuración 🛠️

### Paso 1: Descargar el proyecto
```bash
# Si usas Git (recomendado)
git clone https://github.com/Maxxired/Taqueria-club.git
cd Taqueria-club

# O simplemente descarga el ZIP y descomprímelo
```

### Paso 2: Instalar las dependencias
Las dependencias son como "bibliotecas" o "herramientas" que el proyecto necesita para funcionar.

```bash
npm install
```

**¿Qué hace este comando?**
- Lee el archivo `package.json`
- Descarga todas las herramientas que el proyecto necesita
- Las guarda en una carpeta llamada `node_modules`

### Paso 3: Ejecutar el proyecto
```bash
npm run dev
```

**¿Qué sucede cuando ejecutas este comando?**
- Vite inicia un servidor de desarrollo súper rápido
- Se abre automáticamente tu navegador
- Verás tu proyecto ejecutándose en `http://localhost:5173`
- Los cambios que hagas se reflejan instantáneamente (¡Vite es increíblemente rápido!)

## Estructura del proyecto 📁

Aquí te explico qué hace cada carpeta y archivo importante:

```
Taqueria-club/
├── public/                 # Archivos públicos (imágenes, iconos, etc.)
│   └── vite.svg           # Logo de Vite
├── src/                   # Aquí está todo tu código React + TypeScript
│   ├── assets/             # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── pages/              # Páginas de tu aplicación (.tsx)
│   ├── App.tsx           # Enrutador de la aplicacion (¡nota la extensión .tsx!)
│   ├── main.tsx          # Punto de entrada de React con Vite
│   ├── index.css         # Estilos globales de la aplicación
│   └── vite-env.d.ts     # Tipos de TypeScript para Vite
├── package.json          # Lista de dependencias y configuración
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── README.md            # Este archivo que estás leyendo
```

## Comandos útiles 💻

```bash
# Iniciar el proyecto en modo desarrollo (¡Este es ideal para el uso local!)
npm run dev

# Crear una versión optimizada para producción
npm run build

# Ver la versión de producción localmente
npm run preview

# Verificar errores de TypeScript
npm run type-check

# Ver todas las dependencias instaladas
npm list
```

## Problemas comunes y soluciones 🔧

### Error: "npm no se reconoce como comando"
**Solución:** Node.js no está instalado o no está en el PATH del sistema. Reinstala Node.js.

### Error: "Cannot find module"
**Solución:** Ejecuta `npm install` de nuevo para instalar las dependencias.

### La página no se actualiza automáticamente
**Solución:**
1. Detén el servidor (Ctrl + C)
2. Ejecuta `npm run dev` de nuevo

### Puerto 5173 ya está en uso
**Solución:**
- Vite automáticamente buscará otro puerto disponible
- O puedes especificar uno: `npm run dev -- --port 3000`

### Errores de TypeScript
**Solución:**
- Lee el mensaje de error, TypeScript es muy descriptivo
- Verifica que los tipos de tus variables sean correctos
- Usa `npm run type-check` para ver todos los errores de tipos

### "Property does not exist on type"
**Solución:**
- Define el tipo correcto para tu objeto o variable
- Usa interfaces para definir la estructura de tus objetos

## Recursos para seguir aprendiendo 📚

- **Documentación oficial de React:** https://es.react.dev/
- **Documentación de Vite:** https://vitejs.dev/
- **TypeScript para principiantes:** https://www.typescriptlang.org/docs/
- **Documentacion de Tailwind CSS:** https://tailwindcss.com/docs
