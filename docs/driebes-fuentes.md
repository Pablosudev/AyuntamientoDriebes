# Historia de Driebes

Rediseño de `/historia`, siguiendo la paleta, la tipografía editorial y la navegación por capítulos de Caraca. Consulta de fuentes: 24 de septiembre de 2026.

## Fuentes de contenido

- [Historia municipal](https://driebes.weebly.com/historia.html): agricultura, ganadería, esparto, actividad quesera y propuestas sobre el topónimo.
- [Galería municipal](https://driebes.weebly.com/fotografia.html): fotografías antiguas y sus identificaciones originales. El sitio `driebes.es` presenta el contenido municipal alojado en Weebly.
- [Patrimonio religioso municipal](https://driebes.weebly.com/culto-religioso.html): iglesia de la Asunción, antigua ermita de la Muela y nueva ermita de 2002.
- [Patrimonio histórico municipal](https://driebes.weebly.com/historicos.html): Casa Grande y tesoro.
- [Antonio Herrera Casado, 30 de noviembre de 2007](https://www.herreracasado.com/2007/11/30/driebes-una-pueblo-blanco-y-una-leyenda-negra/): relación con Almoguera y Calatrava, adquisición por el marqués de Mondéjar en 1541 y señorío hasta el siglo XIX.
- [Museo de Guadalajara: Caraca, tras las huellas de una ciudad desaparecida](https://cultura.castillalamancha.es/culturaenredclm/caraca-tras-las-huellas-de-una-ciudad-desaparecida): composición del tesoro, aproximadamente 13,8 kg de plata y conservación en el Museo Arqueológico Nacional.
- [Junta de Comunidades: Cerro de la Virgen de la Muela](https://cultura.castillalamancha.es/patrimonio/catalogo-patrimonio-cultural/yacimiento-arqueologico-del-cerro-de-la-virgen-de-la-muela-caraca): contexto carpetano y romano, investigación reciente y declaración como BIC en 2024. Más procedencia en [caraca-fuentes.md](./caraca-fuentes.md).

La página enlaza las referencias en las etapas y secciones correspondientes, además de reunirlas en un desplegable final. Los textos son redacción propia; no se han reproducido los artículos.

## Criterios históricos

- Caraca y el casco urbano actual se distinguen explícitamente. No se atribuye al pueblo una continuidad urbana que las fuentes consultadas no demuestran.
- Las propuestas sobre el nombre de Driebes se presentan como hipótesis, sin escoger una etimología como cierta.
- Las dos páginas municipales discrepan sobre la antigüedad de la Casa Grande. La página describe su relación con la ganadería y sus rasgos arquitectónicos, sin asignarle un siglo.
- El relato divulgativo sitúa el hallazgo del tesoro en 1945. El [estudio de 2021 conservado por el MAN](https://www.man.es/man/dam/jcr%3A060797d7-c633-4bf4-986f-8c065c42e097/abantos-hpc2.pdf) recoge 1944. Esta cronología utiliza «Años 1940».
- No se atribuyen fechas ni autores desconocidos a las fotografías. Tampoco se identifican personas a partir de sus rostros. «Hacienda de Roa» transcribe el rótulo visible.
- Las panorámicas que acompañan a las etapas medieval y moderna se identifican como vistas del pueblo actual.

## Imágenes incorporadas

Archivos originales de la galería municipal, conservados sin recorte, ampliación artificial ni restauración generativa:

| Archivo en `public/img/historia-driebes/` | Dimensiones | Original municipal                                                                       |
| ----------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `calle-mayor.jpg`                         | 640 × 409   | [9385423_orig.jpg](https://driebes.weebly.com/uploads/6/3/2/7/63276919/9385423_orig.jpg) |
| `molino.jpg`                              | 960 × 663   | [7651497_orig.jpg](https://driebes.weebly.com/uploads/6/3/2/7/63276919/7651497_orig.jpg) |
| `hacienda-roa.jpg`                        | 960 × 718   | [9834884_orig.jpg](https://driebes.weebly.com/uploads/6/3/2/7/63276919/9834884_orig.jpg) |
| `esparto.jpg`                             | 614 × 431   | [8420480_orig.jpg](https://driebes.weebly.com/uploads/6/3/2/7/63276919/8420480_orig.jpg) |
| `fibula.jpg`                              | 1096 × 800  | [4126053_orig.jpg](https://driebes.weebly.com/uploads/6/3/2/7/63276919/4126053_orig.jpg) |

La procedencia municipal no implica una licencia abierta: la galería consultada no especifica autoría ni licencia para estos originales. Los pies de imagen remiten a su procedencia sin atribuir derechos desconocidos.

Recursos existentes reutilizados:

- `/img/home/driebes-panoramica-oficial.png`: [panorámica municipal original, 960 × 300](https://driebes.weebly.com/files/theme/4p.png), documentada en las fuentes de Home.
- `/img/driebes.jpg`: fotografía preexistente en el proyecto, 1440 × 685. No se le asigna una autoría o licencia nueva.
- `/img/caraca/cerro.jpg`: Camuskendar, 2017, [original](https://commons.wikimedia.org/wiki/File:Ruinas_virgen_de_la_muela.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Crédito y enlaces incluidos en la cronología.
- `/img/caraca/termas.jpg`: Equipo Arqueológico Caraca; procedencia documentada en `caraca-fuentes.md`.

## Interacción y accesibilidad

- El álbum mueve tres fotografías completas al avanzar verticalmente, con botones de acceso directo y enlace para saltar al relato. No intercepta la rueda ni los gestos de desplazamiento.
- En movimiento reducido o ventanas de hasta 700 px de altura, el álbum utiliza desplazamiento horizontal nativo y botones, sin escena fija ni animación vinculada al scroll.
- Ampliaciones con `dialog` nativo, cierre por Escape, devolución de foco y restauración del scroll de la página.
- Cronología con seis pestañas, flechas izquierda/derecha, Inicio/Fin y botones anterior/siguiente.
- Navegación por capítulos, estados de foco visibles, fotografías con texto alternativo y contenido ampliable mediante `details`.
- Estilos con Tailwind; CSS específico limitado a la altura y transformación del álbum. Sin dependencias añadidas.

## Verificación

- `npm run lint`, `npm run build` y `git diff --check`: correctos. Vite conserva el aviso del proyecto sobre un paquete JavaScript mayor de 500 kB.
- Revisión en navegador a 1440 × 1000, 768 × 1024, 390 × 844 y 320 × 844, sin desbordamiento horizontal del documento.
- Probados los tres botones del álbum, el avance mediante scroll, la ampliación, Escape y la devolución de foco.
- Alternativa sin escena fija comprobada a 1024 × 620, incluidos botones y cambio desde la tercera fotografía en formato alto a la primera en formato compacto. Esta alternativa comparte la condición de activación con `prefers-reduced-motion`; no se modificaron las preferencias del sistema operativo.
- Probadas las flechas, Inicio/Fin y el botón siguiente de la cronología, los enlaces por capítulos, los desplegables y el enlace a Caraca.
- Sin imágenes rotas detectadas ni errores o advertencias en la consola del navegador durante la revisión.
