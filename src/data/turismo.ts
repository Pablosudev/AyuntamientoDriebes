import { caracaSources } from "./caraca";
import { driebesSources } from "./driebes";

export const turismoSources = {
  nature: {
    title: "Espacios naturales de Driebes",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/naturaleza.html",
  },
  gastronomy: {
    title: "Bares y restaurantes",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/Gastronomia.html",
  },
  festivities: {
    title: "Fiestas y tradiciones",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/fiestas.html",
  },
  caracaAccess: {
    title: "Cómo llegar a Caraca",
    publisher: "Caraca Nostra",
    url: "https://caracanostra.wordpress.com/como-llegar/",
  },
  monuments: driebesSources.monuments,
  heritage: driebesSources.heritage,
  archaeology: caracaSources.heritage,
};

export type TurismoRoute = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  detail?: string;
  distance: string | null;
  distanceNote?: string;
  duration: string | null;
  durationNote?: string;
  difficulty: string | null;
  source: { url: string; publisher: string } | null;
};

export const turismoRoutes: TurismoRoute[] = [
  {
    id: "tajo",
    label: "Hacia el Tajo",
    eyebrow: "Del pueblo a la ribera",
    title: "Hasta la orilla del Tajo.",
    description:
      "Un paseo desde el centro de Driebes hasta las orillas del río, entre paisaje rural y zonas de cultivo.",
    distance: null,
    duration: null,
    difficulty: null,
    source: null,
  },
  {
    id: "olivares",
    label: "Los olivares",
    eyebrow: "Vistas abiertas",
    title: "El camino de los olivares.",
    description:
      "Un recorrido entre los olivares que rodean el pueblo, con vistas panorámicas y ocasión de conocer la flora y la fauna del entorno.",
    distance: null,
    duration: null,
    difficulty: null,
    source: null,
  },
  {
    id: "caraca",
    label: "Hacia Caraca",
    eyebrow: "Caminar hacia la historia",
    title: "De Driebes a Caraca.",
    description:
      "Una ruta que une el pueblo con el Cerro de la Virgen de la Muela, donde la arqueología está recuperando la ciudad romana de Caraca.",
    detail:
      "Las visitas al yacimiento se organizan en jornadas concretas. Consulta las próximas fechas antes de salir.",
    distance: "≈ 7 km",
    distanceNote: "hasta el yacimiento",
    duration: "1 h 30 min",
    durationNote: "como máximo, a pie y solo ida",
    difficulty: null,
    source: turismoSources.caracaAccess,
  },
  {
    id: "via-verde",
    label: "Vía verde",
    eyebrow: "El camino del agua",
    title: "La vía verde del canal de Estremera.",
    description:
      "El canal que llevaba el agua del Tajo hacia Aranjuez se ha transformado en una vía verde de unos 40 kilómetros.",
    detail:
      "Su presa, inaugurada en 1947, se encuentra en la vega Peñalba, a unos 6 km del pueblo.",
    distance: "≈ 40 km",
    distanceNote: "de recorrido total",
    duration: null,
    difficulty: null,
    source: turismoSources.nature,
  },
];

export const turismoFestivities = [
  {
    date: "5 de enero",
    period: "Víspera de Reyes",
    title: "Cabalgata de Reyes.",
    text: "Las carrozas recorren las calles repartiendo caramelos. La tarde termina con regalos, chocolate caliente y roscón en la Casa de la Cultura.",
  },
  {
    date: "Febrero",
    period: "A principios de mes",
    title: "Carnaval.",
    text: "Mayores y niños desfilan disfrazados al compás de la charanga. La fiesta se despide con el entierro de la sardina.",
  },
  {
    date: "30 de abril",
    period: "Hasta el 1 de mayo",
    title: "Los Mayos.",
    text: "Los quintos pintan las calles y levantan el mayo, un tronco de árbol. Hay dulces, vino y charanga, y la rondalla canta a la Virgen de la Muela.",
  },
  {
    date: "Mayo",
    period: "Tercer fin de semana",
    title: "Romería de la Virgen de la Muela.",
    text: "El pueblo peregrina hasta la ermita de la Virgen de la Muela para celebrar la misa y compartir un día de convivencia en familia.",
  },
  {
    date: "Agosto",
    period: "Primera semana",
    title: "Semana Cultural.",
    text: "Cine de verano, gincanas, competiciones deportivas y actuaciones musicales para todas las edades.",
  },
  {
    date: "Septiembre",
    period: "Por San Miguel",
    title: "Fiestas patronales.",
    text: "Dos fines de semana de fiesta: el primero, con procesiones; el segundo, con actos populares. Las cierra la caldereta popular.",
  },
];

