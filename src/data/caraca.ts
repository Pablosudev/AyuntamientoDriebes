export const caracaSources = {
  heritage: {
    title: "Ficha patrimonial y declaración como Bien de Interés Cultural",
    publisher: "Junta de Comunidades de Castilla-La Mancha",
    url: "https://cultura.castillalamancha.es/patrimonio/catalogo-patrimonio-cultural/yacimiento-arqueologico-del-cerro-de-la-virgen-de-la-muela-caraca",
    date: "Declaración publicada el 26 de enero de 2024",
  },
  city: {
    title: "¿Cómo era Caraca? La ciudad romana encontrada en Driebes",
    publisher: "Portal de Cultura de Castilla-La Mancha",
    url: "https://cultura.castillalamancha.es/culturaenredclm/como-era-caraca-la-ciudad-romana-encontrada-en-driebes-guadalajara",
    date: "9 de febrero de 2023",
  },
  exhibition: {
    title: "Caraca. Tras las huellas de una ciudad desaparecida",
    publisher: "Museo de Guadalajara · Portal de Cultura de Castilla-La Mancha",
    url: "https://cultura.castillalamancha.es/culturaenredclm/caraca-tras-las-huellas-de-una-ciudad-desaparecida",
    date: "10 de julio de 2025",
  },
  team: {
    title: "Investigaciones y noticias del Equipo Arqueológico Caraca",
    publisher: "Ayuntamiento de Driebes · Equipo Arqueológico Caraca",
    url: "https://proyectodriebes.blogspot.com/",
    date: "Notas del proyecto de 2026",
  },
  campaign: {
    title: "X campaña de excavaciones arqueológicas en Caraca",
    publisher: "Ayuntamiento de Driebes · Equipo Arqueológico Caraca",
    url: "https://proyectodriebes.blogspot.com/2026/08/v-behaviorurldefaultvml-o.html",
    date: "7 de agosto de 2026",
  },
  treasure: {
    title: "El depósito de Driebes en las colecciones del MAN",
    publisher: "Museo Arqueológico Nacional · CER.es",
    url: "https://ceres.mcu.es/pages/Main?idt=25921&inventary=1964%2F14%2F273&museum=MAN&table=FMUS",
    date: "Catálogo de colecciones del Ministerio de Cultura",
  },
  sphinx: {
    title:
      "El equipo de investigación desvela los misterios de la esfinge de Caraca",
    publisher: "El Decano de Guadalajara",
    url: "https://eldecanodeguadalajara.com/index.php/news/17315/el-equipo-de-investigaci%C3%B3n-de-caraca-desvela-los-misterios-de-la-esfinge-hallada-en-esta-ciudad-romana/",
    date: "Febrero de 2026",
  },
};

export const citySpaces = [
  {
    id: "termas",
    label: "Las termas",
    eyebrow: "Encuentro y vida cotidiana",
    title: "Mucho más que un baño.",
    description:
      "El conjunto termal ocupaba unos 900 m². Construido en la segunda mitad del siglo I d. C., contaba con una palestra —un patio para el ejercicio— y espacios de baño: una ventana a la vida compartida de sus habitantes.",
    detail:
      "Un incendio a mediados del siglo II d. C. puso fin a su uso original. Los restos permiten seguir las transformaciones posteriores del edificio.",
    fact: "900 m²",
    factLabel: "de instalaciones termales, aproximadamente",
    image: "/img/caraca/termas.jpg",
    alt: "Pasillo y estructuras excavadas de las termas públicas de Caraca",
    credit: "Equipo Arqueológico Caraca",
    kind: "Fotografía de los restos",
    width: 1920,
    height: 1139,
    source: caracaSources.city,
  },
  {
    id: "foro",
    label: "El foro",
    eyebrow: "El corazón de la ciudad",
    title: "Aquí se encontraba Caraca.",
    description:
      "El foro reunía la vida pública de la ciudad. Sus pórticos y edificios daban forma a un lugar de encuentro, de decisiones y de intercambio en el centro del cerro.",
    detail:
      "La imagen es una restitución virtual del pórtico sur a partir de los restos excavados en la Cata B. Ayuda a imaginar el volumen de una arquitectura hoy conservada parcialmente.",
    fact: "Vida pública",
    factLabel: "política, religión y actividad económica",
    image: "/img/caraca/foro.jpg",
    alt: "Restitución virtual del pórtico sur del foro de Caraca, realizada por Daniel Méndez",
    credit: "Daniel Méndez · restitución virtual",
    kind: "Reconstrucción a partir de la excavación",
    width: 1920,
    height: 1080,
    source: caracaSources.city,
  },
  {
    id: "agua",
    label: "El acueducto",
    eyebrow: "Ingeniería al servicio de la ciudad",
    title: "El viaje del agua.",
    description:
      "Un canal de aproximadamente tres kilómetros abastecía a Caraca. La investigación sitúa su origen probable en el manantial de Lucos, al norte del asentamiento.",
    detail:
      "Sus piscinas de decantación ayudaban a retirar sedimentos y a frenar el caudal. La ingeniería romana también se reconoce en estas soluciones discretas, lejos de las grandes arquerías.",
    fact: "≈ 3 km",
    factLabel: "de recorrido del abastecimiento",
    image: "/img/caraca/acueducto.jpg",
    alt: "Canal del acueducto romano de Caraca y una de sus piscinas de decantación",
    credit: "Equipo Arqueológico Caraca",
    kind: "Fotografía de los restos",
    width: 1920,
    height: 2880,
    source: caracaSources.heritage,
  },
  {
    id: "trazado",
    label: "Bajo la tierra",
    eyebrow: "La arqueología también mira sin excavar",
    title: "Leer una ciudad invisible.",
    description:
      "Las prospecciones geofísicas permitieron reconocer calles y edificios bajo la superficie. La interpretación propone una trama de 27 manzanas, organizada en torno a sus ejes viarios.",
    detail:
      "Este plano reúne la interpretación del georradar y de otras evidencias. Identificar una estructura bajo tierra no significa que esté excavada o que pueda verse durante la visita.",
    fact: "27 manzanas",
    factLabel: "propuestas por la interpretación arqueológica",
    image: "/img/caraca/georradar.jpg",
    alt: "Plano de interpretación del georradar de Caraca con las calles, el foro y otras estructuras sobre curvas de nivel",
    credit: "CAI de Arqueometría y Análisis Arqueológico · UCM",
    kind: "Interpretación de las prospecciones",
    width: 1358,
    height: 1920,
    source: caracaSources.heritage,
  },
];

