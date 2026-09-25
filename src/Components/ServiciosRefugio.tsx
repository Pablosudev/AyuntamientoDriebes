import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPhone,
  FiRefreshCw,
  FiSend,
} from "react-icons/fi";
import { API_URL } from "../data/api";
import { contact, mailtoHref } from "../data/contacto";
import { dayKey } from "../data/fechas";
import {
  dayLabel,
  isOccupiedDays,
  monthRange,
  monthTitle,
  monthWeeks,
  refugioMailBody,
  refugioSteps,
  weekdays,
} from "../data/refugio";
import type { OccupiedDay } from "../data/refugio";

const monthsAhead = 11;
const stateText = {
  reserved: "reservado",
  pending: "pendiente de confirmar",
  free: "libre",
  past: "ya pasado",
};
const legend = [
  { id: "free", label: "Libre", swatch: "border-civic-line bg-civic-paper" },
  {
    id: "pending",
    label: "Pendiente de confirmar",
    swatch:
      "border-civic-gold bg-[repeating-linear-gradient(135deg,#a78b5840_0_4px,transparent_4px_8px)]",
  },
  {
    id: "reserved",
    label: "Reservado",
    swatch: "border-civic-burgundy bg-civic-burgundy",
  },
];

export default function ServiciosRefugio() {
  const [now] = useState(() => new Date());
  const [offset, setOffset] = useState(0);
  const [days, setDays] = useState<OccupiedDay[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [reload, setReload] = useState(0);
  const view = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const year = view.getFullYear();
  const month = view.getMonth();

  useEffect(() => {
    const controller = new AbortController();

    async function loadAvailability() {
      setStatus("loading");
      try {
        const { from, to } = monthRange(year, month);
        const response = await fetch(
          `${API_URL}/bookings/availability?from=${from}&to=${to}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`La API respondió con el estado ${response.status}`);
        }
        const data: unknown = await response.json();
        if (!isOccupiedDays(data)) {
          throw new Error("La respuesta de disponibilidad no es válida");
        }
        setDays(data.days);
        setStatus("ready");
      } catch {
        if (!controller.signal.aborted) setStatus("error");
      }
    }

    void loadAvailability();
    return () => controller.abort();
  }, [year, month, reload]);

  const today = dayKey(now);
  const occupied = new Map(days.map((day) => [day.date, day.state]));
  const weeks = monthWeeks(year, month);
  const stateOf = (day: number) => {
    const key = dayKey(new Date(year, month, day));
    if (key < today) return "past";
    return occupied.get(key) ?? "free";
  };
  const counts = { free: 0, pending: 0, reserved: 0 };
  weeks.flat().forEach((day) => {
    if (day === null) return;
    const state = stateOf(day);
    if (state !== "past") counts[state] += 1;
  });

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
      <div className="min-w-0 border border-civic-line bg-civic-white">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-civic-line px-4 py-4 sm:px-6">
          <h3
            id="refugio-month"
            className="font-editorial text-2xl tracking-[-0.02em] sm:text-3xl"
          >
            {monthTitle(year, month)}
          </h3>
          <div className="flex items-center gap-2">
            {offset > 0 && (
              <button
                type="button"
                onClick={() => setOffset(0)}
                className="min-h-11 px-3 text-xs font-semibold text-civic-burgundy hover:underline focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                Hoy
              </button>
            )}
            <button
              type="button"
              disabled={offset === 0}
              onClick={() => setOffset((value) => value - 1)}
              aria-label="Mes anterior"
              className="flex size-11 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-civic-burgundy disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              disabled={offset === monthsAhead}
              onClick={() => setOffset((value) => value + 1)}
              aria-label="Mes siguiente"
              className="flex size-11 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-civic-burgundy disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <div className="px-2 pb-4 pt-3 sm:px-5 sm:pb-6">
          <div
            aria-live="polite"
            className="flex min-h-11 flex-wrap items-center justify-between gap-3 px-2 text-xs text-civic-muted"
          >
            {status === "loading" && <p>Consultando la disponibilidad…</p>}
            {status === "error" && (
              <>
                <p className="text-civic-burgundy">
                  No hemos podido consultar la disponibilidad.
                </p>
                <button
                  type="button"
                  onClick={() => setReload((value) => value + 1)}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-civic-burgundy hover:underline focus-visible:outline-2 focus-visible:outline-civic-burgundy"
                >
                  <FiRefreshCw aria-hidden="true" className="size-3.5" />
                  Reintentar
                </button>
              </>
            )}
            {status === "ready" && (
              <p>
                <strong className="font-semibold text-civic-ink">
                  {counts.free === 1
                    ? "1 día libre"
                    : `${counts.free} días libres`}
                </strong>
                {offset === 0 ? " de aquí a fin de mes" : " este mes"} ·{" "}
                {counts.reserved} {counts.reserved === 1 ? "reservado" : "reservados"} ·{" "}
                {counts.pending} {counts.pending === 1 ? "pendiente" : "pendientes"}
              </p>
            )}
          </div>

          <table
            aria-labelledby="refugio-month"
            aria-busy={status === "loading"}
            className={`mt-2 w-full table-fixed border-separate border-spacing-1 motion-safe:transition-opacity ${status === "ready" ? "" : "opacity-45"}`}
          >
            <thead>
              <tr>
                {weekdays.map((weekday) => (
                  <th
                    key={weekday.name}
                    scope="col"
                    abbr={weekday.name}
                    className="pb-2 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-civic-muted"
                  >
                    {weekday.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => {
                    if (day === null)
                      return <td key={`empty-${dayIndex}`} aria-hidden="true" />;
                    const state = stateOf(day);
                    const isToday = dayKey(new Date(year, month, day)) === today;
                    return (
                      <td key={day} className="p-0">
                        <div
                          className={`relative flex h-12 flex-col justify-between border p-1.5 sm:h-[4.5rem] sm:p-2 ${
                            state === "reserved"
                              ? "border-civic-burgundy bg-civic-burgundy text-white"
                              : state === "pending"
                                ? "border-civic-gold bg-[repeating-linear-gradient(135deg,#a78b5840_0_4px,transparent_4px_8px)] text-civic-ink"
                                : state === "past"
                                  ? "border-transparent text-civic-muted/45"
                                  : "border-civic-line bg-civic-paper text-civic-ink"
                          } ${isToday ? "outline-2 outline-offset-1 outline-civic-forest" : ""}`}
                        >
                          <span
                            aria-hidden="true"
                            className="font-editorial text-base leading-none sm:text-xl"
                          >
                            {day}
                          </span>
                          {(state === "reserved" || state === "pending") && (
                            <span
                              aria-hidden="true"
                              className="hidden text-[9px] font-semibold uppercase tracking-[0.08em] sm:block"
                            >
                              {state === "reserved" ? "Reservado" : "Pendiente"}
                            </span>
                          )}
                          {isToday && (
                            <span
                              aria-hidden="true"
                              className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-civic-forest"
                            />
                          )}
                          <span className="sr-only">
                            {dayLabel(year, month, day)}
                            {isToday ? ", hoy" : ""}:{" "}
                            {status === "ready" ? stateText[state] : "consultando"}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 px-2 text-[11px] text-civic-muted">
            {legend.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`size-3.5 border ${item.swatch}`}
                />
                {item.label}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-3.5 border border-civic-line outline-2 outline-offset-1 outline-civic-forest"
              />
              Hoy
            </li>
          </ul>
          <p className="mt-4 border-t border-civic-line px-2 pt-4 text-[11px] leading-5 text-civic-muted">
            El calendario es orientativo y no muestra datos de quien reserva.
            La reserva solo es firme cuando la confirma el Ayuntamiento.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
          Cómo reservar
        </h3>
        <ol className="mt-5 border-t border-civic-line">
          {refugioSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-5 border-b border-civic-line py-6"
            >
              <span
                aria-hidden="true"
                className="font-editorial text-4xl italic leading-none text-civic-gold"
              >
                {index + 1}
              </span>
              <div>
                <p className="font-editorial text-xl leading-tight">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-civic-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={contact.phone.href}
            className="inline-flex min-h-12 items-center gap-3 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
          >
            <FiPhone aria-hidden="true" className="size-4" />
            Llamar al {contact.phone.label}
          </a>
          <a
            href={mailtoHref(
              "Solicitud de reserva del refugio municipal",
              refugioMailBody,
            )}
            className="inline-flex min-h-12 items-center gap-3 border border-civic-burgundy px-5 py-3 text-xs font-semibold text-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
          >
            <FiSend aria-hidden="true" className="size-4" />
            Solicitar por correo
          </a>
        </div>
        <p className="mt-4 text-xs leading-6 text-civic-muted">
          Atención telefónica: {contact.hours.toLowerCase()}.
        </p>
      </div>
    </div>
  );
}
