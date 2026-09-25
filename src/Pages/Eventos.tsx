import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import EventosAgenda from "../Components/EventosAgenda";
import EventosHero from "../Components/EventosHero";
import { API_URL } from "../data/api";
import { hasPassed, sortKey } from "../data/eventos";
import type { EventItem } from "../data/eventos";
import { turismoFestivities, turismoSources } from "../data/turismo";
import { contact } from "../data/contacto";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const chapters = [
  { id: "agenda", label: "Próximas citas" },
  { id: "fiestas", label: "Fiestas y tradiciones" },
  { id: "participa", label: "Participa" },
];

export default function Eventos() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Agenda de Driebes: eventos y fiestas | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadEvents() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/events`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`La API respondió con el estado ${response.status}`);
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("La respuesta de eventos no es un listado");
        }

        setEvents(data as EventItem[]);
      } catch {
        if (!controller.signal.aborted) {
          setError(
            "Inténtalo de nuevo en unos instantes. Si el problema continúa, consulta las actividades con el Ayuntamiento.",
          );
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadEvents();
    return () => controller.abort();
  }, [reload]);

  const nextEvent =
    events
      .filter((event) => !hasPassed(event.eventDate))
      .sort((first, second) =>
        sortKey(first.eventDate).localeCompare(sortKey(second.eventDate)),
      )[0] ?? null;

  return (
    <div className="bg-civic-paper text-civic-ink">
      <EventosHero
        nextEvent={nextEvent}
        isLoading={isLoading}
        hasError={error !== null}
      />
      <nav
        aria-label="Secciones de la agenda"
        className="sticky top-0 z-20 border-b border-civic-line bg-civic-paper/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1320px] overflow-x-auto px-2 [scrollbar-color:var(--color-civic-stone)_transparent] [scrollbar-width:thin] sm:justify-start sm:gap-8 sm:px-10 lg:px-12">
          {chapters.map((chapter, index) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="flex min-h-16 shrink-0 items-center gap-3 px-4 py-3 text-[11px] font-medium text-civic-muted hover:bg-civic-white hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy"
            >
              <span
                aria-hidden="true"
                className="font-editorial italic text-civic-burgundy/70"
              >
                0{index + 1}
              </span>
              {chapter.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="agenda"
        aria-labelledby="agenda-title"
        className="mx-auto max-w-[1320px] scroll-mt-16 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={label}>01 / Próximas citas</p>
            <h2
              id="agenda-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Apunta la fecha.
              <br />
              <span className="italic text-civic-burgundy">
                Nos vemos allí.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            Las actividades que publica el Ayuntamiento, ordenadas por fecha.
            Filtra por categoría para encontrar tu plan.
          </p>
        </div>
        <EventosAgenda
          events={events}
          isLoading={isLoading}
          error={error}
          onRetry={() => setReload((value) => value + 1)}
        />
      </section>

      <section
        id="fiestas"
        aria-labelledby="fiestas-title"
        className="scroll-mt-16 border-y border-civic-line bg-[#ece7dc]"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className={label}>02 / Fiestas y tradiciones</p>
              <h2
                id="fiestas-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
              >
                Hay fechas
                <br />
                <span className="italic text-civic-burgundy">
                  que no se olvidan.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-civic-muted">
              Más allá de la agenda, el calendario festivo marca el año en
              Driebes. Las fechas exactas pueden variar cada año.
            </p>
          </div>
          <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {turismoFestivities.map((festivity, index) => (
              <li
                key={festivity.title}
                className="relative border-t border-civic-line pt-6 before:absolute before:-top-[4px] before:left-0 before:size-[7px] before:rounded-full before:bg-civic-burgundy"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-editorial text-3xl tracking-[-0.025em] text-civic-burgundy">
                    {festivity.date}
                  </p>
                  <span
                    aria-hidden="true"
                    className="font-editorial text-xs italic text-civic-muted"
                  >
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-civic-muted">
                  {festivity.period}
                </p>
                <h3 className="mt-5 font-editorial text-xl leading-tight">
                  {festivity.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-civic-muted">
                  {festivity.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-civic-line pt-6 sm:flex-row sm:items-center">
            <a
              href={turismoSources.festivities.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center gap-2 text-[11px] font-medium text-civic-burgundy underline decoration-civic-gold/60 underline-offset-4 hover:text-civic-burgundy-dark ${focus}`}
            >
              Fiestas y tradiciones, según la web municipal
              <FiArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
            </a>
            <Link
              to="/turismo"
              className={`inline-flex min-h-11 items-center gap-4 text-xs font-semibold text-civic-burgundy ${focus}`}
            >
              Prepara tu visita a Driebes{" "}
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="participa"
        aria-labelledby="participa-title"
        className="relative isolate scroll-mt-16 overflow-hidden bg-civic-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-10 -z-10 font-editorial text-[clamp(10rem,24vw,25rem)] leading-none tracking-[-0.06em] text-civic-burgundy/[0.035]"
        >
          ¡Ven!
        </span>
        <div className="mx-auto grid max-w-[1320px] gap-9 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-[1fr_0.8fr] md:items-center lg:px-12">
          <div>
            <p className={label}>03 / Participa</p>
            <h2
              id="participa-title"
              className="mb-0 mt-4 font-editorial text-4xl tracking-[-0.025em] sm:text-5xl"
            >
              ¿Tienes una propuesta?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Si quieres proponer una actividad o tienes dudas sobre alguna
              cita de la agenda, el Ayuntamiento te atiende.
            </p>
          </div>
          <div className="border-l-2 border-civic-burgundy pl-6 sm:pl-8">
            <a
              href={contact.phone.href}
              className={`inline-flex min-h-12 items-center gap-4 font-editorial text-3xl text-civic-burgundy ${focus}`}
            >
              <FiPhone
                aria-hidden="true"
                className="size-5 shrink-0 stroke-[1.25]"
              />
              {contact.phone.label}
            </a>
            <p className="mt-3 flex items-center gap-3 text-xs text-civic-muted">
              <FiMapPin aria-hidden="true" />
              {contact.office} · {contact.street}
            </p>
            <Link
              to="/contacto"
              className={`mt-5 inline-flex min-h-11 items-center gap-5 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy ${focus}`}
            >
              Escribir al Ayuntamiento{" "}
              <FiArrowUpRight aria-hidden="true" className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
