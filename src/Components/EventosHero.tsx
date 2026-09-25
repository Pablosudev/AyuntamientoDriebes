import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import { mediaUrl } from "../data/api";
import {
  categoryDot,
  eventDateParts,
  formatEventDate,
  relativeDayLabel,
} from "../data/eventos";
import type { EventItem } from "../data/eventos";

type EventosHeroProps = {
  nextEvent: EventItem | null;
  isLoading: boolean;
  hasError: boolean;
};

function NextEvent({ event }: { event: EventItem }) {
  const parts = eventDateParts(event.eventDate);
  const relative = relativeDayLabel(event.eventDate);

  return (
    <article
      aria-labelledby="next-event-title"
      className="relative border border-civic-line bg-civic-white wrap-anywhere"
    >
      <div className="flex items-center justify-between gap-4 border-b border-civic-line px-5 py-4 sm:px-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
          La próxima cita
        </p>
        {relative && (
          <span className="bg-civic-burgundy px-2.5 py-1 text-[10px] font-semibold text-white">
            {relative}
          </span>
        )}
      </div>
      <div className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-7">
        <p className="flex items-baseline gap-3 sm:block sm:border-r sm:border-civic-line sm:pr-8">
          <span className="font-editorial text-[5.5rem] leading-[0.8] tracking-[-0.05em] text-civic-burgundy">
            {parts?.day ?? "—"}
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted sm:mt-4">
            {parts ? `${parts.weekday} · ${parts.month}` : "Por confirmar"}
          </span>
        </p>
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
            <span
              aria-hidden="true"
              className={`size-2 rounded-full ${categoryDot[event.category]}`}
            />
            {event.category}
          </p>
          <h2
            id="next-event-title"
            className="mb-0 mt-3 font-editorial text-3xl leading-[1.1] tracking-[-0.025em]"
          >
            {event.title}
          </h2>
          <p className="mt-2 text-xs text-civic-muted">
            <time dateTime={event.eventDate.slice(0, 10)}>
              {formatEventDate(event.eventDate)}
            </time>
          </p>
          <p className="mt-4 line-clamp-3 whitespace-pre-line text-sm leading-7 text-civic-muted">
            {event.description}
          </p>
          <a
            href={`#evento-${event.id}`}
            className="mt-5 inline-flex min-h-11 items-center gap-4 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
          >
            Ver en la agenda{" "}
            <FiArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
      {event.image && (
        <div className="flex justify-center border-t border-civic-line bg-civic-paper p-4">
          <img
            src={mediaUrl(event.image)}
            alt={`Imagen del evento ${event.title}`}
            fetchPriority="high"
            className="max-h-64 w-auto max-w-full object-contain"
          />
        </div>
      )}
    </article>
  );
}

export default function EventosHero({
  nextEvent,
  isLoading,
  hasError,
}: EventosHeroProps) {
  return (
    <section
      aria-labelledby="eventos-title"
      className="border-b border-civic-line bg-civic-paper text-civic-ink"
    >
      <div className="mx-auto max-w-[1320px] px-6 pt-6 sm:px-10 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-civic-line pb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-civic-muted">
          <nav aria-label="Ruta de navegación" className="flex items-center gap-2">
            <Link
              to="/"
              className="py-2 hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
            >
              Inicio
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-civic-burgundy">
              Eventos
            </span>
          </nav>
          <p className="hidden sm:block">Tu pueblo. Tus planes.</p>
        </div>

        <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="eventos-hero-copy">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-civic-burgundy"
              />
              Eventos y fiestas de Driebes
            </p>
            <h1
              id="eventos-title"
              className="font-editorial text-[clamp(5rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.065em] text-civic-burgundy"
            >
              Agenda<span className="text-civic-gold">.</span>
            </h1>
            <p className="mt-7 font-editorial text-[clamp(1.5rem,2.4vw,2rem)] italic leading-[1.2]">
              Los mejores planes
              <br />
              <span className="text-civic-burgundy">se comparten.</span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Fiestas, encuentros, deporte y cultura. Consulta las próximas
              citas del municipio y no te pierdas ninguna.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#agenda"
                className="inline-flex min-h-12 items-center gap-5 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                Ver las próximas citas{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#fiestas"
                className="inline-flex min-h-12 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                Fiestas y tradiciones{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 size-16 border-r border-t border-civic-gold/70 sm:-right-5 sm:-top-5 sm:size-24"
            />
            {isLoading ? (
              <div
                role="status"
                className="relative border border-civic-line bg-civic-white p-5 sm:p-7"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
                  La próxima cita
                </p>
                <p className="mt-5 font-editorial text-2xl text-civic-muted">
                  Buscando la próxima cita…
                </p>
                <div
                  aria-hidden="true"
                  className="mt-6 space-y-3 motion-safe:animate-pulse"
                >
                  <div className="h-3 w-3/4 bg-civic-stone/60" />
                  <div className="h-3 w-1/2 bg-civic-stone/60" />
                </div>
              </div>
            ) : nextEvent ? (
              <NextEvent event={nextEvent} />
            ) : (
              <figure className="relative max-w-[880px]">
                <img
                  src="/img/grafitiDriebes.jpg"
                  alt="Mural urbano con el nombre de Driebes y una figura de temática romana"
                  width="880"
                  height="495"
                  fetchPriority="high"
                  className="relative block h-auto w-full"
                />
                <figcaption className="relative -mt-10 ml-8 border border-civic-line bg-civic-white p-5 sm:ml-12 sm:p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-civic-burgundy">
                    La vida en la calle
                  </p>
                  <p className="mt-2 font-editorial text-2xl leading-tight">
                    Driebes se vive en compañía.
                  </p>
                  <p className="mt-2 text-xs leading-6 text-civic-muted">
                    {hasError
                      ? "Descubre el calendario de fiestas y tradiciones del pueblo."
                      : "No hay citas próximas publicadas. Mientras tanto, descubre el calendario de fiestas."}
                  </p>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
