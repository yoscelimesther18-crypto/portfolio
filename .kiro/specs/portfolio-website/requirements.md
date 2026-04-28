# Documento de Requisitos

## Introducción

Sitio web de portafolio estático, visualmente atractivo y moderno, diseñado para posicionar a Yoscelim Pérez como Fullstack Developer / Product Engineer enfocada en resultados. El sitio será desplegado en GitHub Pages y construido exclusivamente con HTML, CSS y JavaScript vanilla (sin frameworks que requieran pasos de compilación). El portafolio exhibirá proyectos existentes y proyectos demostrativos relacionados con Amazon Lex y servicios AWS.

## Datos de Contacto del Propietario

- **Nombre completo**: Yoscelim Pérez
- **Teléfono**: 3169897732
- **LinkedIn**: https://www.linkedin.com/in/yoscelim-perez-jimenez-72475b184
- **GitHub**: https://github.com/yoscelimesther18-crypto

## Glosario

- **Portafolio**: Sitio web estático que presenta el perfil profesional, habilidades y proyectos del usuario
- **Sección_Hero**: Área principal visible al cargar la página que presenta el nombre, título profesional y propuesta de valor del usuario
- **Tarjeta_Proyecto**: Componente visual que muestra información resumida de un proyecto incluyendo imagen, título, descripción y enlace
- **Galería_Proyectos**: Sección del portafolio que contiene todas las Tarjetas_Proyecto organizadas por categoría
- **Navegación_Principal**: Barra de navegación fija que permite acceder a las diferentes secciones del portafolio
- **Sección_Habilidades**: Área que presenta las competencias técnicas del usuario organizadas por categoría
- **Sección_Contacto**: Área con información y formulario para contactar al usuario
- **Sistema_Animaciones**: Conjunto de animaciones CSS y JavaScript que mejoran la experiencia visual del sitio
- **Diseño_Responsivo**: Capacidad del sitio de adaptarse correctamente a diferentes tamaños de pantalla
- **GitHub_Pages**: Servicio de hosting estático de GitHub donde se desplegará el portafolio

## Requisitos

### Requisito 1: Estructura de Navegación Principal

**Historia de Usuario:** Como visitante del portafolio, quiero una navegación clara y accesible, para poder explorar todas las secciones del sitio fácilmente.

#### Criterios de Aceptación

1. THE Navegación_Principal SHALL presentar enlaces a las secciones: Inicio, Proyectos, Habilidades, Sobre Mí y Contacto
2. WHILE el usuario desplaza la página, THE Navegación_Principal SHALL permanecer fija en la parte superior de la ventana del navegador
3. WHEN el usuario hace clic en un enlace de la Navegación_Principal, THE Portafolio SHALL desplazar suavemente la vista hacia la sección correspondiente
4. WHEN el ancho de pantalla es menor a 768 píxeles, THE Navegación_Principal SHALL colapsar los enlaces en un menú tipo hamburguesa
5. WHEN el usuario hace clic en el icono de menú hamburguesa, THE Navegación_Principal SHALL mostrar los enlaces de navegación en un panel desplegable

### Requisito 2: Sección Hero con Presentación Profesional

**Historia de Usuario:** Como visitante del portafolio, quiero ver una presentación impactante del desarrollador, para entender rápidamente su perfil y propuesta de valor.

#### Criterios de Aceptación

1. THE Sección_Hero SHALL mostrar el nombre "Yoscelim Pérez", el título "Fullstack Developer / Product Engineer" y una descripción breve enfocada en resultados
2. THE Sección_Hero SHALL incluir un botón de llamada a la acción que dirija a la Sección_Contacto
3. THE Sección_Hero SHALL incluir un segundo botón que dirija a la Galería_Proyectos
4. WHEN la Sección_Hero se carga por primera vez, THE Sistema_Animaciones SHALL aplicar una animación de entrada al texto y elementos visuales con una duración máxima de 1.5 segundos
5. THE Sección_Hero SHALL ocupar al menos el 90% de la altura visible de la ventana del navegador

### Requisito 3: Galería de Proyectos Existentes

**Historia de Usuario:** Como visitante del portafolio, quiero ver los proyectos reales del desarrollador, para evaluar su experiencia y calidad de trabajo.

