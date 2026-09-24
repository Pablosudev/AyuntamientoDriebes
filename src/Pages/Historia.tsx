import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiPlus,
} from "react-icons/fi";
import { LuLandmark, LuSprout } from "react-icons/lu";
import DriebesHero from "../Components/DriebesHero";
import DriebesTimeline from "../Components/DriebesTimeline";
import { driebesSources } from "../data/driebes";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const chapters = [
  { id: "relato-driebes", label: "El pueblo" },
  { id: "tiempo-driebes", label: "A través del tiempo" },
  { id: "patrimonio-driebes", label: "Lo que permanece" },
  { id: "memoria-driebes", label: "Memoria viva" },
];
const places = [
  {
    title: "La iglesia de la Asunción",
    period: "Mediados del siglo XVII",
    text: "Su torre dibuja el perfil del pueblo. La portada de piedra rojiza, protegida por un tejaroz, invita a detener la mirada en sus detalles.",
    source: driebesSources.monuments,
  },
  {
    title: "La Casa Grande",
    period: "La huella de la vida ganadera",
    text: "Vinculada a una familia de ganaderos, destaca por la altura de sus pisos, la proporción de sus ventanas y su rejería. Una memoria doméstica y económica del municipio.",
    source: driebesSources.heritage,
  },
  {
    title: "Las ermitas de la Muela",
    period: "Dos lugares, una devoción",
    text: "La antigua ermita conserva sus ruinas en el cerro. La nueva se construyó en 2002 cerca del Tajo. Son dos espacios distintos ligados a una misma tradición local.",
    source: driebesSources.monuments,
  },
];
const questions = [
  {
    question: "¿De dónde viene el nombre de Driebes?",
    answer:
      "El origen del nombre está abierto a distintas interpretaciones. La web municipal recoge varias hipótesis y la variante «Drieves». Son propuestas sobre la toponimia, no una etimología que podamos presentar como demostrada.",
    source: driebesSources.history,
  },
  {
    question: "¿Driebes y Caraca son el mismo lugar?",
    answer:
      "Caraca es el yacimiento carpetano y romano del Cerro de la Virgen de la Muela, dentro del término de Driebes y fuera del casco urbano actual. Conocerlo ayuda a comprender la historia del territorio; la historia del pueblo incluye también sus calles, sus oficios y sus vecinos.",
    source: driebesSources.archaeology,
  },
  {
    question: "¿De qué años son las fotografías antiguas?",
    answer:
      "La galería municipal no indica la fecha ni la autoría de las imágenes seleccionadas. Por eso conservamos esa información como desconocida. Sus pies originales y lo que se ve en ellas permiten acercarse al pasado sin asignarles una fecha inventada.",
    source: driebesSources.archive,
  },
];

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

