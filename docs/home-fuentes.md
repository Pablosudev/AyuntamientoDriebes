# Home: diseño y procedencia de imágenes

## Fotografía principal

- Archivo local: `public/img/home/driebes-panoramica-oficial.png`.
- Procedencia: [web oficial del Ayuntamiento de Driebes](https://driebes.weebly.com/), destino del marco de `http://www.driebes.es`.
- Archivo original: <https://driebes.weebly.com/files/theme/4p.png>, utilizado en el carrusel de la portada oficial.
- Panorámica del núcleo urbano desde la ladera, con la iglesia y la carretera de acceso. El pueblo ocupa una parte mayor de la fotografía que en la vista anterior.
- Resolución original: **960 × 300 píxeles**. Se conserva el PNG original, sin recompresión, reescalado ni generación de detalles.
- La portada respeta la relación de aspecto **16:5**, con ancho limitado al original. No utiliza `object-cover`, zoom, parallax, filtros ni textos superpuestos a la imagen.
- El visor muestra la fotografía a tamaño natural y permite recorrerla horizontalmente con gestos o teclado en pantallas pequeñas.
- Se compararon los tres archivos del carrusel municipal (`4p.png`, `7p.png`, `6p.png`) y se revisaron las páginas de fotografía, turismo, lugares de interés, historia y naturaleza. No se localizó una versión de mayor resolución de esta panorámica. La mejora visual procede de la vista más cercana y de conservar su encuadre y tamaño, no de una supuesta fotografía en alta resolución.
- No se indica fotógrafo ni fecha en la fuente. El crédito enlaza a la procedencia, sin inventar autoría ni atribuir una licencia Creative Commons. La web muestra copyright del Ayuntamiento; no se ha identificado una licencia abierta de reutilización. Revisar los derechos del original al preparar una publicación externa.
- Las dos vistas descartadas por el usuario no se incluyen en los archivos públicos de Home.

## Otras imágenes y contenido

- `public/img/caraca/termas.jpg`: fotografía documental ya incorporada al proyecto; crédito al Equipo Arqueológico Caraca y enlace a Cultura Castilla-La Mancha. Fuentes históricas en `caraca-fuentes.md`.
- `public/img/driebesHistoria.jpg` y `public/img/grafitiDriebes.jpg`: fotografías existentes del proyecto, reutilizadas en las secciones de historia y vida cultural.
- Noticias: se conservan títulos, fechas, categorías y textos de `src/data/news.json`. No se crean convocatorias ni fechas nuevas.
- Agenda, turismo y servicios enlazan a las rutas existentes. Los datos de contacto mantienen los del proyecto.

## Decisiones de interfaz

- Portada editorial con el titular sobre una fotografía panorámica horizontal, íntegra y sin superposiciones.
- Estilos con Tailwind y colores municipales existentes. CSS específico únicamente para la entrada del titular, desactivada con `prefers-reduced-motion`. Se retira el efecto de desplazamiento y zoom de la fotografía.
- Accesos de vecinos y visitantes mediante pestañas accesibles, con flechas y teclas Inicio/Fin.
- Fotografía ampliable en diálogo nativo: Escape, botón de cierre, foco restaurado y bloqueo temporal del desplazamiento de fondo.
- Noticias desplegables con `details` nativo; Caraca como sección principal de descubrimiento.
- Navegación entre páginas desde el inicio para no saltarse la presentación de Caraca al entrar desde una sección inferior de Home.

## Verificación

- `npm run lint`, `npm run build` y `git diff --check`: correctos. El build conserva el aviso existente de bundle JavaScript superior a 500 kB.
- Nueva portada revisada en Chrome a 320, 390, 768 y 1440 píxeles, sin desbordamiento horizontal. A 1440 px la fotografía mide 942 × 294,375 px: proporción 3,2 idéntica al original, sin transformación ni ampliación.
- Todas las imágenes de Home cargan; consola sin errores ni advertencias durante la revisión.
- Probados: cambio de pestañas con flechas/Inicio, apertura y cierre de comunicados, diálogo fotográfico con Escape y restauración del foco, enlaces internos de sección y navegación a Caraca desde la parte inferior de Home con posición inicial cero.
- Nuevo visor en móvil: imagen a 960 × 300 px, desplazamiento horizontal verificado mediante flecha derecha, cierre con Escape y foco devuelto al botón de apertura.
