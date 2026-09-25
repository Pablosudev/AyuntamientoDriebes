# Contacto: diseño y datos

Rediseño de `/contacto` con los mismos patrones que Eventos y Noticias. Revisión: 25 de septiembre de 2026.

La página está en `src/Pages/Contacto.tsx` y usa tres componentes: `ContactoHero`, `ContactoChannels` y `ContactoGuide`. **Se retira el formulario de contacto**: no tenía `action` ni backend, así que no enviaba nada.

## Datos de contacto, en un solo lugar

`src/data/contacto.ts` reúne la dirección, los teléfonos, el email, el horario, los enlaces al mapa y la guía de consultas. Lo usan el menú superior, el pie de página, Home, Turismo, la Casa Rural, Eventos, Noticias, Caraca y Contacto. Si cambia un dato, basta con editar ese archivo.

Servicios también lo usa: `src/data/servicios.ts` sustituye al antiguo `services.json`. Ver `servicios-fuentes.md`.

Datos de la [página de contacto municipal](https://driebes.weebly.com/contacto.html):

- Plaza Ayuntamiento, n.º 8, 19116 Driebes (Guadalajara).
- Teléfonos 949 38 90 01 y 690 13 88 47.
- Email aytodriebes@gmail.com. La web lo protege con Cloudflare; se ha decodificado del HTML original.
- Horario de atención al público: de lunes a viernes, de 10:00 a 13:00.

Sustituyen a los que usaba el proyecto: 949 29 80 01, ayuntamiento@driebes.es, Plaza Mayor, y de lunes a viernes de 9:00 a 14:00 y sábados de 9:00 a 13:00. Turismo de Castilla-La Mancha coincide en el teléfono 949 389 001, pero da otro email (aytodriebes@hotmail.com). Confirma con el Ayuntamiento cuál de los dos correos está en uso.

La descripción de la Plaza Mayor en Turismo ya no afirma que el Ayuntamiento esté en ella, porque la dirección municipal es Plaza Ayuntamiento, n.º 8.

## Criterios de interfaz

- **La oficina, ahora**: calcula si está abierta con la hora de España (`Europe/Madrid`), esté donde esté el visitante, y se actualiza cada 30 segundos. Indica la próxima apertura o el cierre, por ejemplo «Abre el lunes a las 10:00», y marca el día de hoy en la tira semanal. No conoce los festivos, así que la tarjeta avisa de consultarlos antes de venir.
- **Canales**: llamar, escribir y visitar. «Copiar» usa el portapapeles y avisa en una región `role="status"`. Si el navegador no lo permite, por ejemplo en `http` sin cifrar, el botón muestra «No se pudo copiar».
- **Correo con plantilla**: «Preparar un correo» y las acciones de la guía abren un `mailto:` con asunto y estructura ya escritos. Ocupa el lugar del formulario sin enviar datos a ningún servidor.
- **¿Qué necesitas?**: pestañas verticales, que responden a las flechas arriba y abajo, Inicio y Fin. Cada consulta lleva a una página existente, a una llamada o a un correo, sin inventar trámites. La emergencia remite al 112.
- **Ubicación**: solo enlaces a Google Maps y OpenStreetMap. No se incrusta ningún servicio de terceros. El enlace de OpenStreetMap usa las coordenadas del municipio que publica Turismo de Castilla-La Mancha.

## Verificación

- `npm run lint` y `npm run build`: correctos.
- Estado de la oficina con relojes simulados y el visitante en Nueva York. Lunes a las 11:00, abierto. Lunes a las 9:15, «Abre hoy a las 10:00». Lunes a las 13:00 y domingo, «Abre mañana». Viernes a las 14:00, «Abre el lunes».
- A 1440, 768, 390 y 320 px no hay desbordamiento horizontal ni textos que se salgan, y la consola está limpia.
- Probados: copiar el teléfono y la dirección (contenido leído del portapapeles), portapapeles bloqueado, plantilla `mailto:`, guía con teclado y enlace al 112. Los enlaces `tel:` de Home, Turismo, Eventos, Noticias y Caraca apuntan al nuevo número.
