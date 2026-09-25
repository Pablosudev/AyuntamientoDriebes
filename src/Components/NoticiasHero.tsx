import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import { mediaUrl } from "../data/api";
import {
  excerpt,
  formatNewsDate,
  relativeNewsLabel,
} from "../data/noticias";
import type { NewsItem } from "../data/noticias";

type NoticiasHeroProps = {
  latest: NewsItem | null;
  isLoading: boolean;
  hasError: boolean;
};

function LatestNews({ news }: { news: NewsItem }) {
  const relative = relativeNewsLabel(news.uploadDate);

  return (
    <article
      aria-labelledby="latest-news-title"
      className="relative isolate overflow-hidden bg-civic-burgundy text-white wrap-anywhere"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 bottom-0 -z-10 font-editorial text-[17rem] leading-none text-white/[0.035]"
      >
        D.
      </span>
      <div className="p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium text-white/80">
          <span className="border border-white/35 px-2.5 py-1">
            Lo último
          </span>
          {relative && <span>{relative}</span>}
          <time dateTime={news.uploadDate}>
            {formatNewsDate(news.uploadDate)}
          </time>
        </div>
        <h2
          id="latest-news-title"
          className="mb-0 mt-9 max-w-xl font-editorial text-3xl leading-[1.16] tracking-[-0.02em] sm:text-4xl"
        >
          {news.title}
        </h2>
        <p className="mt-5 max-w-md whitespace-pre-line text-sm leading-7 text-white/80">
          {excerpt(news.description, 180)}
        </p>
        <a
          href={`#noticia-${news.id}`}
          className="mt-6 inline-flex min-h-12 items-center gap-4 border-t border-white/25 pt-2 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Leer la noticia{" "}
          <FiArrowDown aria-hidden="true" className="size-4" />
        </a>
      </div>
      {news.image && (
        <div className="flex justify-center border-t border-white/20 bg-civic-paper p-4">
          <img
            src={mediaUrl(news.image)}
            alt={`Imagen de la noticia ${news.title}`}
            fetchPriority="high"
            className="max-h-44 w-auto max-w-full object-contain"
          />
        </div>
      )}
    </article>
  );
}

export default function NoticiasHero({
  latest,
  isLoading,
  hasError,
}: NoticiasHeroProps) {
  return (
    <section
      aria-labelledby="noticias-title"
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
              Noticias
            </span>
          </nav>
          <p className="hidden sm:block">Información municipal</p>
        </div>

        <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="noticias-hero-copy">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-civic-burgundy"
              />
              El tablón de nuestro pueblo
            </p>
            <h1
              id="noticias-title"
              className="font-editorial text-[clamp(4.5rem,9vw,7rem)] leading-[0.9] tracking-[-0.065em] text-civic-burgundy"
            >
              Noticias<span className="text-civic-gold">.</span>
            </h1>
            <p className="mt-7 font-editorial text-[clamp(1.5rem,2.4vw,2rem)] italic leading-[1.2]">
              La vida sigue.
              <br />
              <span className="text-civic-burgundy">Aquí te la contamos.</span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Avisos, novedades y comunicados del Ayuntamiento, reunidos en un
              solo lugar y ordenados por fecha.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#noticias"
                className="inline-flex min-h-12 items-center gap-5 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                Ver todas las noticias{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#informado"
                className="inline-flex min-h-12 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                Mantente informado{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 size-16 border-r border-t border-civic-gold/70 sm:-right-5 sm:-top-5 sm:size-24"
            />
            {isLoading ? (
              <div
                role="status"
                className="relative border border-civic-line bg-civic-white p-7 sm:p-10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
                  Lo último
                </p>
                <p className="mt-5 font-editorial text-2xl text-civic-muted">
                  Cargando la última noticia…
                </p>
                <div
                  aria-hidden="true"
                  className="mt-6 space-y-3 motion-safe:animate-pulse"
                >
                  <div className="h-3 w-3/4 bg-civic-stone/60" />
                  <div className="h-3 w-1/2 bg-civic-stone/60" />
                </div>
              </div>
            ) : latest ? (
              <LatestNews news={latest} />
            ) : (
              <figure className="relative max-w-[1440px]">
                <img
                  src="/img/driebes.jpg"
                  alt="La iglesia de la Asunción y los tejados de Driebes iluminados por la luz del atardecer"
                  width="1440"
                  height="685"
                  fetchPriority="high"
                  className="relative block h-auto w-full"
                />
                <figcaption className="relative -mt-10 ml-8 border border-civic-line bg-civic-white p-5 sm:ml-12 sm:p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-civic-burgundy">
                    Driebes, al día
                  </p>
                  <p className="mt-2 font-editorial text-2xl leading-tight">
                    {hasError
                      ? "Las noticias vuelven enseguida."
                      : "El tablón está en calma."}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-civic-muted">
                    {hasError
                      ? "Mientras tanto, consulta los tablones de anuncios del Ayuntamiento."
                      : "Todavía no hay noticias publicadas. Vuelve pronto."}
                  </p>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
