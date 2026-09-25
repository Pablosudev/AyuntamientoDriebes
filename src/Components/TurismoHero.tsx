import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { turismoFestivities, turismoRoutes } from "../data/turismo";

const facts = [
  {
    value: `${turismoRoutes.length}`,
    unit: "caminos",
    label: "para recorrer el entorno a pie",
  },
  {
    value: "≈ 40",
    unit: "km",
    label: "de vía verde junto al antiguo canal",
  },
  {
    value: `${turismoFestivities.length}`,
    unit: "fiestas",
    label: "que marcan el calendario del pueblo",
  },
  {
    value: "BIC",
    unit: "desde 2024",
    label: "Caraca, un patrimonio protegido",
  },
];

export default function TurismoHero() {
  return (
    <section
      aria-labelledby="turismo-title"
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
              Turismo
            </span>
          </nav>
          <p className="hidden sm:block">Alcarria · Guadalajara</p>
        </div>

        <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="turismo-hero-copy">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-civic-burgundy"
              />
              Turismo en Driebes
            </p>
            <h1
              id="turismo-title"
              className="font-editorial text-[clamp(4.25rem,8vw,6.75rem)] leading-[0.9] tracking-[-0.06em] text-civic-burgundy"
            >
              Ven a
              <br />
              Driebes<span className="text-civic-gold">.</span>
            </h1>
            <p className="mt-7 font-editorial text-[clamp(1.5rem,2.4vw,2rem)] italic leading-[1.2]">
              Piedra, campo y cielo abierto.
              <br />
              <span className="text-civic-burgundy">
                Para mirarlo sin prisa.
              </span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Patrimonio en sus calles, caminos hacia el Tajo y una ciudad
              romana bajo el cerro. Todo lo que necesitas para preparar tu
              visita.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#que-ver"
                className="inline-flex min-h-12 items-center gap-5 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                Empieza el recorrido{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
              <Link
                to="/historia/caraca"
                className="inline-flex min-h-12 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                Viaja a Caraca{" "}
                <FiArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>

          <figure className="relative min-w-0 max-w-[823px]">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 size-16 border-r border-t border-civic-gold/70 sm:-right-5 sm:-top-5 sm:size-24"
            />
            <img
              src="/img/hermita.jpg"
              alt="Ruinas de piedra de una antigua ermita entre campos de cereal, a contraluz bajo un cielo de nubes al atardecer"
              width="823"
              height="463"
              fetchPriority="high"
              className="relative block h-auto w-full"
            />
            <figcaption className="relative -mt-10 ml-8 border border-civic-line bg-civic-white p-5 sm:ml-12 sm:p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-civic-burgundy">
                Un paisaje para caminar
              </p>
              <p className="mt-2 font-editorial text-2xl leading-tight">
                La Alcarria, a tu ritmo.
              </p>
              <p className="mt-2 text-xs leading-6 text-civic-muted">
                Campos de cereal, cerros y el valle del Tajo.
              </p>
            </figcaption>
          </figure>
        </div>

        <dl
          aria-label="Driebes en cifras"
          className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-civic-line py-7 lg:grid-cols-4"
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="flex flex-wrap items-baseline gap-2">
                <span className="font-editorial text-4xl leading-none tracking-[-0.03em] text-civic-burgundy">
                  {fact.value}
                </span>
                <span className="text-xs font-medium">{fact.unit}</span>
              </dt>
              <dd className="mt-2 text-xs leading-6 text-civic-muted">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
