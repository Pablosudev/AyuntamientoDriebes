import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
} from "react-icons/fi";
import { API_URL } from "../data/api";
import {
  byNewest,
  excerpt,
  formatShortNewsDate,
  relativeNewsLabel,
} from "../data/noticias";
import type { NewsItem } from "../data/noticias";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";
const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";

function NewsArticle({
  news,
  featured = false,
}: {
  news: NewsItem;
  featured?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const limit = featured ? 220 : 150;
  const isLong = news.description.trim().length > limit;

  return (
    <article
      className={`relative isolate flex flex-col overflow-hidden wrap-anywhere ${featured ? "bg-civic-burgundy p-7 text-white sm:p-10" : "border-t border-civic-line py-7 text-civic-ink first:pt-6"}`}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 bottom-0 -z-10 font-editorial text-[17rem] leading-none text-white/[0.035]"
        >
          D.
        </span>
      )}
      <div
        className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium ${featured ? "text-white/80" : "text-civic-muted"}`}
      >
        <span
          className={`border px-2.5 py-1 ${featured ? "border-white/35" : "border-civic-line text-civic-burgundy"}`}
        >
          {relativeNewsLabel(news.uploadDate) ?? "Noticia"}
        </span>
        <time dateTime={news.uploadDate}>
          {formatShortNewsDate(news.uploadDate)}
        </time>
      </div>
      <h3
        className={`font-editorial leading-[1.16] tracking-[-0.02em] ${featured ? "mt-9 max-w-xl text-3xl sm:text-4xl" : "mt-5 max-w-xl text-2xl"}`}
      >
        {news.title}
      </h3>
      <p
        id={`home-news-${news.id}`}
        className={`mt-5 whitespace-pre-line text-sm leading-7 ${featured ? "max-w-md flex-1 text-white/80" : "text-civic-muted"}`}
      >
        {isLong && !isOpen ? excerpt(news.description, limit) : news.description}
      </p>
      {isLong && (
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`home-news-${news.id}`}
          onClick={() => setIsOpen((value) => !value)}
          className={`mt-6 flex min-h-12 items-center justify-between gap-4 border-t pt-2 text-left text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${featured ? "border-white/25" : "border-civic-line"}`}
        >
          {isOpen ? "Cerrar comunicado" : "Leer comunicado"}
          <FiArrowDown
            aria-hidden="true"
            className={`size-4 motion-safe:transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </article>
  );
}

export default function HomeNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      try {
        const response = await fetch(`${API_URL}/news`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`La API respondió con el estado ${response.status}`);
        }
        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("La respuesta de noticias no es un listado");
        }
        setNews([...(data as NewsItem[])].sort(byNewest).slice(0, 3));
      } catch {
        if (!controller.signal.aborted) setHasError(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadNews();
    return () => controller.abort();
  }, []);

  return (
    <section
      aria-labelledby="news-title"
      className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className={label}>El tablón de nuestro pueblo</p>
          <h2
            id="news-title"
            className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
          >
            La vida sigue.
            <br />
            <span className="italic text-civic-burgundy">
              Aquí te la contamos.
            </span>
          </h2>
        </div>
        <Link
          to="/noticias"
          className={`inline-flex min-h-11 w-fit items-center gap-5 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark ${focus}`}
        >
          Todas las noticias{" "}
          <FiArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>

      {isLoading ? (
        <div
          role="status"
          className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12"
        >
          <span className="sr-only">Cargando las noticias…</span>
          <div
            aria-hidden="true"
            className="min-h-[320px] bg-civic-burgundy/90 motion-safe:animate-pulse"
          />
          <div aria-hidden="true" className="space-y-8 pt-6">
            {[0, 1].map((item) => (
              <div
                key={item}
                className="space-y-3 border-t border-civic-line pt-7 motion-safe:animate-pulse"
              >
                <div className="h-3 w-24 bg-civic-stone/60" />
                <div className="h-5 w-3/4 bg-civic-stone/60" />
                <div className="h-3 w-1/2 bg-civic-stone/60" />
              </div>
            ))}
          </div>
        </div>
      ) : hasError || news.length === 0 ? (
        <div className="mt-10 border border-civic-line bg-civic-white px-6 py-10 sm:px-10">
          <p className="font-editorial text-2xl">
            {hasError
              ? "No hemos podido cargar las noticias."
              : "Todavía no hay noticias publicadas."}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-civic-muted">
            {hasError
              ? "Inténtalo de nuevo en unos instantes o consulta los tablones de anuncios del Ayuntamiento."
              : "Vuelve pronto: el Ayuntamiento publica aquí sus avisos y novedades."}
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <NewsArticle news={news[0]} featured />
          <div className="flex flex-col justify-between">
            {news.slice(1).map((item) => (
              <NewsArticle key={item.id} news={item} />
            ))}
          </div>
        </div>
      )}

      <Link
        to="/eventos"
        className={`group mt-8 flex flex-col justify-between gap-5 border-y border-civic-line py-6 sm:flex-row sm:items-center ${focus}`}
      >
        <span className="flex items-center gap-5">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-civic-line text-civic-burgundy">
            <FiCalendar aria-hidden="true" className="size-5 stroke-[1.3]" />
          </span>
          <span>
            <span className="block font-editorial text-xl">
              Los mejores planes se comparten.
            </span>
            <span className="mt-1 block text-xs leading-6 text-civic-muted">
              Consulta las actividades y encuentros de Driebes.
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
    </section>
  );
}
