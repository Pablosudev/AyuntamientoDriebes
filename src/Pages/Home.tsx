import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { LuCompass, LuLandmark } from "react-icons/lu";
import HomeHero from "../Components/HomeHero";
import HomeAccess from "../Components/HomeAccess";
import HomeNews from "../Components/HomeNews";
import { contact } from "../data/contacto";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const stories = [
  {
    number: "01",
    title: "La memoria de nuestras calles.",
    category: "Nuestra historia",
    description: "Un pueblo contado por quienes lo han vivido.",
    image: "/img/driebesHistoria.jpg",
    alt: "Fotografía histórica de una calle de Driebes, con vecinos y un niño en bicicleta",
    width: 1060,
    height: 678,
    to: "/historia",
    imageClass: "grayscale object-left",
  },
  {
    number: "02",
    title: "El arte también sale a la calle.",
    category: "Vida en el pueblo",
    description: "Encuentros, cultura y nuevas formas de compartir.",
    image: "/img/grafitiDriebes.jpg",
    alt: "Mural urbano con el nombre de Driebes y una figura de temática romana",
    width: 880,
    height: 495,
    to: "/eventos",
    imageClass: "object-center",
  },
];

export default function Home() {
  return (
    <div className="bg-civic-paper text-civic-ink">
      <HomeHero />
      <HomeAccess />

      <HomeNews />

      <section
        id="descubre-driebes"
        aria-labelledby="caraca-home-title"
        className="scroll-mt-6 bg-civic-forest text-white"
      >
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative isolate overflow-hidden px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-48 -left-48 -z-10 size-[650px] rounded-full border border-white/[0.07] before:absolute before:inset-12 before:rounded-full before:border before:border-white/[0.07] after:absolute after:inset-24 after:rounded-full after:border after:border-white/[0.07]"
            />
            <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-civic-sand">
              <LuLandmark aria-hidden="true" className="size-5 stroke-1" />{" "}
              Nuestro gran viaje al pasado
            </p>
            <h2
              id="caraca-home-title"
              className="mb-0 mt-8 font-editorial text-[clamp(4.2rem,7.5vw,7rem)] leading-[0.95] tracking-[-0.045em]"
            >
              Caraca<span className="text-civic-sand">.</span>
            </h2>
            <p className="mt-5 max-w-md font-editorial text-3xl italic leading-tight text-civic-sand sm:text-4xl">
              La historia estaba
              <br />
              bajo nuestros pies.
            </p>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/80">
              En el Cerro de la Virgen de la Muela, la arqueología está
              recuperando una ciudad romana. Explora sus calles, acércate a sus
              hallazgos y descubre el patrimonio que compartimos.
            </p>
            <Link
              to="/historia/caraca"
              className="group mt-9 inline-flex min-h-12 items-center gap-7 bg-civic-paper px-6 py-3 text-xs font-semibold text-civic-forest hover:bg-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
            >
              Viaja a Caraca{" "}
              <FiArrowUpRight
                aria-hidden="true"
                className="size-5 motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
              />
            </Link>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6 text-xs text-white/70">
              <span>
                <span className="mb-1 block font-editorial text-2xl text-civic-sand">
                  Siglos I–II
                </span>
                Su esplendor romano
              </span>
              <span>
                <span className="mb-1 block font-editorial text-2xl text-civic-sand">
                  BIC · 2024
                </span>
                Un patrimonio protegido
              </span>
            </div>
          </div>
          <figure className="group relative min-h-[380px] overflow-hidden bg-civic-stone sm:min-h-[480px] lg:min-h-full">
            <img
              src="/img/caraca/termas.jpg"
              alt="Restos excavados de las termas públicas de Caraca, con muros y estancias de piedra"
              width="1920"
              height="1139"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[38%_center] motion-safe:transition-transform motion-safe:duration-1000 motion-safe:group-hover:scale-[1.035]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#14261f]/90 via-transparent to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-6 border border-white/30 sm:inset-9"
            />
            <figcaption className="absolute inset-x-10 bottom-10 sm:inset-x-14 sm:bottom-14">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-civic-sand">
                No hace falta imaginarlo todo
              </p>
              <p className="mt-3 max-w-xs font-editorial text-3xl leading-tight">
                Estas huellas
                <br />
                son reales.
              </p>
              <a
                href="https://cultura.castillalamancha.es/culturaenredclm/como-era-caraca-la-ciudad-romana-encontrada-en-driebes-guadalajara"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[10px] leading-5 text-white/80 underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-white"
              >
                Fotografía: Equipo Arqueológico Caraca ↗
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="village-stories-title"
        className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={label}>Mucho más que un lugar en el mapa</p>
            <h2
              id="village-stories-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Driebes se vive.
              <br />
              <span className="italic text-civic-burgundy">
                Driebes se comparte.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            En las historias de nuestros mayores, en el arte de nuestras calles
            y en cada encuentro. Hay muchas maneras de formar parte.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          {stories.map((story) => (
            <Link
              key={story.to}
              to={story.to}
              className={`group block ${focus}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-civic-stone sm:aspect-[3/2]">
                <img
                  src={story.image}
                  alt={story.alt}
                  width={story.width}
                  height={story.height}
                  loading="lazy"
                  className={`h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04] ${story.imageClass}`}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-full bg-civic-paper font-editorial text-sm italic text-civic-burgundy"
                >
                  {story.number}
                </span>
                <span className="absolute bottom-5 right-5 flex size-12 items-center justify-center bg-civic-paper text-civic-burgundy transition-colors group-hover:bg-civic-burgundy group-hover:text-white">
                  <FiArrowUpRight aria-hidden="true" className="size-5" />
                </span>
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-civic-burgundy">
                {story.category}
              </p>
              <h3 className="mt-3 font-editorial text-2xl leading-tight sm:text-3xl">
                {story.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-civic-muted">
                {story.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-civic-line pt-7 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 text-xs leading-6 text-civic-muted">
            <LuCompass
              aria-hidden="true"
              className="size-5 shrink-0 stroke-1 text-civic-burgundy"
            />{" "}
            Y más allá de sus calles, el paisaje de la Alcarria.
          </p>
          <Link
            to="/turismo"
            className={`inline-flex min-h-11 items-center gap-5 text-xs font-semibold text-civic-burgundy ${focus}`}
          >
            Descubre el entorno <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="relative isolate overflow-hidden border-y border-civic-line bg-civic-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-10 -z-10 font-editorial text-[clamp(10rem,24vw,25rem)] leading-none tracking-[-0.06em] text-civic-burgundy/[0.035]"
        >
          Hola.
        </span>
        <div className="mx-auto grid max-w-[1320px] gap-9 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-[1fr_0.8fr] md:items-center lg:px-12">
          <div>
            <p className={label}>Atención ciudadana</p>
            <h2
              id="contact-title"
              className="mb-0 mt-4 font-editorial text-4xl tracking-[-0.025em] sm:text-5xl"
            >
              Hablemos.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Una duda, una gestión, una propuesta. Al otro lado hay personas
              dispuestas a ayudarte.
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
              Ayuntamiento de Driebes
            </p>
            <Link
              to="/contacto"
              className={`mt-5 inline-flex min-h-11 items-center gap-5 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy ${focus}`}
            >
              Cuéntanos en qué podemos ayudarte{" "}
              <FiArrowUpRight aria-hidden="true" className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
