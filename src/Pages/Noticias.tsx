import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCalendar, FiMessageCircle, FiPhone } from "react-icons/fi";
import NoticiasHero from "../Components/NoticiasHero";
import NoticiasList from "../Components/NoticiasList";
import { API_URL } from "../data/api";
import { byNewest } from "../data/noticias";
import type { NewsItem } from "../data/noticias";
import { contact } from "../data/contacto";

const label =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs";
const chapters = [
  { id: "noticias", label: "Todas las noticias" },
  { id: "informado", label: "Mantente informado" },
];
const channels = [
  {
    title: "Agenda de actividades",
    text: "Las próximas citas del municipio, ordenadas por fecha.",
    to: "/eventos",
    icon: FiCalendar,
  },
  {
    title: "Atención ciudadana",
    text: "Escribe al Ayuntamiento con tus dudas o propuestas.",
    to: "/contacto",
    icon: FiMessageCircle,
  },
];

export default function Noticias() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Noticias de Driebes: avisos y novedades | Ayuntamiento de Driebes";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setIsLoading(true);
      setError(null);

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

        setNews(data as NewsItem[]);
      } catch {
        if (!controller.signal.aborted) {
          setError(
            "Inténtalo de nuevo en unos instantes. Si el problema continúa, consulta los tablones de anuncios del Ayuntamiento.",
          );
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadNews();
    return () => controller.abort();
  }, [reload]);

  const latest = [...news].sort(byNewest)[0] ?? null;

  return (
    <div className="bg-civic-paper text-civic-ink">
      <NoticiasHero
        latest={latest}
        isLoading={isLoading}
        hasError={error !== null}
      />
      <nav
        aria-label="Secciones de noticias"
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
        id="noticias"
        aria-labelledby="news-list-title"
        className="mx-auto max-w-[1320px] scroll-mt-16 px-6 py-16 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className={label}>01 / Todas las noticias</p>
            <h2
              id="news-list-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Todo lo que pasa
              <br />
              <span className="italic text-civic-burgundy">
                en nuestro pueblo.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-civic-muted">
            Las noticias que publica el Ayuntamiento, de la más reciente a la
            más antigua. Busca por palabras para encontrar un aviso concreto.
          </p>
        </div>
        <NoticiasList
          news={news}
          isLoading={isLoading}
          error={error}
          onRetry={() => setReload((value) => value + 1)}
        />
      </section>

      <section
        id="informado"
        aria-labelledby="informado-title"
        className="relative isolate scroll-mt-16 overflow-hidden border-t border-civic-line bg-civic-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-10 -z-10 font-editorial text-[clamp(10rem,24vw,25rem)] leading-none tracking-[-0.06em] text-civic-burgundy/[0.035]"
        >
          Aviso.
        </span>
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className={label}>02 / Mantente informado</p>
            <h2
              id="informado-title"
              className="mb-0 mt-4 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl"
            >
              Que no se te
              <br />
              <span className="italic text-civic-burgundy">
                escape nada.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-civic-muted">
              Visita esta sección con regularidad o consulta los tablones de
              anuncios del Ayuntamiento. Si necesitas más información, estamos
              a tu disposición.
            </p>
            <a
              href={contact.phone.href}
              className="mt-7 inline-flex min-h-12 items-center gap-4 font-editorial text-3xl text-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
            >
              <FiPhone
                aria-hidden="true"
                className="size-5 shrink-0 stroke-[1.25]"
              />
              {contact.phone.label}
            </a>
          </div>
          <div className="grid gap-px overflow-hidden border border-civic-line bg-civic-line sm:grid-cols-2">
            {channels.map(({ title, text, to, icon: Icon }, index) => (
              <Link
                key={to}
                to={to}
                className="group flex flex-col bg-civic-white p-6 transition-colors hover:bg-civic-paper focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy sm:min-h-[210px]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <Icon
                    aria-hidden="true"
                    className="size-6 stroke-[1.25] text-civic-burgundy"
                  />
                  <span
                    aria-hidden="true"
                    className="font-editorial text-xs italic text-civic-muted"
                  >
                    0{index + 1}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-editorial text-xl leading-tight">
                    {title}
                  </h3>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-civic-burgundy motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-3 text-xs leading-6 text-civic-muted">
                  {text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
