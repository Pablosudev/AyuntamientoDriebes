import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiChevronDown,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { LuBusFront, LuCar, LuPill, LuSiren, LuStethoscope } from "react-icons/lu";
import ServiciosHero from "../Components/ServiciosHero";
import ServiciosRefugio from "../Components/ServiciosRefugio";
import ServiciosResiduos from "../Components/ServiciosResiduos";
import { contact, mailtoHref } from "../data/contacto";
import {
  busLines,
  emergencyPhones,
  healthServices,
  municipalProcedures,
  serviciosSources,
  wasteService,
} from "../data/servicios";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const chapters = [
  { id: "ayuntamiento", label: "Ayuntamiento" },
  { id: "refugio", label: "Refugio" },
  { id: "salud", label: "Salud y urgencias" },
  { id: "residuos", label: "Residuos" },
  { id: "transporte", label: "Transporte" },
];
const healthIcons = { consultorio: LuStethoscope, farmacia: LuPill };

function Reference({
  source,
  children,
}: {
  source: { url: string; publisher: string };
  children?: string;
}) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 text-[11px] font-medium text-civic-burgundy underline decoration-civic-gold/60 underline-offset-4 hover:text-civic-burgundy-dark ${focus}`}
    >
      {children ?? source.publisher}
      <FiArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
    </a>
  );
}

export default function Servicios() {
  const { hash } = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Servicios municipales: trámites, refugio, salud y transporte | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="bg-civic-paper text-civic-ink">
      <ServiciosHero />
      <nav
        aria-label="Secciones de servicios"
        className="sticky top-0 z-20 border-b border-civic-line bg-civic-paper/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1320px] overflow-x-auto px-2 [scrollbar-color:var(--color-civic-stone)_transparent] [scrollbar-width:thin] sm:justify-between sm:px-10 lg:px-12">
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
        id="ayuntamiento"
        aria-labelledby="ayuntamiento-title"
        className="mx-auto grid max-w-[1320px] scroll-mt-16 gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12"
      >
        <div>
          <p className={label}>01 / Tu Ayuntamiento</p>
          <h2
            id="ayuntamiento-title"
            className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
          >
            Los trámites,
            <br />
            <span className="italic text-civic-burgundy">a un paso.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-civic-muted">
            Las gestiones municipales se resuelven en el Ayuntamiento, en{" "}
            {contact.street}. Llama antes para confirmar qué documentación
            necesitas llevar.
          </p>
          <dl className="mt-8 grid gap-5 border-l-2 border-civic-burgundy pl-6 sm:grid-cols-2 sm:pl-8">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
                Horario de atención
              </dt>
              <dd className="mt-2 font-editorial text-xl leading-tight">
                {contact.hours}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
                Teléfono
              </dt>
              <dd className="mt-2">
                <a
                  href={contact.phone.href}
                  className={`font-editorial text-2xl text-civic-burgundy hover:text-civic-burgundy-dark ${focus}`}
                >
                  {contact.phone.label}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={mailtoHref("Consulta sobre un trámite municipal")}
              className={`inline-flex min-h-12 items-center gap-3 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark ${focus}`}
            >
              <FiMail aria-hidden="true" className="size-4" />
              Escribir sobre un trámite
            </a>
            <Link
              to="/contacto"
              className={`inline-flex min-h-12 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark ${focus}`}
            >
              Todas las formas de contacto{" "}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
            Gestiones habituales
          </h3>
          <ol className="mt-5 border-t border-civic-line">
            {municipalProcedures.map((procedure, index) => (
              <li
                key={procedure.title}
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-civic-line py-6 sm:grid-cols-[4rem_1fr]"
              >
                <span
                  aria-hidden="true"
                  className="font-editorial text-4xl italic leading-none text-civic-gold sm:text-5xl"
                >
                  0{index + 1}
                </span>
                <div>
                  <p className="font-editorial text-2xl leading-tight sm:text-3xl">
                    {procedure.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-civic-muted">
                    {procedure.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="refugio"
        aria-labelledby="refugio-title"
        className="scroll-mt-16 border-y border-civic-line bg-civic-white"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className={label}>02 / Refugio municipal</p>
              <h2
                id="refugio-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
              >
                Mira qué días están libres.
                <br />
                <span className="italic text-civic-burgundy">
                  Y reserva el tuyo.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-civic-muted">
              El calendario muestra los días reservados y los pendientes de
              confirmar, sin ningún dato de quien los ha solicitado.
            </p>
          </div>
          <ServiciosRefugio />
        </div>
      </section>

      <section
        id="salud"
        aria-labelledby="salud-title"
        className="relative scroll-mt-16 overflow-hidden bg-civic-forest text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-56 -top-56 size-[650px] rounded-full border border-civic-sand/10 before:absolute before:inset-16 before:rounded-full before:border before:border-civic-sand/10 after:absolute after:inset-32 after:rounded-full after:border after:border-civic-sand/10"
        />
        <div className="relative mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-civic-sand sm:text-xs">
                03 / Salud y urgencias
              </p>
              <h2
                id="salud-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.1] tracking-[-0.025em] sm:text-5xl"
              >
                Cuidarte,
                <br />
                <span className="italic text-civic-sand">también aquí.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">
              El centro médico y la farmacia del pueblo, la cita previa del
              SESCAM y los teléfonos que conviene tener a mano.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/20 bg-white/20 lg:grid-cols-3">
            {healthServices.map((service) => {
              const Icon =
                healthIcons[service.id as keyof typeof healthIcons] ??
                LuStethoscope;
              return (
                <article
                  key={service.id}
                  className="flex flex-col bg-civic-forest p-6 sm:p-8"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-7 stroke-[1.2] text-civic-sand"
                  />
                  <h3 className="mt-8 font-editorial text-3xl leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/75">
                    {service.text}
                  </p>
                  <a
                    href={service.phone.href}
                    className="mt-6 inline-flex min-h-12 w-fit items-center gap-3 font-editorial text-3xl text-civic-sand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
                  >
                    <FiPhone
                      aria-hidden="true"
                      className="size-5 shrink-0 stroke-[1.25]"
                    />
                    {service.phone.label}
                  </a>
                  {service.link && (
                    <a
                      href={service.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 w-fit items-center gap-3 text-xs font-semibold text-white underline decoration-white/35 underline-offset-4 hover:text-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
                    >
                      {service.link.label} en el SESCAM{" "}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </article>
              );
            })}
            <article
              id="urgencias"
              aria-labelledby="urgencias-title"
              className="flex scroll-mt-24 flex-col bg-civic-burgundy p-6 sm:p-8"
            >
              <LuSiren
                aria-hidden="true"
                className="size-7 stroke-[1.2] text-civic-sand"
              />
              <h3
                id="urgencias-title"
                className="mt-8 font-editorial text-3xl leading-tight"
              >
                Urgencias
              </h3>
              <a
                href="tel:112"
                className="mt-4 inline-flex w-fit items-baseline gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
              >
                <span className="font-editorial text-7xl leading-none tracking-[-0.04em]">
                  112
                </span>
                <span className="text-xs leading-5 text-white/80">
                  Emergencias
                  <br />
                  24 horas, gratuito
                </span>
              </a>
              <ul className="mt-6 border-t border-white/25">
                {emergencyPhones.map((item) => (
                  <li key={item.title} className="border-b border-white/15">
                    <a
                      href={item.phone.href}
                      className="flex min-h-14 items-center justify-between gap-4 py-2 hover:text-civic-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-sand"
                    >
                      <span>
                        <span className="block text-sm font-medium">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/65">
                          {item.place}
                        </span>
                      </span>
                      <span className="font-editorial text-xl">
                        {item.phone.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 text-[11px] leading-5 text-white/60">
            Teléfonos según la{" "}
            <a
              href={serviciosSources.phones.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 hover:text-white focus-visible:outline-2 focus-visible:outline-civic-sand"
            >
              web municipal ↗
            </a>
            . Los horarios del centro médico y de la farmacia no están
            publicados: confírmalos por teléfono.
          </p>
        </div>
      </section>

      <section
        id="residuos"
        aria-labelledby="residuos-title"
        className="scroll-mt-16 border-b border-civic-line bg-[#ece7dc]"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className={label}>04 / Residuos</p>
              <h2
                id="residuos-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
              >
                Cada cosa
                <br />
                <span className="italic text-civic-burgundy">
                  en su contenedor.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-civic-muted">
              Desde el {wasteService.since}, la recogida y el transporte de los
              residuos de Driebes los presta el servicio provincial de la{" "}
              {wasteService.provider}.
            </p>
          </div>
          <ServiciosResiduos />
          <div className="mt-4">
            <Reference source={serviciosSources.waste}>
              La incorporación de Driebes al servicio provincial
            </Reference>
          </div>
        </div>
      </section>

      <section
        id="transporte"
        aria-labelledby="transporte-title"
        className="mx-auto max-w-[1320px] scroll-mt-16 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={label}>05 / Transporte</p>
            <h2
              id="transporte-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Ir y volver
              <br />
              <span className="italic text-civic-burgundy">en autobús.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            Los horarios cambian con las temporadas: consúltalos siempre en la
            fuente oficial antes de salir.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-12 min-w-16 items-center justify-center bg-civic-forest px-3 font-editorial text-3xl text-white">
                {busLines.madrid.number}
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
                  Autobús interurbano
                </p>
                <h3 className="mt-1 font-editorial text-2xl leading-tight">
                  {busLines.madrid.name}
                </h3>
              </div>
            </div>
            <ol
              aria-label="Recorrido simplificado de la línea"
              className="mt-10 grid grid-cols-3"
            >
              {busLines.madrid.stops.map((stop, index) => (
                <li key={stop} className="relative text-center">
                  {index < busLines.madrid.stops.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 top-[7px] h-0.5 w-full ${index === 0 ? "bg-[repeating-linear-gradient(90deg,var(--color-civic-forest)_0_8px,transparent_8px_14px)]" : "bg-civic-forest"}`}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className={`relative mx-auto block size-4 rounded-full border-2 border-civic-forest ${index === busLines.madrid.stops.length - 1 ? "bg-civic-forest" : "bg-civic-white"}`}
                  />
                  <span
                    className={`mt-3 block text-xs sm:text-sm ${index === busLines.madrid.stops.length - 1 ? "font-semibold text-civic-forest" : "font-medium"}`}
                  >
                    {stop}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-center text-[10px] text-civic-muted">
              Con paradas intermedias en la Comunidad de Madrid
            </p>
            <p className="mt-8 border-t border-civic-line pt-5 text-sm leading-7 text-civic-muted">
              Une Driebes con Madrid a través de Mondéjar. No todas las
              expediciones llegan hasta Driebes: comprueba el horario de la
              que vas a tomar.
            </p>
            <Reference source={serviciosSources.bus326}>
              Horarios en el Consorcio de Transportes de Madrid
            </Reference>
          </article>

          <div className="grid gap-6">
            <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <LuBusFront
                  aria-hidden="true"
                  className="size-7 stroke-[1.2] text-civic-burgundy"
                />
                <h3 className="font-editorial text-2xl leading-tight">
                  Hacia Guadalajara
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-civic-muted">
                En 2019, el cartel municipal recogía la línea{" "}
                {busLines.guadalajara.number} de{" "}
                {busLines.guadalajara.operator}, de lunes a viernes laborables.
                Confirma si sigue vigente antes de viajar.
              </p>
              <a
                href={busLines.guadalajara.phone.href}
                className={`mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-civic-burgundy ${focus}`}
              >
                <FiPhone aria-hidden="true" className="size-4" />
                {busLines.guadalajara.operator}:{" "}
                {busLines.guadalajara.phone.label}
              </a>
              <div>
                <Reference source={serviciosSources.transport}>
                  Cartel de transporte de la web municipal
                </Reference>
              </div>
            </article>
            <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <LuCar
                  aria-hidden="true"
                  className="size-7 stroke-[1.2] text-civic-burgundy"
                />
                <h3 className="font-editorial text-2xl leading-tight">
                  En coche
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-civic-muted">
                Calcula tu ruta hasta el Ayuntamiento de Driebes.
              </p>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex min-h-11 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy ${focus}`}
              >
                Cómo llegar con Google Maps{" "}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-label="Fuentes de esta página"
        className="border-t border-civic-line"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-7 sm:px-10 lg:px-12">
          <details className="group">
            <summary
              className={`flex min-h-11 cursor-pointer list-none flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs [&::-webkit-details-marker]:hidden ${focus}`}
            >
              <span className="flex items-center gap-3 font-medium">
                <FiBookOpen
                  aria-hidden="true"
                  className="size-4 text-civic-burgundy"
                />
                Fuentes de esta página
                <FiChevronDown
                  aria-hidden="true"
                  className="size-3 group-open:rotate-180"
                />
              </span>
              <span className="text-[10px] text-civic-muted">
                Revisión documental: 25 de septiembre de 2026
              </span>
            </summary>
            <div className="grid gap-8 pb-4 pt-7 lg:grid-cols-2">
              <ul className="space-y-4">
                {Object.values(serviciosSources).map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm underline decoration-civic-line underline-offset-4 hover:text-civic-burgundy ${focus}`}
                    >
                      {source.title} ↗
                    </a>
                    <p className="mt-1 text-[11px] leading-5 text-civic-muted">
                      {source.publisher}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="text-xs leading-7 text-civic-muted">
                <p>
                  Solo se publican datos con fuente. Los días de recogida de
                  residuos y los horarios del centro médico y de la farmacia
                  no están publicados, por lo que conviene confirmarlos con el
                  Ayuntamiento.
                </p>
                <p className="mt-4">
                  La disponibilidad del refugio procede directamente del
                  sistema de reservas del Ayuntamiento y solo indica si un día
                  está libre, pendiente o reservado.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <div className="border-t border-civic-line bg-civic-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <Link
            to="/contacto"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-muted hover:text-civic-burgundy ${focus}`}
          >
            <FiArrowRight aria-hidden="true" className="rotate-180" />
            Contacto y horario
          </Link>
          <Link
            to="/noticias"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-burgundy ${focus}`}
          >
            Avisos y noticias del pueblo <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
