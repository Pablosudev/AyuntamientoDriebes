import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import ContactoChannels from "../Components/ContactoChannels";
import ContactoGuide from "../Components/ContactoGuide";
import ContactoHero from "../Components/ContactoHero";
import { contact } from "../data/contacto";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const chapters = [
  { id: "canales", label: "Cómo contactar" },
  { id: "que-necesitas", label: "¿Qué necesitas?" },
  { id: "donde", label: "Dónde estamos" },
];

export default function Contacto() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Contacto: teléfono, email y horario | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="bg-civic-paper text-civic-ink">
      <ContactoHero />
      <nav
        aria-label="Secciones de contacto"
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
        id="canales"
        aria-labelledby="canales-title"
        className="mx-auto max-w-[1320px] scroll-mt-16 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={label}>01 / Cómo contactar</p>
            <h2
              id="canales-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Elige cómo.
              <br />
              <span className="italic text-civic-burgundy">
                Estamos al otro lado.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            Por teléfono en horario de atención, por correo cuando te venga
            bien o en persona, en el Ayuntamiento.
          </p>
        </div>
        <ContactoChannels />
      </section>

      <section
        id="que-necesitas"
        aria-labelledby="guide-title"
        className="relative scroll-mt-16 overflow-hidden bg-civic-forest text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-56 -top-56 size-[650px] rounded-full border border-civic-sand/10 before:absolute before:inset-16 before:rounded-full before:border before:border-civic-sand/10 after:absolute after:inset-32 after:rounded-full after:border after:border-civic-sand/10"
        />
        <div className="relative mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-civic-sand sm:text-xs">
                02 / Te orientamos
              </p>
              <h2
                id="guide-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.1] tracking-[-0.025em] sm:text-5xl"
              >
                ¿Qué necesitas?
                <br />
                <span className="italic text-civic-sand">
                  Empieza por aquí.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">
              Elige tu consulta y te indicamos el camino más corto: una página,
              una llamada o un correo ya preparado.
            </p>
          </div>
          <ContactoGuide />
        </div>
      </section>

      <section
        id="donde"
        aria-labelledby="donde-title"
        className="scroll-mt-16 border-b border-civic-line bg-[#ece7dc]"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className={label}>03 / Dónde estamos</p>
            <h2
              id="donde-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Te esperamos
              <br />
              <span className="italic text-civic-burgundy">en Driebes.</span>
            </h2>
            <address className="mt-8 flex gap-4 border-l-2 border-civic-burgundy pl-6 not-italic sm:pl-8">
              <FiMapPin
                aria-hidden="true"
                className="mt-1.5 size-5 shrink-0 stroke-[1.25] text-civic-burgundy"
              />
              <span>
                <span className="block font-editorial text-3xl leading-tight">
                  {contact.street}
                </span>
                <span className="mt-2 block text-sm text-civic-muted">
                  {contact.postalCode} {contact.town}
                </span>
                <span className="mt-4 block text-xs leading-6 text-civic-muted">
                  {contact.hours}.
                </span>
              </span>
            </address>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center gap-5 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark ${focus}`}
              >
                Cómo llegar con Google Maps{" "}
                <FiArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href={contact.osmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark ${focus}`}
              >
                Ver en OpenStreetMap{" "}
                <FiArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
          <figure className="min-w-0">
            <div className="border border-civic-line bg-civic-white p-3 shadow-[0_16px_40px_-24px_#2e332f80] sm:p-4">
              <img
                src="/img/driebes.jpg"
                alt="La iglesia de la Asunción y los tejados de Driebes iluminados por la luz del atardecer"
                width="1440"
                height="685"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-x-5 gap-y-1 text-[10px] leading-5 text-civic-muted">
              <span>Driebes, en la Alcarria de Guadalajara.</span>
              <a
                href={contact.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-3 hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                Datos de contacto: web municipal ↗
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="bg-civic-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <Link
            to="/servicios"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-muted hover:text-civic-burgundy ${focus}`}
          >
            <FiArrowRight aria-hidden="true" className="rotate-180" />
            Servicios municipales
          </Link>
          <Link
            to="/noticias"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-burgundy ${focus}`}
          >
            Avisos y noticias del pueblo{" "}
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
