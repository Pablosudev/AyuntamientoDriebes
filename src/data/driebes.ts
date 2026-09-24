import { caracaSources } from "./caraca";

export const driebesSources = {
  history: {
    title: "Historia de Driebes",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/historia.html",
  },
  archive: {
    title: "Galería de fotografías antiguas",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/fotografia.html",
  },
  monuments: {
    title: "Iglesia y ermitas del municipio",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/culto-religioso.html",
  },
  heritage: {
    title: "Patrimonio histórico y Casa Grande",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/historicos.html",
  },
  chronicle: {
    title: "Driebes: lugar, historia y tradiciones",
    publisher: "Antonio Herrera Casado · 2007",
    url: "https://www.herreracasado.com/2007/11/30/driebes-una-pueblo-blanco-y-una-leyenda-negra/",
  },
  treasure: caracaSources.exhibition,
  archaeology: caracaSources.heritage,
};

export type ArchivePhoto = {
  id: string;
  label: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export const driebesArchive: ArchivePhoto[] = [
  {
    id: "calles",
    label: "Las calles",
    title: "Una infancia en la Calle Mayor.",
    image: "/img/historia-driebes/calle-mayor.jpg",
    width: 640,
    height: 409,
    alt: "Fotografía antigua de la Calle Mayor de Driebes, con dos niños, una bicicleta y fachadas con balcones",
    caption:
      "La galería municipal identifica esta imagen como Calle Mayor. Los balcones, las puertas y una bicicleta conservan un instante de la vida del pueblo.",
  },
  {
    id: "oficios",
    label: "Los oficios",
    title: "El trabajo que sostenía el día a día.",
    image: "/img/historia-driebes/molino.jpg",
    width: 960,
    height: 663,
    alt: "Interior del antiguo molino de piensos de Driebes, con maquinaria, sacos y un cerramiento de madera y vidrio",
    caption:
      "El molino de piensos, según el pie de la fotografía municipal. Una mirada al interior de un espacio de trabajo, entre sacos, maquinaria y ventanas.",
  },
  {
    id: "personas",
    label: "Las personas",
    title: "La memoria tiene muchos rostros.",
    image: "/img/historia-driebes/hacienda-roa.jpg",
    width: 960,
    height: 718,
    alt: "Grupo de personas posando ante un cartel que dice Hacienda de Roa, en una fotografía antigua conservada en la galería municipal",
    caption:
      "Un grupo posa junto al rótulo «Hacienda de Roa». La imagen conserva sus rostros y su encuentro; la galería no identifica a las personas ni precisa la fecha.",
  },
];

export const driebesTimeline = [
  {
    id: "territorio",
    date: "Antes de Roma",
    label: "El territorio",
    title: "El Tajo, un lugar de encuentro.",
    text: "Mucho antes del pueblo actual, el entorno del Cerro de la Virgen de la Muela estuvo habitado. Allí se desarrolló un asentamiento carpetano y, más tarde, la ciudad romana de Caraca.",
    detail:
      "Esta es la historia del territorio de Driebes: el yacimiento está fuera del casco urbano actual.",
    image: "/img/caraca/cerro.jpg",
    alt: "Cerro de la Virgen de la Muela y restos de su antigua ermita",
    imageCredit: "Camuskendar · 2017 · CC BY-SA 4.0",
    source: driebesSources.archaeology,
  },
  {
    id: "medieval",
    date: "Edad Media",
    label: "Almoguera y Calatrava",
    title: "Un pueblo en la tierra de Almoguera.",
    text: "Driebes formó parte de la jurisdicción de Almoguera y del señorío de la Orden de Calatrava. Su historia medieval se inscribe en la organización de estas tierras de la Alcarria.",
    detail:
      "La crónica de Antonio Herrera Casado sitúa esta vinculación con Calatrava desde el siglo XII.",
    image: "/img/home/driebes-panoramica-oficial.png",
    alt: "Panorámica del pueblo actual de Driebes",
    imageCredit: "Vista del pueblo actual · web municipal",
    source: driebesSources.chronicle,
  },
  {
    id: "mondéjar",
    date: "1541",
    label: "El señorío",
    title: "La relación con el marqués de Mondéjar.",
    text: "Tras la enajenación de bienes de la Orden de Calatrava, Driebes fue adquirido por el marqués de Mondéjar en 1541. Permaneció bajo ese señorío hasta el siglo XIX.",
    detail:
      "Un cambio en la jurisdicción del lugar, recogido por Herrera Casado en su historia del municipio.",
    image: "/img/home/driebes-panoramica-oficial.png",
    alt: "Casas e iglesia del Driebes actual, vistas desde una ladera",
    imageCredit: "Vista del pueblo actual · web municipal",
    source: driebesSources.chronicle,
  },
  {
    id: "iglesia",
    date: "Siglo XVII",
    label: "La iglesia",
    title: "Una silueta que identifica al pueblo.",
    text: "La ficha municipal sitúa la iglesia de Nuestra Señora de la Asunción a mediados del siglo XVII. Su torre, sus muros encalados y su portada forman parte del paisaje de Driebes.",
    detail:
      "En el interior, la nave y el crucero configuran el espacio del templo. La torre de las campanas se levanta en la esquina suroccidental.",
    image: "/img/driebes.jpg",
    alt: "La iglesia de Nuestra Señora de la Asunción entre los tejados de Driebes",
    imageCredit: "Fotografía del pueblo · colección del proyecto",
    source: driebesSources.monuments,
  },
  {
    id: "tesoro",
    date: "Años 1940",
    label: "El hallazgo",
    title: "La plata vuelve a la luz.",
    text: "Las obras del canal de Estremera dieron a conocer el Tesoro de Driebes: un conjunto de plata de la Antigüedad que hoy forma parte de las colecciones del Museo Arqueológico Nacional.",
    detail:
      "Monedas, adornos y fragmentos de metal permiten acercarse a una economía en la que la plata también se valoraba por su peso.",
    image: "/img/historia-driebes/fibula.jpg",
    alt: "Detalle de una fíbula del Tesoro de Driebes publicada en la galería municipal",
    imageCredit: "Imagen de la galería municipal · Tesoro de Driebes",
    source: driebesSources.treasure,
  },
  {
    id: "investigacion",
    date: "2016–2024",
    label: "Redescubrir",
    title: "Un pasado que sigue dando respuestas.",
    text: "Las prospecciones de 2016 y las excavaciones iniciadas en 2017 impulsaron la investigación de Caraca. En 2024, el cerro y su área arqueológica fueron declarados Bien de Interés Cultural.",
    detail:
      "La investigación incorpora nuevas piezas a la historia del municipio y de su entorno.",
    image: "/img/caraca/termas.jpg",
    alt: "Estructuras excavadas de las termas de la ciudad romana de Caraca",
    imageCredit: "Equipo Arqueológico Caraca",
    source: driebesSources.archaeology,
  },
];