#### Criterios de Aceptación

1. THE Galería_Proyectos SHALL mostrar una Tarjeta_Proyecto para el proyecto "Eclaire" con enlace a https://yoscelimesther18-crypto.github.io/eclaire/index.html
2. THE Galería_Proyectos SHALL mostrar una Tarjeta_Proyecto para el proyecto "Chocolate Web" con enlace a https://yoscelimesther18-crypto.github.io/chocolate-web/
3. THE Galería_Proyectos SHALL mostrar una Tarjeta_Proyecto para el proyecto "NotasApp" con enlace a https://yoscelimesther18-crypto.github.io/NotasApp/
4. THE Tarjeta_Proyecto SHALL incluir una imagen representativa, título del proyecto, descripción breve, tecnologías utilizadas y un enlace para ver el proyecto en vivo
5. WHEN el usuario posiciona el cursor sobre una Tarjeta_Proyecto, THE Sistema_Animaciones SHALL aplicar un efecto visual de elevación y resaltado con una transición de 300 milisegundos

### Requisito 4: Proyectos Demostrativos de AWS

**Historia de Usuario:** Como visitante del portafolio, quiero ver proyectos relacionados con Amazon Lex y servicios AWS, para evaluar la experiencia del desarrollador en tecnologías cloud.

#### Criterios de Aceptación

1. THE Galería_Proyectos SHALL mostrar al menos 2 Tarjetas_Proyecto demostrativas relacionadas con Amazon Lex y servicios AWS
2. THE Tarjeta_Proyecto demostrativa SHALL incluir título, descripción del caso de uso, arquitectura de servicios AWS involucrados y tecnologías utilizadas
3. THE Galería_Proyectos SHALL diferenciar visualmente los proyectos existentes de los proyectos demostrativos mediante una etiqueta de categoría
4. WHEN el usuario hace clic en una Tarjeta_Proyecto demostrativa sin enlace externo, THE Portafolio SHALL mostrar una vista detallada del proyecto dentro de la misma página

### Requisito 5: Sección de Habilidades Técnicas

**Historia de Usuario:** Como visitante del portafolio, quiero ver las habilidades técnicas del desarrollador organizadas claramente, para entender su perfil técnico completo.

#### Criterios de Aceptación

1. THE Sección_Habilidades SHALL organizar las competencias en categorías: Frontend, Backend, Cloud/AWS y Herramientas
2. THE Sección_Habilidades SHALL presentar cada habilidad con un icono representativo y el nombre de la tecnología
3. WHEN la Sección_Habilidades entra en el área visible de la ventana del navegador, THE Sistema_Animaciones SHALL aplicar una animación de aparición progresiva a cada elemento de habilidad
4. THE Sección_Habilidades SHALL incluir al menos las siguientes tecnologías: HTML, CSS, JavaScript, React, Node.js, Python, Amazon Lex, AWS Lambda, AWS S3, DynamoDB y Git

### Requisito 6: Sección Sobre Mí

**Historia de Usuario:** Como visitante del portafolio, quiero conocer más sobre el desarrollador como profesional, para evaluar si su perfil se alinea con mis necesidades.

#### Criterios de Aceptación

1. THE Portafolio SHALL incluir una sección "Sobre Mí" con una descripción profesional enfocada en resultados y experiencia fullstack
2. THE Sección Sobre Mí SHALL incluir un espacio para foto de perfil o avatar profesional
3. THE Sección Sobre Mí SHALL destacar métricas o logros clave del desarrollador en formato visual

### Requisito 7: Sección de Contacto

**Historia de Usuario:** Como visitante del portafolio, quiero poder contactar al desarrollador fácilmente, para iniciar una conversación profesional.

#### Criterios de Aceptación

