import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import {
  LuBus,
  LuCalendarDays,
  LuLandmark,
  LuRecycle,
  LuSiren,
  LuStethoscope,
} from "react-icons/lu";
import { officeStatus } from "../data/contacto";

const index = [
  {
    id: "ayuntamiento",
    title: "Trámites",
    text: "Padrón, certificados y licencias.",
    icon: LuLandmark,
  },
  {
    id: "refugio",
    title: "Refugio municipal",
    text: "Consulta los días libres.",
    icon: LuCalendarDays,
  },
  {
    id: "salud",
    title: "Salud y farmacia",
    text: "Centro médico y cita previa.",
    icon: LuStethoscope,
  },
  {
    id: "urgencias",
    title: "Urgencias",
    text: "El 112 y los teléfonos de Mondéjar.",
    icon: LuSiren,
  },
  {
    id: "residuos",
    title: "Residuos",
    text: "Frecuencia y contenedores.",
    icon: LuRecycle,
  },
  {
    id: "transporte",
    title: "Transporte",
    text: "Autobuses a Madrid y Guadalajara.",
    icon: LuBus,
  },
];

export default function ServiciosHero() {
  const [status, setStatus] = useState(() => officeStatus());

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(officeStatus()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="servicios-title"
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
              Servicios
            </span>
          </nav>
          <p className="hidden sm:block">Tu Ayuntamiento, cerca</p>
        </div>

        <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="servicios-hero-copy min-w-0">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-civic-burgundy"
              />
              Servicios municipales
            </p>
            <h1
              id="servicios-title"
              className="font-editorial text-[clamp(3.75rem,9vw,7rem)] leading-[0.9] tracking-[-0.065em] text-civic-burgundy"
            >
              Servicios<span className="text-civic-gold">.</span>
            </h1>
            <p className="mt-7 font-editorial text-[clamp(1.5rem,2.4vw,2rem)] italic leading-[1.2]">
              Lo que necesitas,
              <br />
              <span className="text-civic-burgundy">cerca de casa.</span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Trámites, el refugio municipal, salud, residuos y transporte: la
              información práctica de Driebes, reunida en un solo lugar.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex min-h-12 max-w-full flex-wrap items-center gap-x-3 gap-y-1 border border-civic-line bg-civic-white px-4 py-3 text-xs hover:border-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
            >
              <span aria-hidden="true" className="relative flex size-2.5">
                {status.isOpen && (
                  <span className="absolute inline-flex size-full rounded-full bg-civic-forest/50 motion-safe:animate-ping" />
                )}
                <span
                  className={`relative inline-flex size-2.5 rounded-full ${status.isOpen ? "bg-civic-forest" : "bg-civic-burgundy"}`}
                />
              </span>
              <strong className="font-semibold">
                {status.isOpen
                  ? "El Ayuntamiento está abierto"
                  : "El Ayuntamiento está cerrado"}
              </strong>
              <span className="text-civic-muted">{status.message}</span>
            </Link>
          </div>

          <nav
            aria-label="Índice de servicios"
            className="relative min-w-0"
          >
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 size-16 border-r border-t border-civic-gold/70 sm:-right-5 sm:-top-5 sm:size-24"
            />
            <ul className="relative grid gap-px overflow-hidden border border-civic-line bg-civic-line sm:grid-cols-2">
              {index.map(({ id, title, text, icon: Icon }, position) => (
                <li key={id} className="bg-civic-white">
                  <a
                    href={`#${id}`}
                    className="group flex h-full items-start gap-4 p-5 transition-colors hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy sm:min-h-[128px] sm:flex-col sm:justify-between"
                  >
                    <span className="flex items-center justify-between gap-3 sm:w-full">
                      <Icon
                        aria-hidden="true"
                        className="size-6 shrink-0 stroke-[1.25] text-civic-burgundy"
                      />
                      <span
                        aria-hidden="true"
                        className="hidden font-editorial text-xs italic text-civic-muted sm:inline"
                      >
                        0{position + 1}
                      </span>
                    </span>
                    <span className="min-w-0 flex-1 sm:w-full sm:flex-none">
                      <span className="flex items-center justify-between gap-3 font-editorial text-xl leading-tight">
                        {title}
                        <FiArrowDown
                          aria-hidden="true"
                          className="size-4 shrink-0 text-civic-burgundy motion-safe:transition-transform motion-safe:group-hover:translate-y-0.5"
                        />
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-civic-muted">
                        {text}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
