# Turismo en Driebes

Rediseño de `/turismo` con la paleta, la tipografía editorial y los patrones de Home e Historia. Consulta de fuentes: 25 de septiembre de 2026.

La página está en `src/Pages/Turismo.tsx`. Las rutas, las fiestas, las fotografías de la Casa Rural y las fuentes están en `src/data/turismo.ts`. Los componentes propios son `TurismoHero`, `TurismoRoutes` y `TurismoCasaRural`. Sustituyen a `CardsTurismo`, `CardsHiking`, `CasaRural`, `CardsCasaRural`, `turism.json` y `hiking.json`, que solo usaba esta página y dependían de clases `tourism-*` sin definir en el CSS.

## Fuentes de contenido

- [Espacios naturales municipales](https://driebes.weebly.com/naturaleza.html): vía verde del canal de Estremera (unos 40 km), presa de 1947 a unos 6 km, Fuentecilla y Fuente de las Mulas.
- [Patrimonio religioso municipal](https://driebes.weebly.com/culto-religioso.html): iglesia de la Asunción (siglo XVII), ermitas de la Virgen de la Muela y ermita del Cristo.
- [Patrimonio histórico municipal](https://driebes.weebly.com/historicos.html): Casa Grande. Se reutiliza el texto de la página de Historia, sin asignarle un siglo (ver `driebes-fuentes.md`).
- [Fiestas y tradiciones](https://driebes.weebly.com/fiestas.html): calendario festivo. Turismo de Castilla-La Mancha sitúa San Miguel el 29 y 30 de septiembre y la web municipal, el 28 y 29. La página indica solo «Por San Miguel».
- [Bares y restaurantes](https://driebes.weebly.com/Gastronomia.html): descripciones de Bar Higuera (calle Mayor, raciones caseras) y Taberna La Plaza.
- [Caraca Nostra, «Cómo llegar»](https://caracanostra.wordpress.com/como-llegar/): el yacimiento está a unos 7 km del pueblo, y la ruta a pie desde el pueblo no supera la hora y media.
- Declaración BIC de Caraca en 2024: [ficha de Patrimonio de Castilla-La Mancha](https://cultura.castillalamancha.es/patrimonio/catalogo-patrimonio-cultural/yacimiento-arqueologico-del-cerro-de-la-virgen-de-la-muela-caraca).

## Criterios

- Solo se publican las distancias y duraciones que respalda una fuente. En la ruta al Tajo y en el camino de los olivares, la distancia, la duración y la dificultad aparecen como «Consultar». Los datos anteriores de `hiking.json` no tenían fuente: «- km», 1,5 h en las tres rutas, y 5 km para Caraca frente a los unos 7 km de la fuente.
- Gastronomía: Bar Restaurante Higuera, Casa Nadia y Taberna La Plaza, los tres locales del proyecto. La web municipal también incluye el Restaurante d'Sandro y El Rincón de Don José; no se muestran porque no se ha podido confirmar que sigan abiertos.
- Alojamiento: solo la Casa Rural Caraca. La reserva se canaliza hacia `/contacto` y el teléfono municipal, porque el proyecto no tiene sus datos de contacto propios. Sus datos proceden del texto previo del proyecto.
- La web municipal recoge además la Casa Rural Recodo del Tajo, que no se incluye.
- No se afirma que los caminos estén señalizados, ni se dan horarios o tarifas de visitas a Caraca.

## Imágenes

| Archivo | Uso | Procedencia |
| --- | --- | --- |
| `public/img/hermita.jpg` (823 × 463) | Portada, sin superposiciones sobre el motivo y sin superar su ancho original | Colección del proyecto; procedencia no indicada. **Pendiente de confirmar** qué ermita muestra: el pie no la identifica. |
| `public/img/driebes.jpg` | Tarjeta de la iglesia | Colección del proyecto (ver `driebes-fuentes.md`) |
| `public/img/caraca/termas.jpg` | Tarjeta de Caraca | Equipo Arqueológico Caraca (ver `caraca-fuentes.md`) |
| `public/img/CasaRural/casaRural1–14.jpg` | Casa Rural: fachada y galería de 12 fotografías | Colección del proyecto |

`casaRural13.jpg` y `casaRural15.jpg` son copias exactas de `casaRural5.jpg` y `casaRural6.jpg`. No se muestran, pero se conservan en `public/`.

## Interacción y accesibilidad

- Navegación por capítulos fija, como en Historia.
- Rutas en pestañas con flechas izquierda y derecha, Inicio y Fin.
- Galería en un `dialog` nativo: flechas del teclado y botones con paso circular, cierre por Escape o por el fondo, foco devuelto a la miniatura y bloqueo temporal del scroll.
- Entrada del titular con `turismo-hero-copy`, que reutiliza la animación de Home y se desactiva con movimiento reducido.

## Verificación

- `npm run lint` y `npm run build`: correctos. Se mantiene el aviso existente del bundle mayor de 500 kB.
- Revisión en Chrome a 1440, 768, 390 y 320 px: sin desbordamiento horizontal, todas las imágenes cargan y la consola está limpia.
- Probados: pestañas con teclado, apertura del visor, navegación con flechas y paso de la última a la primera fotografía, cierre con Escape y devolución del foco, y enlaces de capítulo.