1. THE Sección_Contacto SHALL incluir un formulario con campos para nombre, correo electrónico y mensaje
2. WHEN el usuario envía el formulario con campos vacíos, THE Sección_Contacto SHALL mostrar mensajes de validación indicando los campos requeridos
3. WHEN el usuario envía el formulario con un formato de correo electrónico inválido, THE Sección_Contacto SHALL mostrar un mensaje indicando que el formato es incorrecto
4. THE Sección_Contacto SHALL incluir enlaces a perfiles profesionales: GitHub (https://github.com/yoscelimesther18-crypto) y LinkedIn (https://www.linkedin.com/in/yoscelim-perez-jimenez-72475b184)
5. IF el envío del formulario falla por ser un sitio estático, THEN THE Sección_Contacto SHALL proporcionar una alternativa de contacto directo por correo electrónico mediante un enlace mailto
6. THE Sección_Contacto SHALL mostrar el número de teléfono 3169897732 como información de contacto adicional

### Requisito 8: Diseño Visual Atractivo y Moderno

**Historia de Usuario:** Como visitante del portafolio, quiero una experiencia visual moderna y profesional, para percibir al desarrollador como un profesional de alto nivel.

#### Criterios de Aceptación

1. THE Portafolio SHALL utilizar una paleta de colores consistente con un máximo de 5 colores principales definidos como variables CSS
2. THE Portafolio SHALL utilizar tipografía moderna importada desde Google Fonts
3. THE Sistema_Animaciones SHALL aplicar transiciones suaves en todos los elementos interactivos con una duración entre 200 y 500 milisegundos
4. THE Portafolio SHALL incluir elementos visuales decorativos como gradientes, sombras y formas geométricas de fondo
5. WHEN el usuario desplaza la página, THE Sistema_Animaciones SHALL revelar progresivamente los elementos de cada sección mediante animaciones de aparición

### Requisito 9: Diseño Responsivo

**Historia de Usuario:** Como visitante del portafolio, quiero que el sitio se vea correctamente en cualquier dispositivo, para poder explorarlo desde mi teléfono, tablet o computadora.

#### Criterios de Aceptación

1. WHEN el ancho de pantalla es menor a 768 píxeles, THE Diseño_Responsivo SHALL reorganizar el contenido en una sola columna
2. WHEN el ancho de pantalla está entre 768 y 1024 píxeles, THE Diseño_Responsivo SHALL mostrar las Tarjetas_Proyecto en una cuadrícula de 2 columnas
3. WHEN el ancho de pantalla es mayor a 1024 píxeles, THE Diseño_Responsivo SHALL mostrar las Tarjetas_Proyecto en una cuadrícula de 3 columnas
4. THE Portafolio SHALL incluir la meta etiqueta viewport configurada para ancho de dispositivo y escala inicial de 1
5. THE Portafolio SHALL asegurar que las imágenes se escalen proporcionalmente sin desbordamiento horizontal en cualquier tamaño de pantalla

### Requisito 10: Compatibilidad con GitHub Pages

**Historia de Usuario:** Como desarrollador, quiero que mi portafolio sea completamente compatible con GitHub Pages, para poder desplegarlo sin configuración adicional.

#### Criterios de Aceptación

1. THE Portafolio SHALL estar construido exclusivamente con archivos HTML, CSS y JavaScript sin dependencias de compilación
2. THE Portafolio SHALL utilizar un archivo index.html como punto de entrada principal en la raíz del proyecto
3. THE Portafolio SHALL referenciar todos los recursos (imágenes, estilos, scripts) mediante rutas relativas
4. THE Portafolio SHALL funcionar correctamente sin servidor backend ni procesamiento del lado del servidor
5. IF el navegador del visitante tiene JavaScript deshabilitado, THEN THE Portafolio SHALL mostrar el contenido principal de forma legible sin animaciones

### Requisito 11: Rendimiento y Optimización

**Historia de Usuario:** Como visitante del portafolio, quiero que el sitio cargue rápidamente, para no abandonar la página por tiempos de espera largos.

#### Criterios de Aceptación

1. THE Portafolio SHALL cargar la primera vista significativa en menos de 3 segundos en una conexión de 3G rápida
2. THE Portafolio SHALL utilizar carga diferida (lazy loading) para imágenes que no están en la vista inicial
3. THE Portafolio SHALL minimizar el número de solicitudes HTTP externas a un máximo de 10 en la carga inicial
4. THE Portafolio SHALL incluir atributos alt descriptivos en todas las imágenes para accesibilidad
