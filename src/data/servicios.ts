import { contact } from "./contacto";

export const serviciosSources = {
  phones: {
    title: "Teléfonos de interés",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/telefonos.html",
  },
  appointment: {
    title: "Cita previa en atención primaria",
    publisher: "Servicio de Salud de Castilla-La Mancha (SESCAM)",
    url: "https://sanidad.castillalamancha.es/ciudadanos/citaprevia",
  },
  waste: {
    title: "Driebes se suma al servicio provincial de recogida de residuos",
    publisher: "Guadanews · 18 de julio de 2025",
    url: "https://www.guadanews.es/noticia/88359/guadalajara/trijueque-y-driebes-se-suman-al-servicio-de-recogida-de-residuos-de-la-diputacion.html",
  },
  bus326: {
    title: "Línea 326 Madrid (Pavones)–Mondéjar–Driebes",
    publisher: "Consorcio Regional de Transportes de Madrid",
    url: "https://www.crtm.es/tu-transporte-publico/autobuses-interurbanos/lineas/326-madrid-pavones-mondejar-driebes",
  },
  transport: {
    title: "Transporte",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/Transporte.html",
  },
  guadalbus: {
    title: "Teléfono de Guadalbus en el cartel del Plan Astra",
    publisher: "Junta de Comunidades de Castilla-La Mancha",
    url: "https://www.bandomovil.com/userFiles/MR/MRMQhCARTELDEFINITIVOPLANASTRA.pdf",
  },
  contact: contact.source,
};

export const municipalProcedures = [
  {
    title: "Padrón municipal",
    text: "Gestiones del padrón de habitantes de Driebes.",
  },
  {
    title: "Certificados y documentación",
    text: "Certificados y documentos que expide el Ayuntamiento.",
  },
  {
    title: "Licencias de obras menores",
    text: "Solicitudes para pequeñas obras en tu vivienda o local.",
  },
  {
    title: "Registro de entrada y salida",
    text: "Presentación de escritos y documentos ante el Ayuntamiento.",
  },
];

export const healthServices = [
  {
    id: "consultorio",
    title: "Centro médico",
    text: "La atención primaria del pueblo. Llama para conocer el horario de consulta.",
    phone: { label: "949 38 91 61", href: "tel:+34949389161" },
    link: { label: "Pedir cita previa", url: serviciosSources.appointment.url },
  },
  {
    id: "farmacia",
    title: "Farmacia",
    text: "Medicamentos y consejo farmacéutico. Consulta el horario antes de acercarte.",
    phone: { label: "949 38 91 74", href: "tel:+34949389174" },
    link: null,
  },
];

export const emergencyPhones = [
  {
    title: "Urgencias",
    place: "Mondéjar",
    phone: { label: "949 38 50 75", href: "tel:+34949385075" },
  },
  {
    title: "Guardia Civil",
    place: "Mondéjar",
    phone: { label: "949 38 50 34", href: "tel:+34949385034" },
  },
];

export const wasteService = {
  provider: "Diputación de Guadalajara",
  since: "1 de septiembre de 2025",
  seasons: [
    {
      id: "invierno",
      label: "Invierno",
      restDays: 3,
      selective: "1 vez al mes",
    },
    {
      id: "verano",
      label: "Verano y Semana Santa",
      restDays: 6,
      selective: "2 veces al mes",
    },
  ],
  containers: [
    { id: "resto", label: "Resto", count: 31 },
    { id: "envases", label: "Envases ligeros", count: 7 },
    { id: "papel", label: "Papel y cartón", count: 2 },
  ],
  washes: "4 lavados al año en los de resto y 1 en los de recogida selectiva",
};

export const busLines = {
  madrid: {
    number: "326",
    name: "Madrid (Pavones)–Mondéjar–Driebes",
    stops: ["Madrid", "Mondéjar", "Driebes"],
  },
  guadalajara: {
    number: "510",
    operator: "Guadalbus",
    phone: { label: "949 21 09 00", href: "tel:+34949210900" },
  },
};
