# Noticias: diseño y datos

Rediseño de `/noticias` con los mismos patrones que Eventos. Revisión: 25 de septiembre de 2026.

La página está en `src/Pages/Noticias.tsx` y usa dos componentes, `NoticiasHero` y `NoticiasList`. El tablón de Home se traslada a `src/Components/HomeNews.tsx`. Los tipos, las fechas, el extracto y la búsqueda están en `src/data/noticias.ts`; `API_URL` y `mediaUrl`, compartidos con Eventos, en `src/data/api.ts`.

Se eliminan `src/data/news.json` y `src/Components/Cards/CardNews.tsx`, que contenían datos de ejemplo. La página y Home leen ahora las noticias de la API.

## Datos

- Las noticias proceden de `GET ${VITE_API_URL}/news` de Api-Ayto. Sus campos son `id`, `title`, `description`, `image` (opcional, ruta `/uploads/news/…`) y `uploadDate`.
- Api-Ayto hace públicas `GET /news` y `GET /news/:id`, con el mismo patrón que `/events`: `requireAuth` se inyecta en el router y solo protege `POST`, `PUT` y `DELETE`. Están actualizados los tests y `docs/0001-diseno-api.md`.
- `uploadDate` es el instante real de publicación, así que se muestra en hora local. Esto difiere de los eventos, cuyo día se guarda a medianoche UTC.
- La API no tiene categorías ni un campo separado de resumen. Por eso los filtros por categoría de la página anterior desaparecen y el extracto se calcula a partir de la descripción, cortándola en una palabra completa.

## Criterios de interfaz

- Portada: muestra la última noticia en la tarjeta granate del tablón de Home. Si no hay noticias, o si falla la API, muestra `/img/driebes.jpg` con un texto adaptado a cada caso.
- Listado: agrupado por mes, de la noticia más reciente a la más antigua, con las etiquetas «Hoy», «Ayer» y «Hace N días» hasta 30 días.
- Los textos de más de 280 caracteres se despliegan con un botón `aria-expanded`.
- Buscador por texto en el navegador: busca en el título y la descripción, ignora tildes y mayúsculas, exige todas las palabras y lleva contador en una región `aria-live`.
- Cada noticia tiene un ancla `#noticia-{id}`. Al llegar por ese enlace, la noticia se abre y se desplaza a la vista.
- Imágenes enteras con `object-contain`, ampliables en un `dialog`.
- Los títulos y textos llevan `wrap-anywhere`: una palabra muy larga, como la de la noticia de prueba, no desborda la tarjeta. El mismo ajuste se aplica a Eventos.
- Home: se mantiene el diseño del tablón. La etiqueta de categoría pasa a mostrar «Hoy», «Hace N días» o «Noticia». «Leer comunicado» alterna entre el extracto y el texto completo. Si la API falla o no hay noticias, se muestra un aviso sin romper la página.

## Verificación

- Front: `npm run lint` y `npm run build`, correctos. Api-Ayto: `tsc --noEmit` correcto y `vitest run src` con 162 de 162 tests.
- Chrome, con la API real (una noticia de prueba con imagen), con noticias simuladas (hoy, ayer, varios meses, textos largos e imágenes horizontales y verticales) y con la API respondiendo 401.
- A 1440, 768, 390 y 320 px no hay desbordamiento horizontal ni textos que se salgan, y la consola está limpia.
- Probados: buscador (también sin tildes), búsqueda sin resultados y «Borrar la búsqueda», desplegable, enlace de la portada y enlace directo `/noticias#noticia-3`, visor con Escape y devolución del foco, y el tablón de Home.
