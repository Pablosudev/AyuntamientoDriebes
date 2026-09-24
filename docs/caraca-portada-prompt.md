# Portada de Caraca · versión 2

Generada con la herramienta integrada `image_gen`, mediante la habilidad imagegen. No se ha utilizado el CLI ni la API de pago del proyecto.

Archivos consumidos por la web:

- `public/img/caraca/caraca-reconstruccion-v2.jpg` (1672 × 941).
- `public/img/caraca/caraca-reconstruccion-v2-1280.jpg` (versión ligera para pantallas pequeñas).

El original PNG permanece en el directorio de imágenes generadas de Codex. Se conserva la portada anterior sin utilizarla en Caraca.

## Referencias

1. [Reconstrucción interpretativa de Miguel Zorita, publicada en la ficha de Patrimonio](https://cultura.castillalamancha.es/sites/default/files/2025-07/1Reconstrucci%C3%B3n%20de%20Caraca%20en%20%C3%A9poca%20romana%20altoimperial%20%28Dibujo%20Miguel%20Zorita%29..jpg): escala, emplazamiento elevado y relación del cerro con el río.
2. `public/img/caraca/georradar.jpg`: interpretación publicada del trazado, CAI de Arqueometría y Análisis Arqueológico de la UCM.
3. `public/img/caraca/cerro.jpg`: materiales y paisaje actuales. Camuskendar, CC BY-SA 4.0; procedencia detallada en `caraca-fuentes.md`.

Es una imagen interpretativa con apariencia fotográfica, no una prueba de la disposición exacta de cada edificio ni una foto de restos conservados. El resultado incorpora decisiones del generador, por lo que no debe presentarse como restitución científica. La página lo indica en la propia introducción y en los créditos.

## Prompt final utilizado

```text
Use case: historical-scene. Create ONE wide landscape 16:9 image, ideally 2560x1440 or larger, for the hero of the official municipal website of Driebes, Spain. Primary request: an exceptionally believable photographic-looking interpretation of Roman Caraca in the 1st–2nd century AD, much more grounded than a fantasy Roman city. Input image 1 is Miguel Zorita's published interpretative reconstruction: use it ONLY as a reference for the modest settlement size, elongated flat-topped hill, river BELOW the hill on one side and dry local landscape, not for its watercolor style. Input 2 is the published archaeological interpretation plan: respect its elongated hill settlement with fairly regular transverse streets and approximately 27 blocks, one modest civic plaza. Input 3 is a present-day landscape/material reference only: local pale limestone, muted dry Alcarria terrain; do not insert its ruined modern chapel into the Roman period. Scene: modest compact provincial Roman town, approximately eight hectares, mostly low one-storey courtyard houses and a few two-storey structures, individually irregular muted terracotta tiled roofs, worn off-white lime plaster, local limestone foundations, dusty narrow streets, a restrained portico around the small civic center. Town on the elevated plateau, NOT at river level. Broad dry beige ochre hills and cultivated valley, sparse scrub, slender poplars and riparian vegetation along a naturally green-brown Tajo below. No turquoise tropical water. Style: extremely natural editorial aerial landscape photography from a real camera, physically plausible subtle warm morning sunlight and gentle distant haze, detailed material imperfections, restrained color, realistic architectural scale, photograph texture, documentary mood. Composition: wide oblique elevated view with town centered slightly right, enough landscape on left and lower portion for title overlay, soft distant horizon in upper fifth. Entire town and hillside should be visible; immersive, calm, beautiful and credible. Avoid: fantasy empire, vast city, monumental palace, Colosseum, amphitheatre, huge temple, triumphal arch, massive fortified city walls, gigantic aqueduct arches, bridge over river, boats, mountains, perfectly repeated roof patterns, glossy videogame render, miniature tilt shift, oversaturated green, dramatic orange sunset, modern objects, labels, typography, signature or watermark. This will be labelled on the website as an AI-generated interpretative reconstruction, not a photograph of surviving remains or a scientifically exact restitution. Output only the image.
```

## Animación

Inspiración compositiva: [presentaciones de producto de Apple](https://www.apple.com/macbook-pro/). Implementación propia en React y Tailwind, con CSS para las capas animadas. No requiere bibliotecas adicionales, vídeo ni WebGL.

La escena avanza con el desplazamiento nativo: visión general, acercamiento y fundido a una fotografía real de las termas. Los controles permiten ir a cada momento u omitir la secuencia. La preferencia de movimiento reducido y las ventanas de poca altura reciben una portada estática sin espacio de scroll adicional.