export default function Historia() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Historia de Driebes: un pueblo, todas nuestras historias | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="bg-civic-paper text-civic-ink">
      <DriebesHero />
      <nav
        aria-label="Secciones de la historia de Driebes"
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
        id="relato-driebes"
        aria-labelledby="driebes-story-title"
        className="mx-auto grid max-w-[1320px] scroll-mt-24 gap-8 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-12"
      >
        <div>
          <p className={label}>01 / Una historia a pie de calle</p>
          <h2
            id="driebes-story-title"
            className="mb-0 mt-5 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
          >
            Antes que una fecha,
            <br />
            <span className="italic text-civic-burgundy">
              una forma de vivir.
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-civic-muted">
            La historia de Driebes se lee en un yacimiento, pero también en una
            puerta, en un antiguo molino o en una fotografía guardada durante
            generaciones.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-civic-muted">
            En este rincón de la Alcarria, la agricultura y la ganadería han
            marcado la vida cotidiana. El cereal, el esparto y el trabajo de la
            tierra forman parte de esa memoria compartida.
          </p>
          <div className="mt-3">
            <Reference source={driebesSources.history}>
              El relato del Ayuntamiento
            </Reference>
          </div>
        </div>
        <div className="self-center border-l border-civic-gold/60 pl-6 sm:pl-9">
          <p className="font-editorial text-3xl italic leading-tight sm:text-4xl">
            Las grandes historias
            <br />
            también ocurren
            <br />
            <span className="text-civic-burgundy">
              en los pueblos pequeños.
            </span>
          </p>
          <p className="mt-6 max-w-sm text-xs leading-7 text-civic-muted">
            Este recorrido une documentos, patrimonio y fotografías. Una
            invitación a reconocer lo que sigue cerca de nosotros.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-civic-line pt-5 text-[10px] leading-5 text-civic-muted">
            <div>
              <span className="mb-1 block font-editorial text-2xl text-civic-burgundy">
                Tierra
              </span>
              El paisaje
            </div>
            <div>
              <span className="mb-1 block font-editorial text-2xl text-civic-burgundy">
                Huellas
              </span>
              El patrimonio
            </div>
            <div>
              <span className="mb-1 block font-editorial text-2xl text-civic-burgundy">
                Vidas
              </span>
              La memoria
            </div>
          </div>
        </div>
      </section>

      <section
        id="tiempo-driebes"
        aria-labelledby="driebes-time-title"
        className="scroll-mt-16 border-y border-civic-line bg-civic-white"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className={label}>02 / Un recorrido por sus etapas</p>
              <h2
                id="driebes-time-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl"
              >
                Cada época
                <br />
                <span className="italic text-civic-burgundy">
                  dejó algo aquí.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-civic-muted">
              Elige una etapa para conocer sus huellas y consultar la fuente que
              cuenta su historia.
            </p>
          </div>
          <DriebesTimeline />
        </div>
      </section>

      <section
        aria-labelledby="driebes-treasure-title"
        className="relative isolate overflow-hidden bg-civic-burgundy text-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-5 top-4 -z-10 font-editorial text-[clamp(10rem,28vw,30rem)] leading-none text-white/[0.035]"
        >
          Ag
        </span>
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-civic-sand">
              Una pieza de una historia mayor
            </p>
            <h2
              id="driebes-treasure-title"
              className="mb-0 mt-5 font-editorial text-4xl leading-[1.07] tracking-[-0.03em] sm:text-5xl"
            >
              La plata que contó
              <br />
              <span className="italic text-civic-sand">otra historia.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/80">
              El Tesoro de Driebes reúne monedas, adornos y fragmentos de plata
              ocultados en la Antigüedad. La colección permite conocer cómo
              circulaba el metal y qué valor tenía antes de la plena
              romanización.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-9 gap-y-5 border-y border-white/25 py-6">
              <div>
                <dt className="font-editorial text-4xl text-civic-sand">
                  13,8 kg
                </dt>
                <dd className="mt-2 text-[11px] text-white/70">
                  de plata en el conjunto
                </dd>
              </div>
              <div>
                <dt className="font-editorial text-4xl text-civic-sand">MAN</dt>
                <dd className="mt-2 text-[11px] text-white/70">
                  Museo Arqueológico Nacional
                </dd>
              </div>
            </dl>
            <a
              href={driebesSources.treasure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-sand underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              La historia del tesoro, por el Museo de Guadalajara{" "}
              <FiArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
          </div>
          <figure className="min-w-0">
            <div className="border border-white/25 bg-civic-paper p-3 sm:p-4">
              <img
                src="/img/historia-driebes/fibula.jpg"
                alt="Fíbula del Tesoro de Driebes, una pieza de plata decorada con figuras y motivos en relieve"
                width="1096"
                height="800"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-x-5 gap-y-1 text-[10px] leading-5 text-white/70">
              <span>Fíbula del Tesoro de Driebes</span>
              <a
                href={driebesSources.archive.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-white"
              >
                Imagen de la galería municipal ↗
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="patrimonio-driebes"
        aria-labelledby="driebes-heritage-title"
        className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className={label}>03 / Lo que permanece</p>
            <h2
              id="driebes-heritage-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Lugares que guardan
              <br />
              <span className="italic text-civic-burgundy">
                nuestra memoria.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            Algunas huellas se ven desde lejos. Otras aparecen cuando miras una
            portada, una ventana o el lugar donde tantas veces se ha reunido el
            pueblo.
          </p>
        </div>
        <figure className="mt-10">
          <img
            src="/img/driebes.jpg"
            alt="La iglesia de la Asunción y los tejados de Driebes iluminados por la luz del atardecer"
            width="1440"
            height="685"
            loading="lazy"
            className="h-auto w-full"
          />
          <figcaption className="flex flex-wrap justify-between gap-3 border-b border-civic-line py-4 text-[10px] leading-5 text-civic-muted">
            <span>La iglesia, entre los tejados del pueblo.</span>
            <span>Driebes · Guadalajara</span>
          </figcaption>
        </figure>
        <div className="mt-3 grid md:grid-cols-3">
          {places.map((place, index) => (
            <article
              key={place.title}
              className="border-b border-civic-line py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-editorial text-2xl italic text-civic-gold">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-editorial text-2xl leading-tight">
                {place.title}
              </h3>
              <p className="mt-3 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-civic-burgundy">
                {place.period}
              </p>
              <p className="mt-4 text-sm leading-7 text-civic-muted">
                {place.text}
              </p>
              <div className="mt-2">
                <Reference source={place.source}>
                  Consultar la ficha municipal
                </Reference>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="memoria-driebes"
        aria-labelledby="driebes-memory-title"
        className="scroll-mt-16 border-y border-civic-line bg-[#ece7dc]"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:px-12">
          <figure className="order-2 min-w-0 lg:order-1">
            <div className="border border-civic-line bg-civic-white p-3 shadow-[0_16px_40px_-24px_#2e332f80] sm:p-5">
              <img
                src="/img/historia-driebes/esparto.jpg"
                alt="Retrato antiguo de un grupo de personas junto a la fábrica de esparto de Driebes, según la galería municipal"
                width="614"
                height="431"
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[614px]"
              />
              <figcaption className="pt-4">
                <p className="font-editorial text-xl">
                  Junto a la fábrica de esparto.
                </p>
                <p className="mt-2 text-[10px] leading-5 text-civic-muted">
                  Identificación de la galería municipal. Fecha y autoría no
                  indicadas.
                </p>
                <a
                  href={driebesSources.archive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-1 inline-flex min-h-11 items-center text-[10px] text-civic-burgundy underline underline-offset-3 ${focus}`}
                >
                  Ver el archivo de fotografías ↗
                </a>
              </figcaption>
            </div>
          </figure>
          <div className="order-1 lg:order-2">
            <p className={label}>04 / La memoria de lo cotidiano</p>
            <h2
              id="driebes-memory-title"
              className="mb-0 mt-5 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Las manos
              <br />
              <span className="italic text-civic-burgundy">
                que hicieron pueblo.
              </span>
            </h2>
            <p className="mt-7 text-sm leading-7 text-civic-muted">
              El relato municipal recuerda los cultivos, los rebaños y la
              actividad quesera. Las fotografías añaden lo que una fecha no
              puede contar: gestos, herramientas y personas compartiendo un
              mismo espacio.
            </p>
            <div className="mt-8 space-y-5 border-t border-civic-line pt-6">
              <div className="flex gap-4">
                <LuSprout
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 stroke-[1.2] text-civic-burgundy"
                />
                <div>
                  <h3 className="font-editorial text-xl">
                    El trabajo deja huella.
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-civic-muted">
                    En el molino, en las labores del campo y en los saberes
                    transmitidos entre generaciones.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiBookOpen
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 stroke-[1.2] text-civic-burgundy"
                />
                <div>
                  <h3 className="font-editorial text-xl">
                    Recordar también es cuidar.
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-civic-muted">
                    Conservar una fotografía y su contexto ayuda a que esa
                    historia pueda seguir contándose.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Reference source={driebesSources.history}>
                Historia y vida local
              </Reference>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="driebes-questions-title"
        className="mx-auto grid max-w-[1320px] gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16 lg:px-12"
      >
        <div>
          <p className={label}>Para seguir mirando</p>
          <h2
            id="driebes-questions-title"
            className="mb-0 mt-4 font-editorial text-3xl leading-tight sm:text-4xl"
          >
            Toda historia
            <br />
            <span className="italic text-civic-burgundy">abre preguntas.</span>
          </h2>
        </div>
        <div className="border-t border-civic-line">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group border-b border-civic-line"
            >
              <summary
                className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 font-editorial text-xl [&::-webkit-details-marker]:hidden ${focus}`}
              >
                {item.question}
                <FiPlus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-civic-burgundy group-open:rotate-45 motion-safe:transition-transform"
                />
              </summary>
              <p className="max-w-2xl pb-3 text-sm leading-7 text-civic-muted">
                {item.answer}
              </p>
              <div className="pb-4">
                <Reference source={item.source}>Consultar la fuente</Reference>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="driebes-caraca-title"
        className="bg-civic-forest text-white"
      >
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 px-6 py-12 sm:px-10 sm:py-16 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-civic-sand">
              <LuLandmark aria-hidden="true" className="size-5 stroke-[1.2]" />{" "}
              El viaje continúa
            </p>
            <h2
              id="driebes-caraca-title"
              className="mb-0 mt-4 font-editorial text-3xl leading-tight sm:text-4xl"
            >
              Bajo la tierra,
              <br />
              <span className="italic text-civic-sand">
                otra ciudad te espera.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/75">
              Explora las calles, las termas y los hallazgos de Caraca.
            </p>
          </div>
          <Link
            to="/historia/caraca"
            className="inline-flex min-h-12 w-fit shrink-0 items-center gap-8 bg-civic-paper px-6 py-4 text-xs font-semibold text-civic-forest hover:bg-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
          >
            Descubrir Caraca{" "}
            <FiArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="driebes-sources-title"
        className="mx-auto max-w-[1320px] px-6 py-12 sm:px-10 sm:py-16 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-6 border-b border-civic-line pb-8 sm:flex-row sm:items-end">
          <div>
            <p className={label}>La historia se construye entre todos</p>
            <h2
              id="driebes-sources-title"
              className="mb-0 mt-4 font-editorial text-3xl leading-tight"
            >
              ¿Reconoces una historia?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-civic-muted">
              Si puedes aportar contexto a una fotografía o a un recuerdo del
              pueblo, ponte en contacto con el Ayuntamiento.
            </p>
          </div>
          <Link
            to="/contacto"
            className={`inline-flex min-h-11 w-fit shrink-0 items-center gap-4 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy ${focus}`}
          >
            Contactar con el Ayuntamiento <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <details className="group mt-5">
          <summary
            className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 text-xs font-semibold text-civic-muted [&::-webkit-details-marker]:hidden ${focus}`}
          >
            Fuentes para conocer mejor Driebes
            <FiPlus
              aria-hidden="true"
              className="size-4 shrink-0 group-open:rotate-45 motion-safe:transition-transform"
            />
          </summary>
          <ul className="mt-3 grid gap-x-10 gap-y-3 pb-5 sm:grid-cols-2">
            {Object.values(driebesSources).map((source) => (
              <li key={source.url} className="border-t border-civic-line py-3">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 items-center gap-3 text-xs leading-6 text-civic-burgundy underline underline-offset-4 ${focus}`}
                >
                  {source.title}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0"
                  />
                </a>
                <p className="mt-1 text-[10px] leading-5 text-civic-muted">
                  {source.publisher}
                </p>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}
