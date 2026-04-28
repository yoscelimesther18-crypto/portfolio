# Plan de Implementación: Portfolio Website

## Resumen

Implementación incremental del portafolio estático de Yoscelim Pérez usando HTML5, CSS3 y JavaScript vanilla. Cada tarea construye sobre la anterior, comenzando por la estructura base y estilos, luego las secciones de contenido, y finalmente la interactividad y validación. El sitio se despliega en GitHub Pages sin dependencias de compilación.

## Tareas

- [x] 1. Crear estructura base del proyecto y estilos globales
  - [x] 1.1 Crear `index.html` con estructura HTML5 semántica, meta viewport, enlaces a Google Fonts (Inter + Fira Code con `display=swap`), enlaces a las hojas de estilo CSS y scripts JS con `defer`
    - Incluir todas las secciones vacías con sus IDs: `#hero`, `#projects`, `#skills`, `#about`, `#contact`
    - Incluir elemento `<noscript>` en la sección de contacto con enlace mailto como fallback
    - _Requisitos: 10.1, 10.2, 10.3, 10.4, 9.4, 11.3_

  - [x] 1.2 Crear `css/styles.css` con variables CSS (paleta de 5 colores oscura con acentos vibrantes), reset básico, tipografía global, y clases utilitarias (`.btn`, `.btn--primary`, `.btn--outline`, `.section-title`, `.tech-tag`)
    - Definir custom properties para colores, fuentes, sombras y transiciones
    - _Requisitos: 8.1, 8.2, 8.4_

  - [x] 1.3 Crear `css/animations.css` con keyframes para fade-in, translate-up, y clases `.animate-fade-in` y `.scroll-reveal` con soporte para custom property `--delay`
    - Estado base de `.scroll-reveal` debe tener `opacity: 1` para funcionar sin JS (Requisito 10.5)
    - Transiciones de elementos interactivos entre 200-500ms
    - _Requisitos: 8.3, 8.5, 10.5_

  - [x] 1.4 Crear `css/responsive.css` con media queries para los breakpoints: <768px (1 columna), 768-1024px (2 columnas), >1024px (3 columnas)
    - _Requisitos: 9.1, 9.2, 9.3, 9.5_

- [x] 2. Implementar Navegación Principal y Sección Hero
  - [x] 2.1 Implementar la barra de navegación (`<nav>`) en `index.html` con enlaces a las 5 secciones (Inicio, Proyectos, Habilidades, Sobre Mí, Contacto), logo "YP", botón hamburguesa con `aria-label` y `aria-expanded`
    - Estilos en `css/styles.css`: navbar fija, efecto backdrop-filter blur con clase `.navbar--scrolled`
    - Estilos responsivos en `css/responsive.css`: colapsar a menú hamburguesa en <768px
    - _Requisitos: 1.1, 1.2, 1.4, 1.5_

  - [x] 2.2 Crear `js/main.js` con funciones: `handleScroll()` para añadir `.navbar--scrolled`, `toggleMenu()` para menú hamburguesa con actualización de `aria-expanded`, y `smoothScroll(targetId)` usando `scrollIntoView({ behavior: 'smooth' })`
    - Cerrar menú al hacer clic en un enlace o fuera del menú
    - Validar que el target del hash existe antes de ejecutar scroll
    - _Requisitos: 1.2, 1.3, 1.4, 1.5_

  - [x] 2.3 Implementar la Sección Hero en `index.html` con nombre "Yoscelim Pérez", título "Fullstack Developer / Product Engineer", descripción enfocada en resultados, botón CTA a `#contact` y botón secundario a `#projects`
    - Aplicar clases `.animate-fade-in` con delays escalonados vía `--delay` (0s, 0.2s, 0.4s, 0.6s, 0.8s), duración total ≤ 1.5s
    - Incluir elemento decorativo `.hero__visual` con formas geométricas CSS
    - Mínimo 90vh de altura
    - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 3. Implementar Galería de Proyectos
  - [x] 3.1 Implementar las 3 tarjetas de proyectos reales en `index.html`: Eclaire, Chocolate Web y NotasApp, cada una con imagen (placeholder), título, descripción, tecnologías usadas, enlace al proyecto en vivo, y badge "Proyecto Real"
    - Usar `data-category="existing"` y `loading="lazy"` en imágenes
    - Efecto hover: `translateY(-8px)` + box-shadow ampliado, transición 300ms
    - _Requisitos: 3.1, 3.2, 3.3, 3.4, 3.5, 11.2_

  - [x] 3.2 Implementar al menos 2 tarjetas de proyectos demostrativos AWS con badge "Demo AWS", título, descripción del caso de uso, arquitectura de servicios AWS y tecnologías
    - Usar `data-category="demo"` para diferenciación visual
    - Implementar panel expandible `.project-detail` que se muestra al hacer clic en una tarjeta demo (vista detallada dentro de la misma página)
    - _Requisitos: 4.1, 4.2, 4.3, 4.4_

  - [ ]* 3.3 Escribir prueba de propiedad para completitud de tarjeta de proyecto
    - **Propiedad 1: Completitud de Tarjeta de Proyecto** — Para cualquier objeto Project válido, la tarjeta renderizada debe contener imagen, título, descripción, tecnologías y enlace (si existe). Si es "demo", debe incluir servicios AWS.
    - **Valida: Requisitos 3.4, 4.2**

  - [ ]* 3.4 Escribir prueba de propiedad para etiqueta de categoría
    - **Propiedad 2: Etiqueta de categoría corresponde al tipo de proyecto** — El badge debe ser "Proyecto Real" para `category === "existing"` y "Demo AWS" para `category === "demo"`.
    - **Valida: Requisito 4.3**

