import { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiMaximize2,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";
import { mediaUrl } from "../data/api";
import {
  categoryDot,
  eventCategories,
  eventDateParts,
  formatEventDate,
  formatShortDate,
  hasPassed,
  relativeDayLabel,
  sortKey,
} from "../data/eventos";
import type { EventCategory, EventItem } from "../data/eventos";

type EventosAgendaProps = {
  events: EventItem[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
};

function CategoryLabel({ category }: { category: EventCategory }) {
  return (
    <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${categoryDot[category]}`}
      />
      {category}
    </p>
  );
}

export default function EventosAgenda({
  events,
  isLoading,
  error,
  onRetry,
}: EventosAgendaProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [category, setCategory] = useState<EventCategory | null>(null);
  const [expanded, setExpanded] = useState<EventItem | null>(null);
  const isOpen = expanded !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const visible = category
    ? events.filter((event) => event.category === category)
    : events;
  const upcoming = visible
    .filter((event) => !hasPassed(event.eventDate))
    .sort((first, second) =>
      sortKey(first.eventDate).localeCompare(sortKey(second.eventDate)),
    );
  const past = visible
    .filter((event) => hasPassed(event.eventDate))
    .sort((first, second) =>
      sortKey(second.eventDate).localeCompare(sortKey(first.eventDate)),
    );
  const months = upcoming.reduce<
    { key: string; label: string; events: EventItem[] }[]
  >((groups, event) => {
    const parts = eventDateParts(event.eventDate);
    const key = parts?.monthKey ?? "pendiente";
    const group = groups.find((item) => item.key === key);
    if (group) group.events.push(event);
    else
      groups.push({
        key,
        label: parts?.monthLabel ?? "Fecha por confirmar",
        events: [event],
      });
    return groups;
  }, []);
  const filterLabel = category ? ` de la categoría ${category}` : "";

  if (isLoading) {
    return (
      <div
        role="status"
        className="mt-10 border border-civic-line bg-civic-white px-6 py-14 text-center"
      >
        <p className="font-editorial text-2xl text-civic-muted">
          Cargando la agenda…
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="mt-10 border border-civic-line border-l-2 border-l-civic-burgundy bg-civic-white px-6 py-10 sm:px-10"
      >
        <p className="font-editorial text-2xl">
          No hemos podido cargar la agenda.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-civic-muted">
          {error}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex min-h-12 items-center gap-4 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
        >
          Reintentar <FiRefreshCw aria-hidden="true" className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col justify-between gap-4 border-b border-civic-line sm:flex-row sm:items-end">
        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="-mb-px flex overflow-x-auto [scrollbar-width:thin]"
        >
          {[null, ...eventCategories].map((item) => {
            const count = events.filter(
              (event) =>
                !hasPassed(event.eventDate) &&
                (!item || event.category === item),
            ).length;
            return (
              <button
                key={item ?? "todos"}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`flex min-h-12 shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy sm:px-4 ${category === item ? "border-civic-burgundy text-civic-burgundy" : "border-transparent text-civic-muted hover:text-civic-burgundy"}`}
              >
                {item && (
                  <span
                    aria-hidden="true"
                    className={`size-2 rounded-full ${categoryDot[item]}`}
                  />
                )}
                {item ?? "Todos"}
                <span className="font-editorial text-[11px] italic font-normal opacity-70">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p
          aria-live="polite"
          className="pb-3 text-[10px] uppercase tracking-[0.15em] text-civic-muted"
        >
          {upcoming.length === 1
            ? "1 cita próxima"
            : `${upcoming.length} citas próximas`}
          {filterLabel && <span className="sr-only">{filterLabel}</span>}
        </p>
      </div>

      {months.length === 0 ? (
        <div className="mt-8 border border-civic-line bg-civic-white px-6 py-12 sm:px-10">
          <p className="font-editorial text-2xl">
            No hay citas próximas{filterLabel}.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-civic-muted">
            Vuelve pronto: el Ayuntamiento publica aquí las nuevas actividades.
            Mientras tanto, consulta el calendario de fiestas y tradiciones.
          </p>
          <a
            href="#fiestas"
            className="mt-5 inline-flex min-h-11 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
          >
            Ver fiestas y tradiciones{" "}
            <FiChevronDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      ) : (
        months.map((month) => (
          <section
            key={month.key}
            aria-labelledby={`month-${month.key}`}
            className="mt-10"
          >
            <div className="flex items-baseline justify-between gap-4 border-b border-civic-ink/60 pb-3">
              <h3
                id={`month-${month.key}`}
                className="font-editorial text-2xl sm:text-3xl"
              >
                {month.label}
              </h3>
              <span className="font-editorial text-sm italic text-civic-muted">
                {month.events.length === 1
                  ? "1 cita"
                  : `${month.events.length} citas`}
              </span>
            </div>
            <ol>
              {month.events.map((event) => {
                const parts = eventDateParts(event.eventDate);
                const relative = relativeDayLabel(event.eventDate);
                return (
                  <li
                    key={event.id}
                    id={`evento-${event.id}`}
                    className="grid scroll-mt-24 gap-5 wrap-anywhere border-b border-civic-line py-8 sm:grid-cols-[6.5rem_1fr] md:gap-8 lg:grid-cols-[6.5rem_1fr_16rem]"
                  >
                    <p className="flex items-baseline gap-3 sm:block">
                      <span className="font-editorial text-6xl leading-[0.85] tracking-[-0.04em] text-civic-burgundy">
                        {parts?.day ?? "—"}
                      </span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted sm:mt-3">
                        {parts ? `${parts.weekday} · ${parts.month}` : "Por confirmar"}
                      </span>
                      {relative && (
                        <span className="mt-3 inline-block bg-civic-burgundy px-2 py-1 text-[10px] font-semibold text-white">
                          {relative}
                        </span>
                      )}
                    </p>
                    <article className="min-w-0">
                      <CategoryLabel category={event.category} />
                      <h4 className="mt-3 font-editorial text-2xl leading-tight sm:text-3xl">
                        {event.title}
                      </h4>
                      <p className="mt-2 text-xs text-civic-muted">
                        <time dateTime={event.eventDate.slice(0, 10)}>
                          {formatEventDate(event.eventDate)}
                        </time>
                      </p>
                      <p className="mt-4 max-w-2xl whitespace-pre-line text-sm leading-7 text-civic-muted">
                        {event.description}
                      </p>
                    </article>
                    {event.image && (
                      <button
                        type="button"
                        onClick={() => setExpanded(event)}
                        aria-label={`Ampliar imagen: ${event.title}`}
                        className="group relative flex h-44 items-center justify-center self-start border border-civic-line bg-civic-white p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy sm:col-start-2 lg:col-start-auto"
                      >
                        <img
                          src={mediaUrl(event.image)}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                        <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-civic-paper text-civic-burgundy transition-colors group-hover:bg-civic-burgundy group-hover:text-white">
                          <FiMaximize2 aria-hidden="true" className="size-4" />
                        </span>
                      </button>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))
      )}

      {past.length > 0 && (
        <details className="group mt-12 border-y border-civic-line">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy">
            <span>
              <span className="block font-editorial text-xl">
                Ya celebrados
              </span>
              <span className="mt-1 block text-xs text-civic-muted">
                {past.length === 1
                  ? "1 evento anterior"
                  : `${past.length} eventos anteriores`}
                {filterLabel}
              </span>
            </span>
            <FiChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-civic-burgundy group-open:rotate-180 motion-safe:transition-transform"
            />
          </summary>
          <ol className="border-t border-civic-line">
            {past.map((event) => (
              <li
                key={event.id}
                id={`evento-${event.id}`}
                className="grid scroll-mt-24 gap-x-8 wrap-anywhere gap-y-3 border-b border-civic-line py-6 last:border-b-0 sm:grid-cols-[9rem_1fr_auto]"
              >
                <p className="text-xs font-medium text-civic-muted">
                  <time dateTime={event.eventDate.slice(0, 10)}>
                    {formatShortDate(event.eventDate)}
                  </time>
                </p>
                <div className="min-w-0 opacity-80">
                  <CategoryLabel category={event.category} />
                  <h4 className="mt-2 font-editorial text-xl leading-tight">
                    {event.title}
                  </h4>
                  <p className="mt-2 max-w-2xl whitespace-pre-line text-xs leading-6 text-civic-muted">
                    {event.description}
                  </p>
                </div>
                {event.image && (
                  <button
                    type="button"
                    onClick={() => setExpanded(event)}
                    className="inline-flex min-h-11 w-fit items-center gap-2 self-start text-[11px] font-medium text-civic-burgundy hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
                  >
                    <FiMaximize2 aria-hidden="true" className="size-3.5" />
                    Ver imagen
                    <span className="sr-only">: {event.title}</span>
                  </button>
                )}
              </li>
            ))}
          </ol>
        </details>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="event-image-title"
        onClose={() => setExpanded(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setExpanded(null);
        }}
        className="fixed inset-0 m-auto max-h-[94svh] w-[min(94vw,1000px)] max-w-none overflow-auto border border-civic-line bg-civic-paper p-5 text-civic-ink shadow-2xl backdrop:bg-black/85 sm:p-7"
      >
        {expanded?.image && (
          <>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-civic-burgundy">
                  {expanded.category} · {formatShortDate(expanded.eventDate)}
                </p>
                <h2
                  id="event-image-title"
                  className="mb-0 mt-2 font-editorial text-2xl wrap-anywhere"
                >
                  {expanded.title}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setExpanded(null)}
                aria-label="Cerrar imagen"
                className="flex size-11 shrink-0 items-center justify-center border border-civic-line hover:bg-civic-stone/40 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                <FiX aria-hidden="true" className="size-5" />
              </button>
            </div>
            <img
              src={mediaUrl(expanded.image)}
              alt={`Imagen del evento ${expanded.title}`}
              className="mx-auto max-h-[72svh] w-auto max-w-full object-contain"
            />
          </>
        )}
      </dialog>
    </div>
  );
}
