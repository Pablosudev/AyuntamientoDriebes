import { contact } from "./contacto";
import { dayKey } from "./fechas";

export type OccupiedDay = { date: string; state: "pending" | "reserved" };

export const refugioSteps = [
  {
    title: "Consulta el calendario",
    text: "Los días sin marcar están libres. Los pendientes ya tienen una solicitud a la espera de confirmación.",
  },
  {
    title: "Solicita tu fecha",
    text: `Llama al ${contact.phone.label} en horario de atención o escribe al Ayuntamiento con las fechas que te interesan.`,
  },
  {
    title: "Espera la confirmación",
    text: "El Ayuntamiento confirma la reserva. Hasta entonces, el día aparece como pendiente.",
  },
];

export const refugioMailBody =
  "Hola:\n\nMe gustaría reservar el refugio municipal.\n\nFechas que me interesan:\nNombre y apellidos:\nTeléfono de contacto:\nObservaciones:\n\nGracias.";

export const weekdays = [
  { short: "L", name: "lunes" },
  { short: "M", name: "martes" },
  { short: "X", name: "miércoles" },
  { short: "J", name: "jueves" },
  { short: "V", name: "viernes" },
  { short: "S", name: "sábado" },
  { short: "D", name: "domingo" },
];

const monthName = new Intl.DateTimeFormat("es-ES", { month: "long" });
const dayName = new Intl.DateTimeFormat("es-ES", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

export function monthTitle(year: number, month: number): string {
  const name = monthName.format(new Date(year, month, 1));
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} de ${year}`;
}

export const dayLabel = (year: number, month: number, day: number) =>
  dayName.format(new Date(year, month, day));

export function monthRange(year: number, month: number) {
  return {
    from: dayKey(new Date(year, month, 1)),
    to: dayKey(new Date(year, month + 1, 0)),
  };
}

/** Weeks of the month, Monday first; days of other months are null. */
export function monthWeeks(year: number, month: number): (number | null)[][] {
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const total = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: offset }, () => null),
    ...Array.from({ length: total }, (_, index) => index + 1),
  ];
  while (cells.length % 7) cells.push(null);
  return Array.from({ length: cells.length / 7 }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
}

export const isOccupiedDays = (value: unknown): value is { days: OccupiedDay[] } =>
  typeof value === "object" &&
  value !== null &&
  Array.isArray((value as { days?: unknown }).days);
