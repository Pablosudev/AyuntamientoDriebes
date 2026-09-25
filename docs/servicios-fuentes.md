# Servicios: diseño, datos y reservas

Rediseño de `/servicios` con los mismos patrones que Eventos, Noticias y Contacto. Revisión documental: 25 de septiembre de 2026.

La página está en `src/Pages/Servicios.tsx` y usa tres componentes: `ServiciosHero`, `ServiciosRefugio` y `ServiciosResiduos`.

- Datos de los servicios: `src/data/servicios.ts`, que toma los de contacto de `src/data/contacto.ts`.
- Calendario del refugio: `src/data/refugio.ts`.
- Fechas locales compartidas con Eventos y Noticias: `src/data/fechas.ts`.

## Qué se elimina

- `src/Components/Cards/CardService.tsx`, que la página anterior pintaba dos veces.
- `src/Components/CalendaryModal.tsx`, un calendario de FullCalendar que no recibía datos (`events={[]}`), y su CSS `.reservation-calendar`.
- Los paquetes `@fullcalendar/core`, `@fullcalendar/daygrid` y `@fullcalendar/react`. El JS de producción baja de 647 kB a 540 kB (gzip de 186 a 139 kB).
- `src/data/services.json`, sustituido por `src/data/servicios.ts` con datos verificados.
- `src/assets/servicios-ayuntamiento-acuarela.png`: 3 MB, sin autoría documentada y fuera del diseño actual. Sigue disponible en el historial de git.
- Tras estos cambios no queda ninguna clase `tourism-*` en el proyecto.

## Disponibilidad del refugio

Api-Ayto añade `GET /bookings/availability?from=YYYY-MM-DD&to=YYYY-MM-DD`, público y con el mismo patrón que `/events` y `/news`: `requireAuth` se inyecta en el router y protege el resto de rutas de `/bookings`.

- Solo devuelve `{ from, to, days: [{ date, state }] }`, con `state` igual a `pending` o `reserved`. Nunca incluye nombre, teléfono ni notas.
- Responde 400 si falta una fecha, si no es válida (por ejemplo, 2026-02-30), si `from` es posterior a `to` o si el rango supera 366 días.
- Tests: 9 en `bookings.test.ts` y 6 en `auth.test.ts`. Documentación: `docs/0001-diseno-api.md`.
- `POST /bookings` sigue siendo privado: la web no tiene formulario. La solicitud se hace por teléfono o con un correo preparado.

El calendario de la web:

- Es una tabla propia y accesible: cada día se anuncia a los lectores de pantalla, por ejemplo «sábado, 26 de septiembre: reservado».
- Navega desde el mes actual hasta 11 meses después.
- Distingue libre, pendiente de confirmar, reservado, pasado y hoy.
- Resume los días libres que quedan en el mes y tiene estados de carga y error, con «Reintentar».

## Datos y fuentes

| Servicio | Dato publicado | Fuente |
| --- | --- | --- |
| Trámites | Padrón, certificados, licencias de obras menores y registro; horario y teléfono de `contacto.ts` | Texto previo del proyecto y [contacto municipal](https://driebes.weebly.com/contacto.html) |
| Centro médico | 949 38 91 61 y enlace a la cita previa | [Teléfonos de interés](https://driebes.weebly.com/telefonos.html) y [SESCAM](https://sanidad.castillalamancha.es/ciudadanos/citaprevia) |
| Farmacia | 949 38 91 74 | Teléfonos de interés municipales |
| Urgencias | 112; urgencias de Mondéjar 949 38 50 75; Guardia Civil de Mondéjar 949 38 50 34 | Teléfonos de interés municipales |
| Residuos | Diputación de Guadalajara desde el 1 de septiembre de 2025. Resto: 3 días por semana en invierno y 6 en verano y Semana Santa. Selectiva: 1 o 2 veces al mes. 31, 7 y 2 contenedores | [Guadanews, 18 de julio de 2025](https://www.guadanews.es/noticia/88359/guadalajara/trijueque-y-driebes-se-suman-al-servicio-de-recogida-de-residuos-de-la-diputacion.html) |
| Autobús a Madrid | Línea 326 Madrid (Pavones)–Mondéjar–Driebes; no todas las expediciones llegan a Driebes | [CRTM](https://www.crtm.es/tu-transporte-publico/autobuses-interurbanos/lineas/326-madrid-pavones-mondejar-driebes) |
| Autobús a Guadalajara | Línea 510 de Guadalbus, según un cartel municipal de 2019, presentada como pendiente de confirmar | [Transporte municipal](https://driebes.weebly.com/Transporte.html); teléfono de Guadalbus del [cartel del Plan Astra](https://www.bandomovil.com/userFiles/MR/MRMQhCARTELDEFINITIVOPLANASTRA.pdf) |

Datos de `services.json` que no se publican porque no se pudieron verificar:

- La recogida los «martes, jueves y sábados».
- El «punto limpio».
- El horario del consultorio («lunes y miércoles, 9:00–13:00»).
- «Transporte escolar».

No se publican horarios de autobús, porque cambian con las temporadas: se enlaza la fuente oficial. La dirección del consultorio que aparece en directorios no oficiales tampoco se incluye.

## Verificación

- Front: `npm run lint` y `npm run build`, correctos. Api-Ayto: `tsc --noEmit` correcto y `vitest run src` con 177 de 177 tests.
- Prueba de punta a punta con una instancia temporal de la API en memoria (puerto 3100), con reservas pendientes, confirmadas, de varios días y pasadas. El calendario coincide con la API en septiembre y octubre de 2026.
- A 1440, 768, 390 y 320 px no hay desbordamiento horizontal y la consola está limpia.
- Probados:
  - navegación entre meses y límites, «Hoy», y plantilla de correo del refugio;
  - cambio de temporada de residuos y anclas del índice (`#urgencias`);
  - API caída con «Reintentar»;
  - enlace de la guía de Contacto a `/servicios#refugio`.
