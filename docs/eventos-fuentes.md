# Eventos: diseño y datos

Rediseño de `/eventos` con la paleta, la tipografía editorial y los patrones de Home, Historia y Turismo. Revisión: 25 de septiembre de 2026.

La página está en `src/Pages/Eventos.tsx` y usa dos componentes, `EventosHero` y `EventosAgenda`. Los tipos y las funciones de fecha están en `src/data/eventos.ts`; `API_URL` y `mediaUrl`, compartidos con Noticias, en `src/data/api.ts`. Se elimina `src/data/holidays.json`: ningún archivo lo usaba y tenía datos de ejemplo erróneos. Por ejemplo, la «Romería» llevaba la descripción del Día de la Constitución.

## Datos

- Los eventos proceden de `GET ${VITE_API_URL}/events`, un endpoint público de Api-Ayto: `title`, `description`, `image` (opcional, ruta `/uploads/events/…`), `eventDate` y `category`, que puede ser Deportivo, Festivo, Religioso u Otro.
- `eventDate` solo contiene el día, porque el panel usa `<input type="date">`, y la API lo guarda como medianoche UTC. Por eso las fechas se comparan como `YYYY-MM-DD` y se formatean en UTC, con el mismo criterio que `hasPassed` del Dashboard: un evento de hoy sigue siendo próximo. No se muestran horas.
- Las imágenes pueden tener cualquier proporción, ya que el panel acepta `image/*`. Se muestran enteras con `object-contain`, sin recortarse, y se amplían en un `dialog`.
- La sección «Fiestas y tradiciones» reutiliza `turismoFestivities` y `turismoSources.festivities` de `src/data/turismo.ts`. Sus fuentes están documentadas en `turismo-fuentes.md`.

## Criterios de interfaz

- Portada: si hay un evento próximo, muestra «La próxima cita». Si no lo hay, o si falla la API, muestra el mural (`/img/grafitiDriebes.jpg`, reutilizado de Home) con un texto adaptado a cada caso.
- Agenda: las próximas citas se agrupan por mes y llevan las etiquetas «Hoy», «Mañana» o «En N días». Los eventos celebrados se pliegan en «Ya celebrados», ordenados del más reciente al más antiguo y atenuados.
- El filtro por categoría funciona en el navegador, sin nuevas peticiones. Sus contadores solo cuentan las próximas citas, y el filtro también se aplica a los eventos celebrados.
- Estados de carga, error con «Reintentar» y agenda vacía, en el estilo `civic-*`.
- Cada evento tiene un ancla `#evento-{id}`, que usa el enlace de la portada.

## Verificación

- `npm run lint` y `npm run build`: correctos. Se mantiene el aviso existente del bundle mayor de 500 kB.
- Revisión en Chrome en tres escenarios: con la API real (dos eventos de prueba, ambos pasados), con eventos próximos simulados (hoy, mañana, varios meses, imágenes horizontales y verticales, títulos largos) y con la API caída.
- A 1440, 768, 390 y 320 px no hay desbordamiento horizontal y la consola está limpia.
- Probados: filtro por categoría, agrupación por mes, etiquetas relativas, visor de imagen con Escape y devolución del foco, ancla de la próxima cita y botón «Reintentar».
