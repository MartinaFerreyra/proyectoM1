# Pagina web generativa de paletas de colores aleatoria

Aplicación web interactiva que permite generar paletas de colores aleatorias con un solo clic

## Contenido actual
- Selección dinámica de cantidad de colores (6, 8 o 9)
- Generación aleatoria de colores en formato HEX y HSL
- Visualización visual de cada color mediante tarjetas dinámicas
- Visualización del código del color generado
- Copiado automático del código de color al hacer clic
- Tooltip visual de confirmación ("Color copiado")
- Generación automática de una paleta al iniciar la página
- Botón para guardar paletas de colores
- Persistencia de datos utilizando `localStorage`
- Visualización dinámica de paletas guardadas
- Renderizado automático de las paletas almacenadas al recargar la página
- Uso de HTML semántico
- Render dinámico de elementos utilizando JavaScript y manipulación del DOM
- Creación dinámica de tarjetas usando `createElement()` y `appendChild()`
- Uso de eventos con `addEventListener()`
- Limpieza dinámica del contenedor usando `innerHTML`
- Se implementó un efecto hover en los colores (`.color:hover`) que eleva visualmente cada elemento y aplica una sombra
- Se incorporaron media queries para hacer el diseño responsive:
  - En tablets, los colores se muestran en 2 columnas
  - En dispositivos móviles, los colores se muestran en una sola columna


## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript Vanilla


## Cómo usar

1. Seleccionar la cantidad de colores deseada
2. Seleccionar el formato del color (HEX o HSL)
3. Hacer clic en el botón "Generar paleta"
4. Visualizar los colores generados junto a sus códigos
5. Hacer clic sobre el código del color para copiarlo automáticamente
6. Hacer clic en "Guardar paleta" para almacenarla
7. Visualizar las paletas guardadas automáticamente en pantalla
8. Utilizar los colores generados en diseños o proyectos

---

## Funcionalidades implementadas en JavaScript

- Generación aleatoria de colores HEX
- Generación aleatoria de colores HSL
- Manipulación dinámica del DOM
- Creación automática de tarjetas de colores
- Creación dinámica de paletas guardadas
- Persistencia de datos usando `localStorage`
- Renderizado automático de información almacenada
- Eventos de click para generar paletas
- Eventos de click para copiar colores
- Eventos de click para guardar paletas
- Tooltip dinámico con `setTimeout()`
- Uso de `navigator.clipboard.writeText()`
- Uso de loops (`for`)
- Uso de condicionales (`if / else`)
- Uso de funciones reutilizables