- [x] 4. Implementar Sección de Habilidades y Sobre Mí
  - [x] 4.1 Implementar la Sección de Habilidades en `index.html` con grid de 4 categorías (Frontend, Backend, Cloud/AWS, Herramientas) y las tecnologías requeridas: HTML, CSS, JavaScript, React, Node.js, Python, Amazon Lex, AWS Lambda, AWS S3, DynamoDB, Git
    - Cada habilidad con icono (img/svg) y nombre de tecnología
    - Aplicar clase `.scroll-reveal` con delay escalonado vía `--reveal-delay`
    - _Requisitos: 5.1, 5.2, 5.3, 5.4_

  - [ ]* 4.2 Escribir prueba de propiedad para renderizado de habilidades
    - **Propiedad 3: Cada habilidad muestra icono y nombre** — Para cualquier objeto Skill válido, el elemento renderizado debe contener un icono (img o svg) y el nombre de la tecnología.
    - **Valida: Requisito 5.2**

  - [x] 4.3 Implementar la Sección Sobre Mí en `index.html` con layout de dos columnas: foto/avatar a la izquierda y texto + métricas a la derecha
    - Incluir espacio para foto de perfil con placeholder
    - Incluir métricas/logros clave con atributo `data-count` para animación de contadores
    - Aplicar clase `.scroll-reveal`
    - _Requisitos: 6.1, 6.2, 6.3_

- [x] 5. Checkpoint — Verificar estructura y estilos
  - Asegurar que todas las secciones se renderizan correctamente, los estilos responsivos funcionan en los 3 breakpoints, y las animaciones CSS están definidas. Preguntar al usuario si hay dudas.