export const caracaTimeline = [
  {
    date: "Antes de Roma",
    period: "El mundo carpetano",
    title: "Un lugar estratégico junto al Tajo.",
    text: "El cerro acogió un asentamiento carpetano sobre un territorio ocupado desde mucho antes. Controlar los pasos del río le daba una posición privilegiada.",
    source: caracaSources.heritage,
  },
  {
    date: "77 a. C.",
    period: "El relato de Plutarco",
    title: "Sertorio y el viento.",
    text: "Plutarco narra cómo Sertorio empleó el polvo arrastrado por el viento para vencer a los caracitanos. Las investigaciones relacionan este singular episodio con el enclave de Driebes.",
    source: caracaSources.exhibition,
  },
  {
    date: "Siglos I–II",
    period: "El esplendor romano",
    title: "Calles, agua y vida en comunidad.",
    text: "Caraca alcanza su mayor desarrollo. Foro, termas y viviendas hablan de una ciudad integrada en la vía entre Complutum y Cartago Nova, a través de Segóbriga.",
    source: caracaSources.heritage,
  },
  {
    date: "Siglos VI–VII",
    period: "La memoria del territorio",
    title: "La vida continúa alrededor del cerro.",
    text: "Una necrópolis a sus pies documenta a las comunidades que habitaron este entorno siglos después del declive de la ciudad romana.",
    source: caracaSources.team,
  },
  {
    date: "2016–2017",
    period: "El redescubrimiento",
    title: "La tecnología encuentra las calles.",
    text: "Las prospecciones de 2016 y las excavaciones iniciadas en 2017 impulsan la identificación de Caraca en Driebes, propuesta ya por investigadores en los años ochenta.",
    source: caracaSources.exhibition,
  },
  {
    date: "2024",
    period: "Un patrimonio protegido",
    title: "Bien de Interés Cultural.",
    text: "El Cerro de la Virgen de la Muela y su área arqueológica reciben la protección de Zona Arqueológica. La declaración se publica el 26 de enero de 2024.",
    source: caracaSources.heritage,
  },
];

export const caracaFaqs = [
  {
    question: "¿Cómo puedo organizar una visita?",
    answer:
      "Consulta con el Ayuntamiento las condiciones de acceso y las próximas actividades antes de desplazarte. El equipo arqueológico anuncia jornadas de puertas abiertas en fechas concretas; sus horarios no constituyen un calendario permanente de apertura.",
  },
  {
    question: "¿Qué voy a encontrar en el yacimiento?",
    answer:
      "Un paisaje arqueológico en investigación, con restos de estructuras y sectores excavados. Parte de la ciudad se conoce por prospección y permanece bajo tierra. Las recreaciones de esta página ayudan a interpretar el pasado; no representan el estado actual del lugar.",
  },
  {
    question: "¿Dónde puedo conocer el Tesoro de Driebes?",
    answer:
      "El conjunto pertenece a las colecciones del Museo Arqueológico Nacional, en Madrid. Consulta la información del museo para conocer las piezas expuestas y los posibles préstamos temporales.",
  },
  {
    question: "¿Qué conviene llevar y tener en cuenta?",
    answer:
      "Calzado cómodo, agua y protección solar para un entorno al aire libre. Sigue las indicaciones de la organización y respeta los restos. Si necesitas información sobre movilidad o accesibilidad, consúltala previamente con el Ayuntamiento.",
  },
];
