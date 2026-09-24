import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiChevronDown,
  FiMapPin,
  FiPhone,
  FiPlus,
} from "react-icons/fi";
import { LuLandmark, LuScanLine } from "react-icons/lu";
import CaracaExplorer from "../Components/CaracaExplorer";
import CaracaHero from "../Components/CaracaHero";
import { caracaFaqs, caracaSources, caracaTimeline } from "../data/caraca";

const chapters = [
  { id: "descubrimiento", label: "El descubrimiento" },
  { id: "explorar-caraca", label: "Explora la ciudad" },
  { id: "historia-caraca", label: "A través del tiempo" },
  { id: "visitar-caraca", label: "Prepara tu visita" },
];

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const sectionLabel =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 text-xs font-medium underline decoration-civic-gold/60 underline-offset-4 hover:text-civic-burgundy ${focusStyle}`}
    >
      {children}
      <FiArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
    </a>
  );
}

export default function HistoriaCaraca() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Caraca, la ciudad romana de Driebes | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="bg-civic-paper text-civic-ink">
      <CaracaHero />

      <nav
        aria-label="Secciones de la página de Caraca"
        className="sticky top-0 z-20 border-b border-civic-line bg-civic-paper/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1320px] overflow-x-auto px-2 sm:justify-between sm:px-10 lg:px-12">
          {chapters.map((chapter, index) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="group flex min-h-16 shrink-0 items-center gap-3 px-4 py-3 text-[11px] font-medium text-civic-muted transition-colors hover:bg-civic-white hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy"
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
        id="descubrimiento"
        aria-labelledby="discovery-title"
        className="mx-auto grid max-w-[1320px] scroll-mt-24 gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20 lg:px-12"
      >
        <div>
          <p className={sectionLabel}>
            01 / Un nombre, un lugar, un descubrimiento
          </p>
          <h2
            id="discovery-title"
            className="mb-0 mt-5 font-editorial text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl"
          >
            Parecía un cerro.
            <br />
            <span className="italic text-civic-burgundy">Era una ciudad.</span>
          </h2>
          <p className="mt-7 text-base leading-8 text-civic-muted">
            Durante siglos, Caraca fue un nombre en los textos antiguos.
            Encontrar su lugar en el paisaje exigió unir documentos, indicios y
            tecnología.
          </p>
          <p className="mt-5 text-sm leading-7 text-civic-muted">
            En el Cerro de la Virgen de la Muela, junto al Tajo, las
            prospecciones y las excavaciones han permitido reconocer una ciudad
            carpetana y romana. El georradar ayudó a leer lo que la tierra aún
            ocultaba: calles, manzanas y espacios públicos.
          </p>
          <div className="mt-7 flex items-start gap-4 border-l-2 border-civic-burgundy pl-5">
            <LuScanLine
              aria-hidden="true"
              className="mt-1 size-6 shrink-0 stroke-[1.2] text-civic-burgundy"
            />
            <p className="font-editorial text-xl leading-7">
              Antes de excavar sus calles,
              <br />
              pudimos volver a ver su trazado.
            </p>
          </div>
          <div className="mt-4">
            <SourceLink href={caracaSources.exhibition.url}>
              La historia del redescubrimiento
            </SourceLink>
          </div>
        </div>
        <figure className="relative min-w-0">
          <div
            className="absolute -left-3 -top-3 size-16 border-l border-t border-civic-gold/70 sm:-left-5 sm:-top-5 sm:size-24"
            aria-hidden="true"
          />
          <img
            src="/img/caraca/cerro.jpg"
            alt="Ruinas de la ermita de la Virgen de la Muela sobre el cerro donde se localiza Caraca, fotografiadas en 2017"
            width="1600"
            height="1200"
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
          <div className="relative -mt-10 ml-8 border border-civic-line bg-civic-white p-5 sm:ml-12 sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-civic-burgundy">
              El lugar del hallazgo
            </p>
            <p className="mt-2 font-editorial text-2xl leading-tight">
              Cerro de la Virgen de la Muela
            </p>
            <p className="mt-2 text-xs leading-6 text-civic-muted">
              Un paisaje real. Una historia todavía por descubrir.
            </p>
          </div>
          <figcaption className="mt-3 text-right text-[10px] leading-5 text-civic-muted">
            Fotografía de 2017 ·{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Ruinas_virgen_de_la_muela.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-civic-burgundy"
            >
              Camuskendar
            </a>{" "}
            ·{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-civic-burgundy"
            >
              CC BY-SA 4.0
            </a>
          </figcaption>
        </figure>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 pb-16 sm:px-10 sm:pb-24 lg:px-12">
        <dl
          aria-label="Caraca en cifras"
          className="grid grid-cols-1 border-y border-civic-line sm:grid-cols-3"
        >
          {[
            {
              value: "≈ 8",
              unit: "hectáreas",
              label: "de extensión en época altoimperial",
            },
            {
              value: "27",
              unit: "manzanas",
              label: "en la trama urbana propuesta",
            },
            {
              value: "I–II",
              unit: "siglos d. C.",
              label: "el momento de mayor esplendor",
            },
          ].map((item) => (
            <div
              key={item.unit}
              className="border-b border-civic-line py-7 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="flex flex-wrap items-baseline gap-3">
                <span className="font-editorial text-5xl leading-none tracking-[-0.03em] text-civic-burgundy">
                  {item.value}
                </span>
                <span className="text-xs font-medium text-civic-ink">
                  {item.unit}
                </span>
              </dt>
              <dd className="mt-3 text-xs leading-6 text-civic-muted">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[10px] leading-5 text-civic-muted">
          Dimensiones e interpretación según la{" "}
          <a
            href={caracaSources.heritage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-civic-burgundy"
          >
            ficha oficial de Patrimonio de Castilla-La Mancha
          </a>
          .
        </p>
      </div>

      <section
        id="explorar-caraca"
        aria-labelledby="explore-title"
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
                02 / Un paseo por la ciudad romana
              </p>
              <h2
                id="explore-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.1] tracking-[-0.025em] sm:text-5xl"
              >
                Imagina la vida.
                <br />
                <span className="italic text-civic-sand">
                  Descubre sus huellas.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">
              Elige un espacio y acércate a sus detalles. Fotografías,
              restituciones y documentos para mirar más allá de las piedras.
            </p>
          </div>
          <CaracaExplorer />
        </div>
      </section>

      <section
        id="historia-caraca"
        aria-labelledby="timeline-title"
        className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={sectionLabel}>03 / Las capas de la memoria</p>
            <h2
              id="timeline-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.12] tracking-[-0.025em] sm:text-5xl"
            >
              Un lugar.
              <br />
              <span className="italic text-civic-burgundy">Muchas vidas.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            La historia de Caraca empezó antes de Roma y continuó después de
            ella. Cada época dejó una huella distinta en este mismo paisaje.
          </p>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {caracaTimeline.map((event, index) => (
            <li
              key={event.date}
              className="relative border-t border-civic-line pt-6 before:absolute before:-top-[4px] before:left-0 before:size-[7px] before:rounded-full before:bg-civic-burgundy"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-editorial text-3xl tracking-[-0.025em] text-civic-burgundy">
                  {event.date}
                </p>
                <span
                  aria-hidden="true"
                  className="font-editorial text-xs italic text-civic-muted"
                >
                  0{index + 1}
                </span>
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-civic-muted">
                {event.period}
              </p>
              <h3 className="mt-5 font-editorial text-xl leading-tight">
                {event.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-civic-muted">
                {event.text}
              </p>
              <a
                href={event.source.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar fuente: ${event.date}, ${event.period}`}
                className={`mt-2 inline-flex min-h-11 items-center gap-2 text-[11px] font-medium text-civic-burgundy hover:underline ${focusStyle}`}
              >
                Saber más <FiArrowUpRight aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="treasure-title"
        className="relative isolate overflow-hidden bg-civic-burgundy text-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-4 -z-10 font-editorial text-[clamp(10rem,28vw,26rem)] leading-none tracking-[-0.08em] text-white/[0.035]"
        >
          1945
        </span>
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center border-b border-white/25 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-civic-sand">
              Un hallazgo fortuito · 1945
            </p>
            <p className="mt-7 font-editorial text-[clamp(5rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              13,8
              <span className="ml-3 text-3xl italic text-civic-sand">kg</span>
            </p>
            <p className="mt-4 font-editorial text-xl italic text-civic-sand">
              de plata. Siglos de preguntas.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-civic-sand">
              El Tesoro de Driebes
            </p>
            <h2
              id="treasure-title"
              className="mb-0 mt-4 font-editorial text-3xl leading-[1.15] tracking-[-0.025em] sm:text-4xl"
            >
              La tierra guardaba
              <br />
              algo más que calles.
              <br />
              <span className="italic text-civic-sand">
                Guardaba un tesoro.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85">
              En 1945, las obras del canal de Estremera sacaron a la luz un
              conjunto de objetos de plata ocultado en la Antigüedad. Joyas,
              fragmentos y monedas hablaban de una historia que todavía esperaba
              ser comprendida.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
              El llamado Tesoro de Driebes pertenece a las colecciones del Museo
              Arqueológico Nacional. Entre sus piezas destaca la conocida como
              Fíbula de Hércules: un pequeño objeto que abre una gran ventana al
              mundo carpetano.
            </p>
            <a
              href={caracaSources.treasure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-4 border-b border-white/40 text-xs font-medium text-white hover:text-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
            >
              Explorar la colección del museo{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="research-title"
        className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>Un yacimiento en investigación</p>
            <h2
              id="research-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-tight tracking-[-0.025em] sm:text-5xl"
            >
              La historia sigue escribiéndose.
            </h2>
          </div>
          <span className="w-fit border border-civic-line px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-civic-muted">
            Cuaderno de campo / 2026
          </span>
        </div>
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy">
              Campaña de 2026
            </p>
            <h3 className="mt-4 font-editorial text-2xl leading-tight">
              Diez veranos recuperando una ciudad.
            </h3>
            <p className="mt-4 text-sm leading-7 text-civic-muted">
              La décima campaña de excavaciones centra su trabajo en los
              espacios públicos y su evolución. La adquisición municipal de los
              terrenos de los principales edificios abre una nueva etapa para su
              investigación y conservación.
            </p>
            <div className="mt-5">
              <SourceLink href={caracaSources.campaign.url}>
                Leer la nota del equipo arqueológico
              </SourceLink>
            </div>
          </article>
          <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy">
              Hallazgo de 2025 · presentado en 2026
            </p>
            <h3 className="mt-4 font-editorial text-2xl leading-tight">
              Una esfinge entre los nuevos hallazgos.
            </h3>
            <p className="mt-4 text-sm leading-7 text-civic-muted">
              Los fragmentos de una escultura romana han permitido reconocer una
              esfinge, probablemente vinculada a un monumento funerario. Su
              estudio y restauración muestran cómo la arqueología reúne piezas,
              materiales y preguntas.
            </p>
            <div className="mt-5">
              <SourceLink href={caracaSources.sphinx.url}>
                Conocer el hallazgo y su estudio
              </SourceLink>
            </div>
          </article>
        </div>
      </section>

      <section
        id="visitar-caraca"
        aria-labelledby="visit-title"
        className="scroll-mt-16 border-y border-civic-line bg-[#eeece4]"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12">
          <div>
            <p className={sectionLabel}>04 / Ven con curiosidad</p>
            <h2
              id="visit-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.1] tracking-[-0.025em] sm:text-5xl"
            >
              La siguiente página
              <br />
              <span className="italic text-civic-burgundy">
                la recorres tú.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-civic-muted">
              Acércate al paisaje que guardó Caraca. Antes de venir, consulta
              las condiciones de acceso y las actividades disponibles con el
              Ayuntamiento.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                to="/contacto"
                className={`inline-flex min-h-12 items-center gap-5 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark ${focusStyle}`}
              >
                Consultar visitas <FiArrowUpRight aria-hidden="true" />
              </Link>
              <a
                href="tel:+34949298001"
                className={`inline-flex min-h-11 items-center gap-2 text-sm font-medium text-civic-burgundy ${focusStyle}`}
              >
                <FiPhone aria-hidden="true" className="size-4" />
                949 29 80 01
              </a>
            </div>
          </div>
          <div className="border border-civic-line bg-civic-paper p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <FiMapPin
                aria-hidden="true"
                className="mt-1 size-6 shrink-0 stroke-[1.3] text-civic-burgundy"
              />
              <div>
                <h3 className="font-editorial text-2xl leading-tight">
                  Cerro de la Virgen de la Muela
                </h3>
                <p className="mt-2 text-sm leading-7 text-civic-muted">
                  Término municipal de Driebes, Guadalajara.
                  <br />
                  Al sur del casco urbano, junto al río Tajo.
                </p>
                <SourceLink href="https://www.google.com/maps/search/?api=1&query=Yacimiento+arqueol%C3%B3gico+de+Caraca+Driebes">
                  Ver ubicación en el mapa
                </SourceLink>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-4 border-t border-civic-line pt-5">
              <FiBookOpen
                aria-hidden="true"
                className="mt-1 size-6 shrink-0 stroke-[1.3] text-civic-burgundy"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  Un patrimonio que cuidamos entre todos
                </h3>
                <p className="mt-2 text-sm leading-7 text-civic-muted">
                  Respeta las zonas delimitadas y los restos. Consulta
                  previamente las condiciones de movilidad y accesibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-title"
        className="mx-auto grid max-w-[1320px] gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12"
      >
        <div>
          <p className={sectionLabel}>Antes de venir</p>
          <h2
            id="faq-title"
            className="mb-0 mt-4 font-editorial text-3xl leading-tight sm:text-4xl"
          >
            Tu visita,
            <br />
            <span className="italic text-civic-burgundy">
              con más contexto.
            </span>
          </h2>
          <LuLandmark
            aria-hidden="true"
            className="mt-7 hidden size-14 stroke-[0.7] text-civic-gold lg:block"
          />
        </div>
        <div className="border-t border-civic-line">
          {caracaFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-civic-line"
            >
              <summary
                className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-medium [&::-webkit-details-marker]:hidden ${focusStyle}`}
              >
                {faq.question}
                <FiPlus
                  aria-hidden="true"
                  className="size-4 shrink-0 text-civic-burgundy group-open:rotate-45 motion-safe:transition-transform"
                />
              </summary>
              <p className="pb-6 pr-4 text-sm leading-7 text-civic-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        aria-label="Fuentes documentales y créditos"
        className="border-t border-civic-line"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-7 sm:px-10 lg:px-12">
          <details className="group">
            <summary
              className={`flex min-h-11 cursor-pointer list-none flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs [&::-webkit-details-marker]:hidden ${focusStyle}`}
            >
              <span className="flex items-center gap-3 font-medium">
                <FiBookOpen
                  aria-hidden="true"
                  className="size-4 text-civic-burgundy"
                />
                Fuentes, imágenes y criterios de esta página
                <FiChevronDown
                  aria-hidden="true"
                  className="size-3 group-open:rotate-180"
                />
              </span>
              <span className="text-[10px] text-civic-muted">
                Revisión documental: 24 de septiembre de 2026
              </span>
            </summary>
            <div className="grid gap-8 pb-4 pt-7 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-civic-burgundy">
                  Para seguir investigando
                </h2>
                <ul className="space-y-4">
                  {Object.values(caracaSources).map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm underline decoration-civic-line underline-offset-4 hover:text-civic-burgundy ${focusStyle}`}
                      >
                        {source.title} ↗
                      </a>
                      <p className="mt-1 text-[11px] leading-5 text-civic-muted">
                        {source.publisher} · {source.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-xs leading-7 text-civic-muted">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-civic-burgundy">
                  Mirar con rigor
                </h2>
                <p>
                  La portada utiliza una recreación interpretativa generada con
                  IA, con referencias al plano arqueológico de la UCM, al
                  paisaje local y a la reconstrucción de Miguel Zorita publicada
                  en la ficha de Patrimonio. No es una fotografía del lugar ni
                  una restitución científica exacta. La introducción pasa de esa
                  imagen a una fotografía real de las termas. Las fotografías de
                  las termas y el acueducto muestran restos reales; la imagen
                  del foro es una restitución de Daniel Méndez. El plano del
                  georradar corresponde al CAI de Arqueometría y Análisis
                  Arqueológico de la UCM.
                </p>
                <p className="mt-4">
                  Estos cuatro recursos se publicaron en el Portal de Cultura de
                  Castilla-La Mancha el 9 de febrero de 2023 y conservan sus
                  créditos. La fotografía de la ermita es de Camuskendar (2017),
                  bajo licencia CC BY-SA 4.0; se muestra con un encuadre
                  adaptado.
                </p>
                <p className="mt-4">
                  Las dimensiones son aproximadas y la interpretación del
                  yacimiento evoluciona con la investigación. La información
                  sobre campañas pasadas es histórica; consulta las próximas
                  visitas en los canales del Ayuntamiento y del equipo
                  arqueológico.
                </p>
                <div className="mt-4">
                  <SourceLink href="https://cultura.castillalamancha.es/avisolegal">
                    Información sobre reutilización del portal
                  </SourceLink>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      <div className="border-t border-civic-line bg-civic-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <Link
            to="/historia"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-muted hover:text-civic-burgundy ${focusStyle}`}
          >
            <FiArrowRight aria-hidden="true" className="rotate-180" />
            La historia de Driebes
          </Link>
          <Link
            to="/turismo"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-burgundy ${focusStyle}`}
          >
            Sigue descubriendo nuestro municipio{" "}
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