- [x] 6. Implementar Sección de Contacto y Validación de Formulario
  - [x] 6.1 Implementar la Sección de Contacto en `index.html` con formulario (nombre, email, mensaje), acción a Formspree, enlaces a GitHub y LinkedIn, número de teléfono 3169897732, y enlace mailto como alternativa
    - Cada campo con `<label>`, `required`, y `<span class="form-error" aria-live="polite">`
    - _Requisitos: 7.1, 7.4, 7.5, 7.6_

  - [x] 6.2 Crear `js/form.js` con funciones: `initFormValidation()`, `validateField(field)`, `validateEmail(email)`, `showError(field, message)`, `clearError(field)`, `handleSubmit(event)`
    - Validación en tiempo real con evento `blur`
    - Validación completa al `submit`
    - Reglas: nombre ≥ 2 chars, email con regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`, mensaje ≥ 10 chars
    - Envío a Formspree con fetch; si falla, mostrar error + enlace mailto
    - Si éxito, limpiar formulario y mostrar confirmación
    - Clases `.form-group--error` y `.form-group--success` para feedback visual
    - _Requisitos: 7.1, 7.2, 7.3, 7.5_

  - [ ]* 6.3 Escribir prueba de propiedad para validación de campos vacíos
    - **Propiedad 4: Campos vacíos son rechazados** — Para cualquier cadena vacía o de solo espacios, `validateField` debe retornar `{ valid: false }` con mensaje de error.
    - **Valida: Requisito 7.2**

  - [ ]* 6.4 Escribir prueba de propiedad para validación de email
    - **Propiedad 5: Validación de formato de correo electrónico** — Para cualquier cadena que no cumpla formato email, `validateEmail` debe retornar `false`; para cadenas válidas, `true`.
    - **Valida: Requisito 7.3**

- [x] 7. Implementar Sistema de Animaciones JavaScript
  - [x] 7.1 Crear `js/animations.js` con funciones: `initScrollReveal()` usando Intersection Observer (threshold 0.15) para activar `.scroll-reveal`, `initHeroAnimations()` para animaciones de entrada del hero, e `initCounterAnimation()` para animar contadores numéricos en Sobre Mí
    - Registrar observers en `DOMContentLoaded`
    - _Requisitos: 2.4, 5.3, 8.5_

- [x] 8. Verificación final de accesibilidad, rutas y rendimiento
  - [x] 8.1 Revisar que todas las imágenes en `index.html` tengan atributo `alt` descriptivo no vacío, que las imágenes below-the-fold tengan `loading="lazy"`, y que las dimensiones `width`/`height` estén definidas para evitar layout shift
    - _Requisitos: 11.2, 11.4, 9.5_

  - [ ]* 8.2 Escribir prueba de propiedad para rutas relativas
    - **Propiedad 6: Todas las referencias locales usan rutas relativas** — Para cualquier atributo `src` o `href` que apunte a recurso local, la ruta no debe comenzar con `/` ni con protocolo absoluto.
    - **Valida: Requisito 10.3**

  - [ ]* 8.3 Escribir prueba de propiedad para texto alternativo en imágenes
    - **Propiedad 7: Todas las imágenes tienen texto alternativo descriptivo** — Para cualquier `<img>`, el atributo `alt` debe estar presente y no vacío.
    - **Valida: Requisito 11.4**

- [x] 9. Integración final y cableado de componentes
  - [x] 9.1 Conectar todos los scripts en `index.html`: inicializar navegación, animaciones y formulario en `DOMContentLoaded`. Verificar que todos los recursos usan rutas relativas, que el número de solicitudes HTTP externas no excede 10, y que el sitio funciona correctamente sin servidor backend
    - _Requisitos: 10.1, 10.3, 10.4, 11.1, 11.3_

  - [ ]* 9.2 Escribir pruebas unitarias de integración
    - Verificar que los 5 enlaces de navegación existen
    - Verificar nombre, título y botones CTA en Hero
    - Verificar conteo de tarjetas: 3 reales + 2 demos
    - Verificar meta tag viewport presente
    - Verificar enlace a Google Fonts en head
    - _Requisitos: 1.1, 2.1, 3.1, 3.2, 4.1, 9.4, 8.2_

- [x] 10. Checkpoint final — Asegurar que todo funciona
  - Asegurar que todas las pruebas pasan, que el sitio es navegable en los 3 breakpoints, y que el contenido es legible con JavaScript deshabilitado. Preguntar al usuario si hay dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- Las pruebas de propiedad usan fast-check y validan propiedades universales de correctitud
- Las pruebas unitarias validan ejemplos específicos y casos borde
- Crear imágenes placeholder en `img/projects/` para desarrollo; reemplazar con capturas reales antes del despliegue
