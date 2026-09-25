import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiClock, FiPhone } from "react-icons/fi";
import { contact, officeHours, officeStatus } from "../data/contacto";

export default function ContactoHero() {
  const [status, setStatus] = useState(() => officeStatus());

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(officeStatus()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="contacto-title"
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
              Contacto
            </span>
          </nav>
          <p className="hidden sm:block">Atención ciudadana</p>
        </div>

        <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="contacto-hero-copy relative isolate min-w-0">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-16 -z-10 font-editorial text-[clamp(8rem,18vw,15rem)] leading-none tracking-[-0.06em] text-civic-burgundy/[0.04]"
            >
              Hola.
            </span>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-civic-burgundy"
              />
              Contacto con el Ayuntamiento
            </p>
            <h1
              id="contacto-title"
              className="font-editorial text-[clamp(3.75rem,9vw,7rem)] leading-[0.9] tracking-[-0.065em] text-civic-burgundy"
            >
              Hablemos<span className="text-civic-gold">.</span>
            </h1>
            <p className="mt-7 font-editorial text-[clamp(1.5rem,2.4vw,2rem)] italic leading-[1.2]">
              Una duda, una gestión, una propuesta.
              <br />
              <span className="text-civic-burgundy">
                Al otro lado hay personas.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={contact.phone.href}
                className="inline-flex min-h-12 items-center gap-4 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                <FiPhone aria-hidden="true" className="size-4" />
                Llamar al {contact.phone.label}
              </a>
              <a
                href="#que-necesitas"
                className="inline-flex min-h-12 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                ¿Qué necesitas?{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 size-16 border-r border-t border-civic-gold/70 sm:-right-5 sm:-top-5 sm:size-24"
            />
            <article
              aria-labelledby="office-status-title"
              className="relative border border-civic-line bg-civic-white"
            >
              <div className="flex items-center justify-between gap-4 border-b border-civic-line px-5 py-4 sm:px-7">
                <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
                  <FiClock aria-hidden="true" className="size-3.5" />
                  La oficina, ahora
                </p>
                <p className="text-[10px] text-civic-muted">Hora de España</p>
              </div>
              <div className="p-5 sm:p-7">
                <h2
                  id="office-status-title"
                  aria-live="polite"
                  className="mb-0 flex items-center gap-4 font-editorial text-4xl tracking-[-0.03em] sm:text-5xl"
                >
                  <span aria-hidden="true" className="relative flex size-3.5">
                    {status.isOpen && (
                      <span className="absolute inline-flex size-full rounded-full bg-civic-forest/50 motion-safe:animate-ping" />
                    )}
                    <span
                      className={`relative inline-flex size-3.5 rounded-full ${status.isOpen ? "bg-civic-forest" : "bg-civic-burgundy"}`}
                    />
                  </span>
                  {status.isOpen ? "Abierto ahora" : "Cerrado ahora"}
                </h2>
                <p className="mt-3 text-sm text-civic-muted">
                  {status.message}.
                </p>
                <ol
                  aria-label="Horario de atención al público"
                  className="mt-7 grid grid-cols-7 gap-1.5"
                >
                  {officeHours.map((item) => {
                    const isToday = item.day === status.today;
                    return (
                      <li
                        key={item.day}
                        aria-current={isToday ? "date" : undefined}
                        className={`flex flex-col items-center gap-2 border px-1 py-3 text-center ${isToday ? "border-civic-burgundy bg-civic-burgundy text-white" : "border-civic-line text-civic-ink"}`}
                      >
                        <abbr
                          title={item.name}
                          className="font-editorial text-lg no-underline"
                        >
                          {item.short}
                        </abbr>
                        <span
                          className={`text-[9px] leading-4 ${isToday ? "text-white/85" : "text-civic-muted"}`}
                        >
                          {item.open ? (
                            <>
                              {item.open}
                              <br />
                              {item.close}
                            </>
                          ) : (
                            "Cerrado"
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ol>
                <p className="mt-5 border-t border-civic-line pt-4 text-[11px] leading-5 text-civic-muted">
                  Horario de atención al público: {contact.hours.toLowerCase()}. En
                  días festivos, consulta antes de venir.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
