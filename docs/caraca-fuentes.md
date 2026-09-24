# Caraca: fuentes y mantenimiento editorial

Revisión documental: 24 de septiembre de 2026.

La página está en `src/Pages/HistoriaCaraca.tsx`; las referencias, el explorador, la cronología y las preguntas frecuentes usan los datos de `src/data/caraca.ts`. Los enlaces de las fuentes también son visibles en la página.

## Fuentes del contenido

- [Ficha patrimonial de Castilla-La Mancha](https://cultura.castillalamancha.es/patrimonio/catalogo-patrimonio-cultural/yacimiento-arqueologico-del-cerro-de-la-virgen-de-la-muela-caraca): emplazamiento, interpretación urbana, extensión aproximada y declaración de Bien de Interés Cultural publicada el 26 de enero de 2024.
- [¿Cómo era Caraca?](https://cultura.castillalamancha.es/culturaenredclm/como-era-caraca-la-ciudad-romana-encontrada-en-driebes-guadalajara), Portal de Cultura, 9 de febrero de 2023: termas, foro, abastecimiento y documentación gráfica.
- [Caraca. Tras las huellas de una ciudad desaparecida](https://cultura.castillalamancha.es/culturaenredclm/caraca-tras-las-huellas-de-una-ciudad-desaparecida), Museo de Guadalajara / Portal de Cultura, 10 de julio de 2025: historia de la investigación, relato de Sertorio, tesoro y exposición. La exposición de 2025 no se presenta como una actividad vigente.
- [Equipo Arqueológico Caraca](https://proyectodriebes.blogspot.com/) y [nota de la décima campaña](https://proyectodriebes.blogspot.com/2026/08/v-behaviorurldefaultvml-o.html), 7 de agosto de 2026: investigación reciente y adquisición municipal de terrenos.
- [Catálogo del Museo Arqueológico Nacional](https://ceres.mcu.es/pages/Main?idt=25921&inventary=1964%2F14%2F273&museum=MAN&table=FMUS): colección del depósito de Driebes. La pertenencia a la colección no asegura la exposición permanente de todas las piezas.
- [Presentación del estudio de la esfinge](https://eldecanodeguadalajara.com/index.php/news/17315/el-equipo-de-investigaci%C3%B3n-de-caraca-desvela-los-misterios-de-la-esfinge-hallada-en-esta-ciudad-romana/), El Decano de Guadalajara, febrero de 2026: hallazgo de 2025 y atribución funeraria probable.

## Imágenes locales

| Archivo en `public/img/caraca/` | Procedencia y crédito | Tratamiento |
| --- | --- | --- |
| `caraca-reconstruccion-v2.jpg` y `caraca-reconstruccion-v2-1280.jpg` | Imagen generada con la herramienta integrada imagegen. Referencias: reconstrucción de Miguel Zorita publicada en la ficha de Patrimonio, plano UCM y fotografía del paisaje local. | JPEG de 1672 × 941 y variante de 1280 px. Interpretación con aspecto fotográfico, identificada como generada con IA; no es una fotografía del lugar ni una restitución científica exacta. [Prompt y criterio de generación](caraca-portada-prompt.md). |
| `recreacion.jpg` | Portada anterior, procedente del recurso ya existente `src/assets/caraca-hero-reconstruction.png` | Conservada como versión anterior; ya no se utiliza en la página de Caraca. |
| `cerro.jpg` | [Ruinas de la Virgen de la Muela](https://commons.wikimedia.org/wiki/File:Ruinas_virgen_de_la_muela.jpg), Camuskendar, 2017, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Redimensionado y encuadre visual adaptado. Se mantienen autor, enlace y licencia en el pie de foto. |
| `termas.jpg` | Equipo Arqueológico Caraca; figura 3 del artículo «¿Cómo era Caraca?» | Redimensionado. Fotografía de los restos. |
| `foro.jpg` | Daniel Méndez; figura 4 del mismo artículo | Redimensionado. Restitución virtual del pórtico sur a partir de la excavación de la Cata B. |
| `acueducto.jpg` | Equipo Arqueológico Caraca; imagen «Tramo de acueducto y piscina limaria» del mismo artículo | Redimensionado; encuadre adaptado en la vista pequeña. Ampliación de la imagen completa. |
| `georradar.jpg` | CAI de Arqueometría y Análisis Arqueológico de la UCM; figura 1 del mismo artículo | Documento completo con zoom del 100 al 400 %, desplazamiento y encuadres del foro y las calles según la leyenda publicada. No se añaden estructuras al plano. |

Las cuatro imágenes del artículo de 2023 conservan los créditos publicados y el enlace a su procedencia. El [aviso legal del portal](https://cultura.castillalamancha.es/avisolegal) establece sus condiciones de reutilización y reserva los derechos de terceros: no se atribuye una licencia Creative Commons a esos recursos.

## Criterios de actualización

La introducción en `CaracaHero.tsx` usa desplazamiento nativo, una escena fija, acercamiento de imagen y fundido a la fotografía real de las termas. No bloquea el scroll; puede omitirse y se presenta estática con movimiento reducido o ventanas de poca altura. `CaracaPlan.tsx` sustituye el antiguo revelado por navegación del documento original.

- Mantener como aproximadas las dimensiones y como interpretación propuesta las 27 manzanas; prospección no equivale a excavación ni a restos visitables.
- Diferenciar el relato de Plutarco de las evidencias arqueológicas y conservar el carácter probable de las atribuciones en estudio.
- Revisar el cuaderno de campo al publicarse nuevas campañas. No convertir jornadas pasadas de puertas abiertas en un horario permanente.
- Confirmar visitas, movilidad y accesibilidad con el Ayuntamiento. No se han inventado horarios, tarifas ni reservas.
- Conservar los créditos al sustituir imágenes y actualizar la fecha de revisión documental cuando cambie el contenido.