export type CasaRuralPhoto = {
  image: string;
  label: string;
  alt: string;
  width: number;
  height: number;
};

export const casaRuralFacade: CasaRuralPhoto = {
  image: "/img/CasaRural/casaRural1.jpg",
  label: "La fachada",
  alt: "Fachada de ladrillo visto y zócalo de piedra de la Casa Rural Caraca, en una esquina del pueblo, con una terraza en arcos en la primera planta",
  width: 750,
  height: 561,
};

export const casaRuralPhotos: CasaRuralPhoto[] = [
  {
    image: "/img/CasaRural/casaRural2.jpg",
    label: "El patio",
    alt: "Patio con suelo de barro cocido, barbacoa de ladrillo con leñero y macetas con olivos",
    width: 750,
    height: 562,
  },
  {
    image: "/img/CasaRural/casaRural3.jpg",
    label: "El salón",
    alt: "Salón luminoso con sofás claros, mesa baja, mueble de televisión y ventana a la calle",
    width: 750,
    height: 421,
  },
  {
    image: "/img/CasaRural/casaRural4.jpg",
    label: "Rincón del salón",
    alt: "Sofá rinconera, puf y mesa de centro junto a una ventana con cortinas",
    width: 750,
    height: 421,
  },
  {
    image: "/img/CasaRural/casaRural5.jpg",
    label: "La cocina-comedor",
    alt: "Comedor con mesa de madera, bancos corridos, sillas y televisión bajo dos lámparas colgantes",
    width: 750,
    height: 562,
  },
  {
    image: "/img/CasaRural/casaRural12.jpg",
    label: "La cocina",
    alt: "Cocina equipada con encimera azul, placa, horno, microondas, cafetera, tostadora y frigorífico",
    width: 750,
    height: 562,
  },
  {
    image: "/img/CasaRural/casaRural9.jpg",
    label: "El salón de juegos",
    alt: "Segundo salón con dos sofás grises, televisión y una alfombra infantil de colores",
    width: 750,
    height: 562,
  },
  {
    image: "/img/CasaRural/casaRural7.jpg",
    label: "Dormitorio doble",
    alt: "Dormitorio con dos camas individuales, cabeceros tallados y un cuadro con la vista aérea de Caraca",
    width: 750,
    height: 421,
  },
  {
    image: "/img/CasaRural/casaRural10.jpg",
    label: "Dormitorio triple",
    alt: "Dormitorio con tres camas individuales, cabeceros tallados y una ventana con cortinas azules",
    width: 750,
    height: 421,
  },
  {
    image: "/img/CasaRural/casaRural11.jpg",
    label: "El porche",
    alt: "Porche con paredes de piedra, mesa hecha con una bobina de madera y banco de palés junto a la puerta de un dormitorio",
    width: 750,
    height: 562,
  },
  {
    image: "/img/CasaRural/casaRural6.jpg",
    label: "Baño con lavabo doble",
    alt: "Baño con mueble de lavabo doble, dos espejos, toallas y radiador junto a la ventana",
    width: 750,
    height: 421,
  },
  {
    image: "/img/CasaRural/casaRural14.jpg",
    label: "Segundo baño",
    alt: "Baño con ducha tras un muro de pavés de vidrio en tonos ámbar, inodoro y bidé",
    width: 750,
    height: 1333,
  },
  {
    image: "/img/CasaRural/casaRural8.jpg",
    label: "La escalera",
    alt: "Escalera de madera con barandilla, plantas en cestas de mimbre y un gran reloj de pared",
    width: 750,
    height: 1333,
  },
];
