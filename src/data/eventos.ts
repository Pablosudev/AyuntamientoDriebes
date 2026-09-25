import { todayKey } from "./fechas";

export type EventCategory = "Deportivo" | "Festivo" | "Religioso" | "Otro";

export interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string | null;
  creationDate: string;
  eventDate: string;
  category: EventCategory;
}

export const eventCategories: EventCategory[] = [
  "Festivo",
  "Deportivo",
  "Religioso",
  "Otro",
];

export const categoryDot: Record<EventCategory, string> = {
  Festivo: "bg-civic-burgundy",
  Deportivo: "bg-civic-forest",
  Religioso: "bg-civic-gold",
  Otro: "bg-civic-muted",
};

// The API stores each event as midnight UTC of its day. Comparing the
// "YYYY-MM-DD" part, as the Dashboard does, keeps events on their own day.
const eventDay = (isoDate: string): string | null => {
  const day = isoDate.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : null;
};

/** An event on the current day is still upcoming, not finished. */
export function hasPassed(isoDate: string, today: string = todayKey()): boolean {
  const day = eventDay(isoDate);
  return day !== null && day < today;
}

export const sortKey = (isoDate: string): string => eventDay(isoDate) ?? "9999";

const format = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("es-ES", { ...options, timeZone: "UTC" });
const longDate = format({
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const shortDate = format({ day: "numeric", month: "short", year: "numeric" });
const monthName = format({ month: "long" });
const shortMonth = format({ month: "short" });
const shortWeekday = format({ weekday: "short" });

const dayDate = (day: string) => new Date(`${day}T00:00:00Z`);

export function formatEventDate(isoDate: string): string {
  const day = eventDay(isoDate);
  return day ? longDate.format(dayDate(day)) : "Fecha por confirmar";
}

export function formatShortDate(isoDate: string): string {
  const day = eventDay(isoDate);
  return day ? shortDate.format(dayDate(day)) : "Fecha por confirmar";
}

export function eventDateParts(isoDate: string) {
  const day = eventDay(isoDate);
  if (!day) return null;
  const date = dayDate(day);
  const month = monthName.format(date);
  return {
    day: String(date.getUTCDate()),
    weekday: shortWeekday.format(date).replace(".", ""),
    month: shortMonth.format(date).replace(".", ""),
    monthKey: day.slice(0, 7),
    monthLabel: `${month.charAt(0).toUpperCase()}${month.slice(1)} ${date.getUTCFullYear()}`,
  };
}

export function relativeDayLabel(
  isoDate: string,
  today: string = todayKey(),
): string | null {
  const day = eventDay(isoDate);
  if (!day) return null;
  const days = Math.round(
    (dayDate(day).getTime() - dayDate(today).getTime()) / 86_400_000,
  );
  if (days < 0) return null;
  if (days === 0) return "Hoy";
  if (days === 1) return "Mañana";
  return `En ${days} días`;
}
