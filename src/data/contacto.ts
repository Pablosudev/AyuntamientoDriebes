export const contact = {
  office: "Ayuntamiento de Driebes",
  street: "Plaza Ayuntamiento, n.º 8",
  postalCode: "19116",
  town: "Driebes (Guadalajara)",
  phone: { label: "949 38 90 01", href: "tel:+34949389001" },
  mobile: { label: "690 13 88 47", href: "tel:+34690138847" },
  email: "aytodriebes@gmail.com",
  hours: "Lunes a viernes, de 10:00 a 13:00",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ayuntamiento+de+Driebes+Guadalajara",
  osmUrl: "https://www.openstreetmap.org/?mlat=40.2454&mlon=-3.0420#map=17/40.2454/-3.0420",
  source: {
    title: "Datos de contacto del Ayuntamiento",
    publisher: "Ayuntamiento de Driebes",
    url: "https://driebes.weebly.com/contacto.html",
  },
};

export const officeHours = [
  { day: 1, name: "Lunes", short: "L", open: "10:00", close: "13:00" },
  { day: 2, name: "Martes", short: "M", open: "10:00", close: "13:00" },
  { day: 3, name: "Miércoles", short: "X", open: "10:00", close: "13:00" },
  { day: 4, name: "Jueves", short: "J", open: "10:00", close: "13:00" },
  { day: 5, name: "Viernes", short: "V", open: "10:00", close: "13:00" },
  { day: 6, name: "Sábado", short: "S", open: null, close: null },
  { day: 0, name: "Domingo", short: "D", open: null, close: null },
];

const madridClock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Madrid",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});
const weekdays: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};
const minutesOf = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

/** The office keeps Spanish time wherever the visitor is. */
export function officeStatus(now: Date = new Date()) {
  const parts = Object.fromEntries(
    madridClock.formatToParts(now).map((part) => [part.type, part.value]),
  );
  const today = weekdays[parts.weekday];
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  const schedule = officeHours.find((item) => item.day === today);

  if (schedule?.open && schedule.close) {
    if (minutes >= minutesOf(schedule.open) && minutes < minutesOf(schedule.close))
      return { isOpen: true, today, message: `Cierra hoy a las ${schedule.close}` };
    if (minutes < minutesOf(schedule.open))
      return { isOpen: false, today, message: `Abre hoy a las ${schedule.open}` };
  }
  for (let offset = 1; offset <= 7; offset++) {
    const next = officeHours.find((item) => item.day === (today + offset) % 7);
    if (next?.open)
      return {
        isOpen: false,
        today,
        message:
          offset === 1
            ? `Abre mañana a las ${next.open}`
            : `Abre el ${next.name.toLowerCase()} a las ${next.open}`,
      };
  }
  return { isOpen: false, today, message: "Consulta el horario de atención" };
}

export function mailtoHref(
  subject: string,
  body = "Hola:\n\n[Escribe aquí tu consulta]\n\nNombre y apellidos:\nTeléfono de contacto (opcional):\n\nGracias.",
): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type GuideAction =
  | { kind: "page"; label: string; to: string }
  | { kind: "phone"; label: string; href: string }
  | { kind: "mail"; label: string; subject: string };

export const contactGuide: {
  id: string;
  label: string;
  title: string;
  text: string;
  actions: GuideAction[];
}[] = [
  {
    id: "tramites",
    label: "Un certificado o el padrón",
    title: "Trámites en el Ayuntamiento.",
    text: "El padrón, los certificados y la documentación municipal se gestionan en el Ayuntamiento. Llama antes para confirmar qué necesitas llevar.",
    actions: [
      { kind: "phone", label: "Llamar al Ayuntamiento", href: contact.phone.href },
      { kind: "mail", label: "Escribir sobre un trámite", subject: "Consulta sobre un trámite municipal" },
      { kind: "page", label: "Ver servicios municipales", to: "/servicios#ayuntamiento" },
    ],
  },
  {
    id: "refugio",
    label: "Reservar el refugio",
    title: "El refugio municipal.",
    text: "Consulta los días disponibles y solicita las fechas. La reserva la confirma el Ayuntamiento.",
    actions: [
      { kind: "page", label: "Consultar disponibilidad", to: "/servicios#refugio" },
      { kind: "phone", label: "Llamar para reservar", href: contact.phone.href },
    ],
  },
  {
    id: "actividades",
    label: "Una actividad o propuesta",
    title: "La agenda del pueblo.",
    text: "Consulta las próximas citas. Si quieres proponer una actividad o tienes dudas sobre alguna, escríbenos.",
    actions: [
      { kind: "page", label: "Abrir la agenda", to: "/eventos" },
      { kind: "mail", label: "Enviar una propuesta", subject: "Propuesta de actividad" },
    ],
  },
  {
    id: "avisos",
    label: "Avisos y novedades",
    title: "Lo que pasa en Driebes.",
    text: "Los avisos y comunicados del Ayuntamiento se publican en Noticias y en los tablones de anuncios del pueblo.",
    actions: [{ kind: "page", label: "Leer las noticias", to: "/noticias" }],
  },
  {
    id: "visita",
    label: "Visitar Driebes o Caraca",
    title: "Prepara tu visita.",
    text: "Qué ver, caminos y alojamiento en Turismo. Las visitas al yacimiento de Caraca se organizan en jornadas concretas: consulta las próximas fechas.",
    actions: [
      { kind: "page", label: "Descubrir Driebes", to: "/turismo" },
      { kind: "page", label: "Conocer Caraca", to: "/historia/caraca" },
      { kind: "mail", label: "Preguntar por una visita", subject: "Visita a Driebes" },
    ],
  },
  {
    id: "urgencia",
    label: "Una emergencia",
    title: "Llama al 112.",
    text: "Ante una emergencia sanitaria, un incendio o un accidente, llama al 112. Es gratuito y funciona las 24 horas.",
    actions: [{ kind: "phone", label: "Llamar al 112", href: "tel:112" }],
  },
  {
    id: "otra",
    label: "Otra consulta",
    title: "Cuéntanos.",
    text: "Una duda, una sugerencia o una gestión que no encuentras. Llámanos en horario de atención o escríbenos cuando quieras.",
    actions: [
      { kind: "phone", label: "Llamar al Ayuntamiento", href: contact.phone.href },
      { kind: "mail", label: "Escribir un correo", subject: "Consulta desde la web municipal" },
    ],
  },
];
