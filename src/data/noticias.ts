import { dayKey } from "./fechas";

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string | null;
  uploadDate: string;
}

// uploadDate is the real publication instant, so it is shown in local time.
const newsDate = (isoDate: string): Date | null => {
  const date = new Date(isoDate);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const byNewest = (first: NewsItem, second: NewsItem): number =>
  (newsDate(second.uploadDate)?.getTime() ?? 0) -
  (newsDate(first.uploadDate)?.getTime() ?? 0);

const format = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("es-ES", options);
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

export function formatNewsDate(isoDate: string): string {
  const date = newsDate(isoDate);
  return date ? longDate.format(date) : "Fecha no indicada";
}

export function formatShortNewsDate(isoDate: string): string {
  const date = newsDate(isoDate);
  return date ? shortDate.format(date) : "Fecha no indicada";
}

export function newsDateParts(isoDate: string) {
  const date = newsDate(isoDate);
  if (!date) return null;
  const month = monthName.format(date);
  return {
    day: String(date.getDate()),
    weekday: shortWeekday.format(date).replace(".", ""),
    month: shortMonth.format(date).replace(".", ""),
    monthKey: dayKey(date).slice(0, 7),
    monthLabel: `${month.charAt(0).toUpperCase()}${month.slice(1)} ${date.getFullYear()}`,
  };
}

export function relativeNewsLabel(
  isoDate: string,
  today: Date = new Date(),
): string | null {
  const date = newsDate(isoDate);
  if (!date) return null;
  const days = Math.round(
    (Date.parse(`${dayKey(today)}T00:00:00Z`) -
      Date.parse(`${dayKey(date)}T00:00:00Z`)) /
      86_400_000,
  );
  if (days < 0 || days > 30) return null;
  if (days === 0) return "Hoy";
  if (days === 1) return "Ayer";
  return `Hace ${days} días`;
}

/** Cuts long texts at a word boundary; short texts are returned unchanged. */
export function excerpt(text: string, limit: number): string {
  const clean = text.trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), limit * 0.6)).trimEnd()}…`;
}

const normalize = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export function matchesQuery(news: NewsItem, query: string): boolean {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const haystack = normalize(`${news.title} ${news.description}`);
  return words.every((word) => haystack.includes(word));
}
