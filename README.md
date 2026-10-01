# PORTAFOLIO ACADÉMICO – BASE DE DATOS II (UPLA)

Sistema Web Institucional desarrollado para la presentación curricular y gestión de evidencias académicas de la asignatura **Base de Datos II** en la **Universidad Peruana Los Andes (UPLA)**.

---

## 📌 Datos Informativos del Estudiante

- **Estudiante:** Jorge Luis Curo Villar
- **Código:** H14203C
- **Universidad:** Universidad Peruana Los Andes (UPLA)
- **Facultad:** Facultad de Ingeniería
- **Carrera Profesional:** Escuela Profesional de Ingeniería de Sistemas y Computación
- **Asignatura:** Base de datos II
- **Docente:** Raul Enrique Fenandez Bejarano
- **Sede:** Huancayo, Junín, Perú
- **Teléfono / WhatsApp:** [+51 901040184](https://wa.me/51901040184)

---

## 🚀 Arquitectura Tecnológica

- **Framework:** Next.js 14+ (App Router)
- **Lenguaje:** TypeScript estricto
- **Estilos:** Tailwind CSS con paleta institucional UPLA y soporte completo de Modo Oscuro / Claro
- **Iconografía:** Lucide React
- **Persistencia:** Almacenamiento local (`localStorage`) para evidencias, subida de archivos y simulaciones de evaluación.

---

## 📂 Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales y tokens
│   │   ├── layout.tsx           # Layout raíz con ThemeProvider y SEO
│   │   └── page.tsx             # Orquestador principal y estado del portafolio
│   ├── components/
│   │   ├── blocks/
│   │   │   ├── Navbar.tsx       # Navegación con pestañas, logo UPLA y botón Día/Noche
│   │   │   ├── Presentacion.tsx # Tarjeta de presentación, Hero banner y estadísticas
│   │   │   ├── Informacion.tsx  # Ficha técnica, datos institucionales y competencias
│   │   │   ├── Trabajos.tsx     # Acordeón por Unidades y Semanas con subida de evidencias
│   │   │   ├── Contacto.tsx     # Tarjeta de contacto y enlace directo a WhatsApp
│   │   │   ├── AdminPanel.tsx   # Dashboard docente para supervisión y calificaciones
│   │   │   └── Footer.tsx       # Créditos oficiales con formato requerido
│   │   └── ui/
│   │       └── UplaLogo.tsx     # Escudo heráldico vectorial oficial de la UPLA (SVG)
│   ├── context/
│   │   └── ThemeContext.tsx     # Contexto para alternar modo claro / nocturno
│   ├── data/
│   │   └── portfolioData.ts     # Contenido curricular de las 4 unidades y 16 semanas
│   └── types/
│       └── portfolio.ts         # Definición de tipos e interfaces TypeScript
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🛠️ Ejecución Local

Para levantar el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3050](http://localhost:3050).

Para compilar para producción:

```bash
npm run build
```

---

## 🎓 Créditos y Derechos

- **Autor:** JORGE LUIS CURO VILLAR
- **Cátedra:** BASE DE DATOS II – UPLA
