import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCalendar,
  FiChevronDown,
  FiCloud,
  FiDroplet,
  FiMessageCircle,
  FiPlus,
} from "react-icons/fi";
import { LuCompass, LuFootprints, LuLeaf, LuUtensils } from "react-icons/lu";
import TurismoCasaRural from "../Components/TurismoCasaRural";
import TurismoHero from "../Components/TurismoHero";
import TurismoRoutes from "../Components/TurismoRoutes";
import { turismoFestivities, turismoSources } from "../data/turismo";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const chapters = [
  { id: "que-ver", label: "Qué ver" },
  { id: "caminos", label: "Caminos" },
  { id: "comer-dormir", label: "Comer y dormir" },
  { id: "cuando-venir", label: "Cuándo venir" },
];
const highlights = [
  {
    number: "01",
    category: "Patrimonio · Siglo XVII",
    title: "La iglesia de la Asunción.",
    description:
      "Su torre dibuja el perfil del pueblo. La portada de piedra rojiza, bajo un tejaroz, invita a mirar de cerca.",
    image: "/img/driebes.jpg",
    alt: "La iglesia de la Asunción y los tejados de Driebes iluminados por la luz del atardecer",
    width: 1440,
    height: 685,
    to: "/historia",
    imageClass: "object-center",
  },
  {
    number: "02",
    category: "Yacimiento arqueológico · BIC",
    title: "Caraca, la ciudad romana.",
    description:
      "En el Cerro de la Virgen de la Muela, la arqueología recupera sus calles, sus termas y su foro.",
    image: "/img/caraca/termas.jpg",
    alt: "Restos excavados de las termas públicas de Caraca, con muros y estancias de piedra",
    width: 1920,
    height: 1139,
    to: "/historia/caraca",
    imageClass: "object-[38%_center]",
  },
];
const places = [
  {
    title: "La Plaza Mayor",
    category: "El punto de encuentro",
    text: "El corazón del pueblo. Aquí está el Ayuntamiento y aquí se reúne Driebes para celebrar.",
    source: {
      publisher: "Google Maps",
      url: "https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Driebes+Guadalajara",
    },
    linkLabel: "Ver en el mapa",
  },
  {
    title: "La Casa Grande",
    category: "La huella de la vida ganadera",
    text: "Vinculada a una familia de ganaderos, destaca por la altura de sus pisos, la proporción de sus ventanas y su rejería.",
    source: turismoSources.heritage,
    linkLabel: "Consultar la ficha municipal",
  },
  {
    title: "Las ermitas de la Muela",
    category: "Dos lugares, una devoción",
    text: "Las ruinas de la antigua ermita permanecen en el cerro. La nueva, de 2002, se levanta a orillas del Tajo y recibe cada mayo la romería.",
    source: turismoSources.monuments,
    linkLabel: "Consultar la ficha municipal",
  },
  {
    title: "La ermita del Cristo",
    category: "Una mirada al valle",
    text: "Sencilla, de sillarejo encalado y nave única, se asoma al valle desde el cerro del Cristo. En su altar, una talla del Cristo venerada desde antiguo.",
    source: turismoSources.monuments,
    linkLabel: "Consultar la ficha municipal",
  },
  {
    title: "La Fuentecilla",
    category: "Agua que nunca falta",
    text: "Al pie de un pinar, en el valle. Nunca se ha secado y su agua tiene fama de aliviar las molestias de los ojos. Desde 2009 tiene empedrado y asientos para descansar.",
    source: turismoSources.nature,
    linkLabel: "Espacios naturales del municipio",
  },
  {
    title: "La Fuente de las Mulas",
    category: "La bienvenida del pueblo",
    text: "A la entrada del pueblo, llegando desde Mondéjar. Su pilón de piedra tallada fue abrevadero y todavía hoy cumple esa función.",
    source: turismoSources.nature,
    linkLabel: "Espacios naturales del municipio",
  },
];
const tips = [
  { icon: LuFootprints, text: "Calzado cómodo y adecuado para caminar." },
  { icon: FiDroplet, text: "Agua y protección solar." },
  { icon: FiCloud, text: "Consulta el tiempo antes de salir." },
  { icon: LuLeaf, text: "Respeta la naturaleza y no dejes residuos." },
  { icon: FiMessageCircle, text: "Cuenta a alguien la ruta que vas a hacer." },
];
const restaurants = [
  {
    name: "Bar Restaurante Higuera",
    place: "Calle Mayor",
    text: "Comida casera en formato de raciones.",
    url: "https://barhigueradriebes.wixsite.com/barhiguera",
  },
  {
    name: "Casa Nadia",
    text: "Restaurante del pueblo. Consulta su oferta y sus horarios en su web antes de acercarte.",
    url: "https://www.casanadia.es/",
  },
  {
    name: "Taberna La Plaza",
    place: "Plaza Mayor",
    text: "Un lugar informal para tomar algo y compartir tapas o raciones, con amigos o en familia.",
  },
];
const questions = [
  {
    question: "¿Se puede visitar el yacimiento de Caraca?",
    answer:
      "Caraca es un yacimiento en investigación. Las visitas se organizan en jornadas concretas que anuncian el Ayuntamiento y el equipo arqueológico. Consulta las próximas fechas antes de desplazarte.",
  },
  {
    question: "¿Por qué algunas rutas indican «Consultar»?",
    answer:
      "Solo mostramos distancias y duraciones que podemos respaldar con una fuente. El resto está pendiente de confirmar: el Ayuntamiento puede orientarte sobre cada camino y su estado.",
  },
  {
    question: "¿Dónde puedo alojarme en el pueblo?",
    answer:
      "En la Casa Rural Caraca, con cinco habitaciones para familias o grupos. Consulta su disponibilidad a través del Ayuntamiento.",
  },
  {
    question: "¿Dónde me informo al llegar?",
    answer:
      "En el Ayuntamiento, en la Plaza Mayor: de lunes a viernes, de 9:00 a 14:00, y los sábados, de 9:00 a 13:00. También puedes llamar al 949 29 80 01.",
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

export default function Turismo() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Turismo en Driebes: qué ver, rutas y dónde dormir | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="bg-civic-paper text-civic-ink">
      <TurismoHero />
      <nav
        aria-label="Secciones de la página de turismo"
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
        id="que-ver"
        aria-labelledby="turismo-places-title"
        className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={label}>01 / Lugares con carácter</p>
            <h2
              id="turismo-places-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Un pueblo pequeño.
              <br />
              <span className="italic text-civic-burgundy">
                Mucho que descubrir.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            Una torre que se ve desde lejos, una fuente que nunca se ha secado y
            una ciudad romana bajo el cerro. Empieza por aquí.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          {highlights.map((highlight) => (
            <Link
              key={highlight.to}
              to={highlight.to}
              className={`group block ${focus}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-civic-stone sm:aspect-[3/2]">
                <img
                  src={highlight.image}
                  alt={highlight.alt}
                  width={highlight.width}
                  height={highlight.height}
                  loading="lazy"
                  className={`h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04] ${highlight.imageClass}`}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-full bg-civic-paper font-editorial text-sm italic text-civic-burgundy"
                >
                  {highlight.number}
                </span>
                <span className="absolute bottom-5 right-5 flex size-12 items-center justify-center bg-civic-paper text-civic-burgundy transition-colors group-hover:bg-civic-burgundy group-hover:text-white">
                  <FiArrowUpRight aria-hidden="true" className="size-5" />
                </span>
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-civic-burgundy">
                {highlight.category}
              </p>
              <h3 className="mt-3 font-editorial text-2xl leading-tight sm:text-3xl">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-civic-muted">
                {highlight.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <p className={label}>Más rincones para recorrer</p>
          <span aria-hidden="true" className="h-px flex-1 bg-civic-line" />
        </div>
        <div className="mt-6 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place, index) => (
            <article
              key={place.title}
              className="relative border-t border-civic-line py-7 before:absolute before:-top-[4px] before:left-0 before:size-[7px] before:rounded-full before:bg-civic-burgundy"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-editorial text-2xl leading-tight">
                  {place.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="font-editorial text-xl italic text-civic-gold"
                >
                  0{index + 3}
                </span>
              </div>
              <p className="mt-3 text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-civic-burgundy">
                {place.category}
              </p>
              <p className="mt-4 text-sm leading-7 text-civic-muted">
                {place.text}
              </p>
              <div className="mt-2">
                <Reference source={place.source}>{place.linkLabel}</Reference>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="caminos"
        aria-labelledby="turismo-routes-title"
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
                02 / Senderismo y naturaleza
              </p>
              <h2
                id="turismo-routes-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.1] tracking-[-0.025em] sm:text-5xl"
              >
                Caminos para leer
                <br />
                <span className="italic text-civic-sand">el paisaje.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/75">
              Hacia el Tajo, entre olivares o hasta la ciudad romana. Elige un
              camino y descubre Driebes a otro ritmo.
            </p>
          </div>
          <TurismoRoutes />
          <div className="mt-12 border-t border-white/20 pt-8">
            <h3 className="font-editorial text-2xl">
              Antes de ponerte en marcha.
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">
              {tips.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-xs leading-6 text-white/75"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 stroke-[1.2] text-civic-sand"
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="comer-dormir"
        aria-labelledby="turismo-food-title"
        className="scroll-mt-16 border-b border-civic-line bg-civic-white"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
          <div>
            <p className={label}>03 / Sabores y descanso</p>
            <h2
              id="turismo-food-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Sentarse a la mesa.
              <br />
              <span className="italic text-civic-burgundy">
                Y quedarse un poco más.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-civic-muted">
              Raciones caseras, tapas en la plaza y una casa rural en el pueblo
              para alargar la escapada.
            </p>
            <a
              href="#casa-rural"
              className={`mt-6 inline-flex min-h-11 items-center gap-4 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark ${focus}`}
            >
              Conoce la Casa Rural Caraca{" "}
              <FiArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy">
              <LuUtensils aria-hidden="true" className="size-4 stroke-[1.3]" />
              Bares y restaurantes
            </p>
            <ul className="mt-5 border-t border-civic-line">
              {restaurants.map((restaurant, index) => (
                <li
                  key={restaurant.name}
                  className="grid gap-x-6 gap-y-2 border-b border-civic-line py-6 sm:grid-cols-[2rem_1fr_auto] sm:items-start"
                >
                  <span
                    aria-hidden="true"
                    className="font-editorial text-sm italic text-civic-gold sm:pt-1.5"
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-editorial text-2xl leading-tight">
                      {restaurant.name}
                    </h3>
                    {restaurant.place && (
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-civic-burgundy">
                        {restaurant.place}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-7 text-civic-muted">
                      {restaurant.text}
                    </p>
                  </div>
                  {restaurant.url && (
                    <a
                      href={restaurant.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Web de ${restaurant.name}`}
                      className={`inline-flex min-h-11 w-fit items-center gap-2 text-[11px] font-medium text-civic-burgundy hover:underline ${focus}`}
                    >
                      Su web <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <Reference source={turismoSources.gastronomy}>
                Guía municipal de bares y restaurantes
              </Reference>
            </div>
          </div>
        </div>
      </section>

      <TurismoCasaRural />

      <section
        id="cuando-venir"
        aria-labelledby="turismo-calendar-title"
        className="scroll-mt-16 border-y border-civic-line bg-[#ece7dc]"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className={label}>04 / Cuándo venir</p>
              <h2
                id="turismo-calendar-title"
                className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
              >
                Cada estación
                <br />
                <span className="italic text-civic-burgundy">
                  tiene su fiesta.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-civic-muted">
              Del roscón de Reyes a la caldereta de San Miguel, el calendario de
              Driebes invita a volver. Las fechas pueden variar cada año.
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
          <div className="mt-4">
            <Reference source={turismoSources.festivities}>
              Fiestas y tradiciones, según la web municipal
            </Reference>
          </div>
          <Link
            to="/eventos"
            className={`group mt-8 flex flex-col justify-between gap-5 border-y border-civic-line py-6 sm:flex-row sm:items-center ${focus}`}
          >
            <span className="flex items-center gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-civic-line bg-civic-paper text-civic-burgundy">
                <FiCalendar
                  aria-hidden="true"
                  className="size-5 stroke-[1.3]"
                />
              </span>
              <span>
                <span className="block font-editorial text-xl">
                  ¿Qué hay estos días en Driebes?
                </span>
                <span className="mt-1 block text-xs leading-6 text-civic-muted">
                  Consulta las actividades y encuentros del municipio.
                </span>
              </span>
            </span>
            <span className="flex min-h-11 items-center gap-5 text-xs font-semibold text-civic-burgundy">
              Abrir la agenda{" "}
              <FiArrowUpRight
                aria-hidden="true"
                className="size-5 motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="turismo-faq-title"
        className="mx-auto grid max-w-[1320px] gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12"
      >
        <div>
          <p className={label}>Antes de venir</p>
          <h2
            id="turismo-faq-title"
            className="mb-0 mt-4 font-editorial text-3xl leading-tight sm:text-4xl"
          >
            Tu visita,
            <br />
            <span className="italic text-civic-burgundy">sin sorpresas.</span>
          </h2>
          <LuCompass
            aria-hidden="true"
            className="mt-7 hidden size-14 stroke-[0.7] text-civic-gold lg:block"
          />
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
              <p className="max-w-2xl pb-6 pr-4 text-sm leading-7 text-civic-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        aria-label="Fuentes y fotografías de esta página"
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
                Fuentes y fotografías de esta página
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
              <div>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-civic-burgundy">
                  Para preparar la visita
                </h2>
                <ul className="space-y-4">
                  {Object.values(turismoSources).map((source) => (
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
              </div>
              <div className="text-xs leading-7 text-civic-muted">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-civic-burgundy">
                  Mirar con rigor
                </h2>
                <p>
                  Las distancias y duraciones de las rutas solo se indican
                  cuando una fuente las respalda. La distancia hasta Caraca y
                  el tiempo a pie proceden del blog Caraca Nostra; los datos de
                  la vía verde, de la web municipal. Los datos marcados como
                  «Consultar» están pendientes de confirmar con el
                  Ayuntamiento.
                </p>
                <p className="mt-4">
                  La fotografía de las termas de Caraca es del Equipo
                  Arqueológico Caraca, publicada en el Portal de Cultura de
                  Castilla-La Mancha. Las fotografías de la portada, de la
                  iglesia y de la Casa Rural Caraca pertenecen a la colección
                  del proyecto.
                </p>
                <p className="mt-4">
                  Las fechas de las fiestas proceden de la web municipal y
                  pueden variar cada año. Consulta la agenda antes de venir.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <div className="border-t border-civic-line bg-civic-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <Link
            to="/historia"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-muted hover:text-civic-burgundy ${focus}`}
          >
            <FiArrowRight aria-hidden="true" className="rotate-180" />
            La historia de Driebes
          </Link>
          <Link
            to="/contacto"
            className={`inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-burgundy ${focus}`}
          >
            ¿Dudas? Habla con el Ayuntamiento{" "}
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
