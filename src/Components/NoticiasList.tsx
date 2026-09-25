import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiMaximize2,
  FiRefreshCw,
  FiSearch,
  FiX,
} from "react-icons/fi";
import { mediaUrl } from "../data/api";
import {
  byNewest,
  excerpt,
  formatNewsDate,
  formatShortNewsDate,
  matchesQuery,
  newsDateParts,
  relativeNewsLabel,
} from "../data/noticias";
import type { NewsItem } from "../data/noticias";

type NoticiasListProps = {
  news: NewsItem[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
};

const excerptLength = 280;
const hashId = () =>
  Number(/^#noticia-(\d+)$/.exec(window.location.hash)?.[1] ?? Number.NaN);

export default function NoticiasList({
  news,
  isLoading,
  error,
  onRetry,
}: NoticiasListProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number[]>(() => [hashId()]);
  const [expanded, setExpanded] = useState<NewsItem | null>(null);
  const isDialogOpen = expanded !== null;

  useEffect(() => {
    const openFromHash = () => {
      const id = hashId();
      if (!Number.isNaN(id))
        setOpen((current) => (current.includes(id) ? current : [...current, id]));
    };
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    if (news.length === 0) return;
    document
      .getElementById(`noticia-${hashId()}`)
      ?.scrollIntoView({ block: "start" });
  }, [news.length]);

  useEffect(() => {
    if (!isDialogOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isDialogOpen]);

  const results = news
    .filter((item) => matchesQuery(item, query))
    .sort(byNewest);
  const months = results.reduce<
    { key: string; label: string; news: NewsItem[] }[]
  >((groups, item) => {
    const parts = newsDateParts(item.uploadDate);
    const key = parts?.monthKey ?? "sin-fecha";
    const group = groups.find((entry) => entry.key === key);
    if (group) group.news.push(item);
    else
      groups.push({
        key,
        label: parts?.monthLabel ?? "Sin fecha",
        news: [item],
      });
    return groups;
  }, []);
  const toggle = (id: number) =>
    setOpen((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );

  if (isLoading) {
    return (
      <div
        role="status"
        className="mt-10 border border-civic-line bg-civic-white px-6 py-14 text-center"
      >
        <p className="font-editorial text-2xl text-civic-muted">
          Cargando las noticias…
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="mt-10 border border-civic-line border-l-2 border-l-civic-burgundy bg-civic-white px-6 py-10 sm:px-10"
      >
        <p className="font-editorial text-2xl">
          No hemos podido cargar las noticias.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-civic-muted">
          {error}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex min-h-12 items-center gap-4 bg-civic-burgundy px-5 py-3 text-xs font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
        >
          Reintentar <FiRefreshCw aria-hidden="true" className="size-4" />
        </button>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="mt-10 border border-civic-line bg-civic-white px-6 py-12 sm:px-10">
        <p className="font-editorial text-2xl">
          Todavía no hay noticias publicadas.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-civic-muted">
          Vuelve pronto: el Ayuntamiento publica aquí sus avisos y novedades.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col justify-between gap-4 border-b border-civic-line pb-5 sm:flex-row sm:items-end">
        <div className="w-full max-w-xl">
          <label
            htmlFor="news-search"
            className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted"
          >
            Buscar en las noticias
          </label>
          <div className="relative mt-3">
            <FiSearch
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-civic-muted"
            />
            <input
              id="news-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Por ejemplo: agua, obras, fiestas…"
              className="min-h-12 w-full border border-civic-line bg-civic-white pl-11 pr-4 text-sm text-civic-ink placeholder:text-civic-muted/80 focus:border-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy"
            />
          </div>
        </div>
        <p
          aria-live="polite"
          className="text-[10px] uppercase tracking-[0.15em] text-civic-muted"
        >
          {query.trim()
            ? results.length === 1
              ? "1 resultado"
              : `${results.length} resultados`
            : results.length === 1
              ? "1 noticia"
              : `${results.length} noticias`}
        </p>
      </div>

      {months.length === 0 ? (
        <div className="mt-8 border border-civic-line bg-civic-white px-6 py-12 sm:px-10">
          <p className="font-editorial text-2xl">
            Ninguna noticia coincide con «{query.trim()}».
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-civic-muted">
            Prueba con otras palabras o revisa cómo están escritas.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-5 inline-flex min-h-11 items-center gap-3 border-b border-civic-burgundy text-xs font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
          >
            Borrar la búsqueda <FiX aria-hidden="true" className="size-4" />
          </button>
        </div>
      ) : (
        months.map((month) => (
          <section
            key={month.key}
            aria-labelledby={`news-month-${month.key}`}
            className="mt-10"
          >
            <div className="flex items-baseline justify-between gap-4 border-b border-civic-ink/60 pb-3">
              <h3
                id={`news-month-${month.key}`}
                className="font-editorial text-2xl sm:text-3xl"
              >
                {month.label}
              </h3>
              <span className="font-editorial text-sm italic text-civic-muted">
                {month.news.length === 1
                  ? "1 noticia"
                  : `${month.news.length} noticias`}
              </span>
            </div>
            <ol>
              {month.news.map((item) => {
                const parts = newsDateParts(item.uploadDate);
                const relative = relativeNewsLabel(item.uploadDate);
                const isLong = item.description.trim().length > excerptLength;
                const isOpen = open.includes(item.id);
                return (
                  <li
                    key={item.id}
                    id={`noticia-${item.id}`}
                    className="grid scroll-mt-24 gap-5 wrap-anywhere border-b border-civic-line py-8 sm:grid-cols-[6.5rem_1fr] md:gap-8 lg:grid-cols-[6.5rem_1fr_16rem]"
                  >
                    <p className="flex items-baseline gap-3 sm:block">
                      <span className="font-editorial text-6xl leading-[0.85] tracking-[-0.04em] text-civic-burgundy">
                        {parts?.day ?? "—"}
                      </span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted sm:mt-3">
                        {parts ? `${parts.weekday} · ${parts.month}` : "Sin fecha"}
                      </span>
                      {relative && (
                        <span className="mt-3 inline-block border border-civic-line px-2 py-1 text-[10px] font-semibold text-civic-burgundy">
                          {relative}
                        </span>
                      )}
                    </p>
                    <article className="min-w-0">
                      <h4 className="font-editorial text-2xl leading-tight sm:text-3xl">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs text-civic-muted">
                        <time dateTime={item.uploadDate}>
                          {formatNewsDate(item.uploadDate)}
                        </time>
                      </p>
                      <p
                        id={`noticia-texto-${item.id}`}
                        className="mt-4 max-w-2xl whitespace-pre-line text-sm leading-7 text-civic-muted"
                      >
                        {isLong && !isOpen
                          ? excerpt(item.description, excerptLength)
                          : item.description}
                      </p>
                      {isLong && (
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`noticia-texto-${item.id}`}
                          onClick={() => toggle(item.id)}
                          className="mt-4 flex min-h-12 w-full max-w-2xl items-center justify-between gap-4 border-t border-civic-line pt-2 text-xs font-semibold text-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
                        >
                          {isOpen ? "Mostrar menos" : "Leer la noticia completa"}
                          <FiArrowDown
                            aria-hidden="true"
                            className={`size-4 motion-safe:transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </article>
                    {item.image && (
                      <button
                        type="button"
                        onClick={() => setExpanded(item)}
                        aria-label={`Ampliar imagen: ${item.title}`}
                        className="group relative flex h-44 items-center justify-center self-start border border-civic-line bg-civic-white p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy sm:col-start-2 lg:col-start-auto"
                      >
                        <img
                          src={mediaUrl(item.image)}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                        <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-civic-paper text-civic-burgundy transition-colors group-hover:bg-civic-burgundy group-hover:text-white">
                          <FiMaximize2 aria-hidden="true" className="size-4" />
                        </span>
                      </button>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="news-image-title"
        onClose={() => setExpanded(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setExpanded(null);
        }}
        className="fixed inset-0 m-auto max-h-[94svh] w-[min(94vw,1000px)] max-w-none overflow-auto border border-civic-line bg-civic-paper p-5 text-civic-ink shadow-2xl backdrop:bg-black/85 sm:p-7"
      >
        {expanded?.image && (
          <>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-civic-burgundy">
                  Noticia · {formatShortNewsDate(expanded.uploadDate)}
                </p>
                <h2
                  id="news-image-title"
                  className="mb-0 mt-2 font-editorial text-2xl wrap-anywhere"
                >
                  {expanded.title}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setExpanded(null)}
                aria-label="Cerrar imagen"
                className="flex size-11 shrink-0 items-center justify-center border border-civic-line hover:bg-civic-stone/40 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                <FiX aria-hidden="true" className="size-5" />
              </button>
            </div>
            <img
              src={mediaUrl(expanded.image)}
              alt={`Imagen de la noticia ${expanded.title}`}
              className="mx-auto max-h-[72svh] w-auto max-w-full object-contain"
            />
          </>
        )}
      </dialog>
    </div>
  );
}
