import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiMaximize2, FiX } from "react-icons/fi";
import { driebesArchive, driebesSources } from "../data/driebes";
import type { ArchivePhoto } from "../data/driebes";

const staticQuery = "(prefers-reduced-motion: reduce), (max-height: 700px)";
const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function DriebesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState<ArchivePhoto | null>(null);
  const [staticMode, setStaticMode] = useState(
    () => window.matchMedia(staticQuery).matches,
  );

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const card = cardRef.current;
    if (!section || !scene || !viewport || !track || !card) return;
    const media = window.matchMedia(staticQuery);
    let frame = 0;
    let visible = true;
    const paint = () => {
      frame = 0;
      if (media.matches) return;
      const progress = clamp(
        -section.getBoundingClientRect().top /
          Math.max(1, section.offsetHeight - scene.offsetHeight),
      );
      const start = (viewport.clientWidth - card.offsetWidth) / 2;
      const travel = (card.offsetWidth + 24) * (driebesArchive.length - 1);
      track.style.setProperty(
        "--driebes-track-x",
        `${start - progress * travel}px`,
      );
      setActive(Math.round(progress * (driebesArchive.length - 1)));
    };
    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(paint);
    };
    const onMediaChange = () => {
      viewport.scrollLeft = 0;
      setStaticMode(media.matches);
      if (media.matches) setActive(0);
      schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    });
    const resizeObserver = new ResizeObserver(schedule);
    observer.observe(section);
    resizeObserver.observe(scene);
    resizeObserver.observe(viewport);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", onMediaChange);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!photo) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [photo]);

  const goToPhoto = (index: number) => {
    if (staticMode) {
      viewportRef.current?.scrollTo({
        left: index * ((cardRef.current?.offsetWidth ?? 0) + 24),
        behavior: "instant",
      });
      setActive(index);
      return;
    }
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;
    window.scrollTo({
      top:
        window.scrollY +
        section.getBoundingClientRect().top +
        (section.offsetHeight - scene.offsetHeight) *
          (index / (driebesArchive.length - 1)),
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="driebes-history-title"
      className={`${staticMode ? "" : "driebes-journey"} relative bg-[#252d28] text-white`}
    >
      <div
        ref={sceneRef}
        className={`${staticMode ? "relative" : "driebes-scene sticky top-0"} isolate flex flex-col overflow-clip pb-5 sm:pb-7`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[35%] -z-10 h-px bg-civic-sand/10"
        />
        <div className="mx-auto w-full max-w-[1320px] px-6 pt-4 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between gap-5 text-[11px]">
            <nav
              aria-label="Ruta de navegación"
              className="flex items-center gap-2 text-white/70"
            >
              <Link
                to="/"
                className="py-2 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-civic-sand">
                Historia de Driebes
              </span>
            </nav>
            <a
              href="#relato-driebes"
              className="inline-flex min-h-11 items-center gap-2 border-b border-white/35 text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Ir al relato <FiArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col justify-between gap-4 pb-5 pt-4 sm:flex-row sm:items-end sm:pb-7 sm:pt-5">
            <div>
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-civic-sand sm:text-[10px]">
                Álbum de un pueblo · Alcarria, Guadalajara
              </p>
              <h1
                id="driebes-history-title"
                className="font-editorial text-[clamp(4.5rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.055em]"
              >
                Driebes<span className="text-civic-sand">.</span>
              </h1>
            </div>
            <p className="max-w-sm font-editorial text-xl italic leading-tight text-civic-sand sm:pb-1 sm:text-3xl">
              Un pueblo.
              <br className="hidden sm:block" /> Todas nuestras historias.
            </p>
          </div>
        </div>

        <div
          ref={viewportRef}
          onScroll={(event) => {
            if (!staticMode || !cardRef.current) return;
            setActive(
              Math.min(
                driebesArchive.length - 1,
                Math.round(
                  event.currentTarget.scrollLeft /
                    (cardRef.current.offsetWidth + 24),
                ),
              ),
            );
          }}
          role="region"
          aria-label="Álbum de fotografías históricas de Driebes"
          tabIndex={staticMode ? 0 : undefined}
          className={`${staticMode ? "overflow-x-auto px-6" : "overflow-clip"} my-auto w-full py-3 [scrollbar-color:var(--color-civic-sand)_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-sand`}
        >
          <div
            ref={trackRef}
            className={`${staticMode ? "" : "driebes-photo-track"} flex w-max gap-[24px]`}
          >
            {driebesArchive.map((item, index) => (
              <figure
                key={item.id}
                ref={index === 0 ? cardRef : undefined}
                inert={!staticMode && active !== index}
                className="w-[min(84vw,660px)] shrink-0 border border-civic-sand/30 bg-civic-paper p-3 text-civic-ink sm:p-4"
              >
                <div className="flex h-[clamp(160px,52vw,34svh)] items-center justify-center bg-[#e8e3d8] sm:h-[clamp(160px,34svh,360px)]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 pt-3">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-civic-muted">
                      0{index + 1} / {item.label}
                    </p>
                    <p className="mt-1 font-editorial text-base leading-tight sm:text-xl">
                      {item.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPhoto(item)}
                    aria-label={`Ampliar fotografía: ${item.label}`}
                    className="flex size-11 shrink-0 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-stone/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy"
                  >
                    <FiMaximize2 aria-hidden="true" className="size-4" />
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-4 w-full max-w-[1320px] px-6 sm:mt-5 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-4 border-t border-white/20 pt-4 sm:flex-row sm:items-center">
            <div
              className="flex gap-4 sm:gap-7"
              aria-label="Fotografías del álbum"
            >
              {driebesArchive.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToPhoto(index)}
                  aria-pressed={active === index}
                  className={`min-h-11 border-b-2 py-2 text-[10px] font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand sm:text-xs ${active === index ? "border-civic-sand text-civic-sand" : "border-transparent text-white/55 hover:text-white"}`}
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 font-editorial italic"
                  >
                    0{index + 1}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
            <p className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-white/55 lg:flex">
              <FiArrowDown aria-hidden="true" className="size-4" />
              {staticMode
                ? "Recorre el álbum"
                : "Desplázate para pasar las fotografías"}
            </p>
          </div>
          <p className="mt-3 text-[9px] leading-5 text-white/50">
            <a
              href={driebesSources.archive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 hover:text-white focus-visible:outline-2 focus-visible:outline-civic-sand"
            >
              Galería municipal de fotografías antiguas{" "}
              <FiArrowUpRight aria-hidden="true" className="inline size-3" />
            </a>
            <span className="hidden sm:inline">
              {" "}
              · Fechas y autorías no indicadas en la galería.
            </span>
          </p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="driebes-archive-photo-title"
        onClose={() => setPhoto(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPhoto(null);
        }}
        className="fixed inset-0 m-auto max-h-[94svh] w-[min(94vw,1100px)] max-w-none overflow-auto border border-civic-line bg-civic-paper p-5 text-civic-ink shadow-2xl backdrop:bg-black/85 sm:p-7"
      >
        {photo && (
          <>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-civic-burgundy">
                  Archivo fotográfico · {photo.label}
                </p>
                <h2
                  id="driebes-archive-photo-title"
                  className="mb-0 mt-2 font-editorial text-2xl"
                >
                  {photo.title}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setPhoto(null)}
                aria-label="Cerrar fotografía histórica"
                className="flex size-11 shrink-0 items-center justify-center border border-civic-line hover:bg-civic-stone/40 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                <FiX aria-hidden="true" className="size-5" />
              </button>
            </div>
            <img
              src={photo.image}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              style={{ maxWidth: photo.width }}
              className="mx-auto max-h-[62svh] w-full object-contain"
            />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-civic-muted">
              {photo.caption}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-[10px] leading-5 text-civic-muted">
              Fecha y autoría no indicadas.{" "}
              <a
                href={driebesSources.archive.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                Consultar la galería municipal ↗
              </a>
            </p>
          </>
        )}
      </dialog>
    </section>
  );
}
