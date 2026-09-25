/** "YYYY-MM-DD" of a date in the visitor's local calendar. */
export const dayKey = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

export const todayKey = (today: Date = new Date()): string => dayKey(today);
