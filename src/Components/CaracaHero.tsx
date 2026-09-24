import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const stops = [
  { label: "Imaginar", position: 0 },
  { label: "Acercarse", position: 0.45 },
  { label: "Descubrir", position: 0.98 },
];
const staticSceneQuery =
  "(prefers-reduced-motion: reduce), (max-height: 620px)";
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const fade = (start: number, end: number, value: number) => {
  const t = clamp((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

export default function CaracaHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;

    const media = window.matchMedia(staticSceneQuery);
    let frame = 0;
    let visible = true;
    let previousProgress = -1;

    // Only paint transforms and opacity; the rest of the page does not rerender on scroll.
    const paint = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const distance = section.offsetHeight - scene.offsetHeight;
      const progress = media.matches
        ? 0
        : clamp(-bounds.top / Math.max(1, distance));
      if (progress === previousProgress) return;
      previousProgress = progress;

      const values = {
        "--caraca-scale": 1 + progress * 0.28,
        "--caraca-pan": `${progress * -3}%`,
        "--caraca-intro": 1 - fade(0.04, 0.23, progress),
        "--caraca-intro-y": `${-fade(0.04, 0.23, progress) * 48}px`,
        "--caraca-middle":
          fade(0.25, 0.36, progress) * (1 - fade(0.55, 0.66, progress)),
        "--caraca-middle-y": `${(1 - fade(0.25, 0.36, progress)) * 32}px`,
        "--caraca-ruins": fade(0.62, 0.83, progress),
        "--caraca-ruins-scale": 1.12 - fade(0.62, 1, progress) * 0.12,
        "--caraca-final": fade(0.79, 0.92, progress),
        "--caraca-final-y": `${(1 - fade(0.79, 0.92, progress)) * 24}px`,
        "--caraca-chapter-1": `${clamp(progress / 0.3) * 100}%`,
        "--caraca-chapter-2": `${clamp((progress - 0.3) / 0.38) * 100}%`,
        "--caraca-chapter-3": `${clamp((progress - 0.68) / 0.32) * 100}%`,
      };
      for (const [key, value] of Object.entries(values)) {
        scene.style.setProperty(key, String(value));
      }
      setStage(progress < 0.3 ? 0 : progress < 0.68 ? 1 : 2);
    };
    const schedule = () => {
      if (!frame && visible) frame = window.requestAnimationFrame(paint);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    });
    const resizeObserver = new ResizeObserver(schedule);
    observer.observe(section);
    resizeObserver.observe(section);
    resizeObserver.observe(scene);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    schedule();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  const goToStage = (position: number) => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;
    const top = window.scrollY + section.getBoundingClientRect().top;
    window.scrollTo({
      top: top + (section.offsetHeight - scene.offsetHeight) * position,
      behavior: window.matchMedia(staticSceneQuery).matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="caraca-title"
      className="caraca-journey relative bg-civic-forest text-white"
    >
      <div
        ref={sceneRef}
        className="caraca-scene sticky top-0 isolate overflow-clip"
      >
        <img
          src="/img/caraca/caraca-reconstruccion-v2.jpg"
          srcSet="/img/caraca/caraca-reconstruccion-v2-1280.jpg 1280w, /img/caraca/caraca-reconstruccion-v2.jpg 1672w"
          sizes="100vw"
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
          className="caraca-past absolute inset-0 -z-30 h-full w-full origin-[65%_40%] object-cover object-[65%_center]"
        />
        <div
          className="caraca-present pointer-events-none absolute inset-0 -z-20"
          aria-hidden="true"
        >
          <img
            src="/img/caraca/termas.jpg"
            alt=""
            width="1920"
            height="1139"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#14231d]/80 via-[#14231d]/30 to-[#14231d]/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#14231d]/95 via-transparent to-[#14231d]/30"
        />

        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-6 py-5 sm:px-10 sm:py-7 lg:px-16">
          <div className="flex items-center justify-between gap-5 text-[11px]">
            <nav
              aria-label="Ruta de navegación"
              className="flex flex-wrap items-center gap-2 text-white/80"
            >
              <Link
                to="/"
                className="py-2 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                to="/historia"
                className="py-2 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                Historia
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-civic-sand">
                Caraca
              </span>
            </nav>
            <a
              href="#descubrimiento"
              aria-label="Omitir introducción"
              className="caraca-skip inline-flex min-h-11 shrink-0 items-center gap-2 border-b border-white/40 text-white/85 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Omitir <span className="hidden sm:inline">introducción</span>{" "}
              <FiArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex flex-1 items-center py-8 sm:py-10">
            <div className="caraca-intro w-full">
              <p className="text-[10px] font-medium uppercase leading-5 tracking-[0.25em] text-civic-sand sm:text-xs">
                Driebes · Guadalajara · Hispania romana
              </p>
              <h1
                id="caraca-title"
                className="mt-6 font-editorial text-[clamp(4.5rem,13vw,11rem)] leading-[0.87] tracking-[-0.055em]"
              >
                Caraca<span className="text-civic-sand">.</span>
              </h1>
              <p className="mt-7 max-w-xl font-editorial text-[clamp(1.8rem,3.3vw,3rem)] italic leading-[1.15] text-civic-sand">
                La ciudad que volvió a la luz.
              </p>
              <p className="mt-5 hidden max-w-[25rem] text-sm leading-7 text-white/85 sm:block">
                Un cerro junto al Tajo. Dos mil años de historia. Un viaje de la
                ciudad que imaginamos a las huellas que podemos descubrir.
              </p>
              <p className="caraca-scroll-hint mt-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
                <FiArrowDown aria-hidden="true" className="size-4" /> Desplázate
                para viajar en el tiempo
              </p>
            </div>

            <div
              aria-hidden="true"
              className="caraca-middle pointer-events-none absolute inset-0 flex items-center"
            >
              <div className="max-w-[660px]">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-civic-sand sm:text-xs">
                  Siglos I–II d. C. / Una interpretación del pasado
                </p>
                <p className="mt-5 font-editorial text-[clamp(2.5rem,5.2vw,5rem)] leading-[1.03] tracking-[-0.035em]">
                  Calles que se cruzan.
                  <br />
                  <span className="italic text-civic-sand">
                    Vidas que se encuentran.
                  </span>
                </p>
                <p className="mt-6 max-w-sm text-sm leading-7 text-white/85">
                  El foro, las termas, las casas. Una pequeña ciudad romana
                  sobre el paisaje de la Alcarria.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="caraca-final pointer-events-none absolute inset-0 flex items-center"
            >
              <div className="max-w-[700px]">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-civic-sand sm:text-xs">
                  El yacimiento / Fotografía de las termas
                </p>
                <p className="mt-5 font-editorial text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.03] tracking-[-0.035em]">
                  El tiempo pasa.
                  <br />
                  <span className="italic text-civic-sand">
                    Las huellas permanecen.
                  </span>
                </p>
                <p className="mt-6 max-w-sm text-sm leading-7 text-white/85">
                  Aquí empieza la arqueología: en los restos reales que permiten
                  volver a contar su historia.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/30 pt-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div
                className="caraca-chapter-controls grid w-full max-w-md grid-cols-3 gap-4"
                aria-label="Momentos de la introducción"
              >
                {stops.map((stop, index) => (
                  <button
                    key={stop.label}
                    type="button"
                    onClick={() => goToStage(stop.position)}
                    aria-pressed={stage === index}
                    className={`group min-h-11 text-left text-[10px] uppercase tracking-[0.13em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${stage === index ? "text-civic-sand" : "text-white/65 hover:text-white"}`}
                  >
                    <span className="mr-2 font-editorial italic">
                      0{index + 1}
                    </span>
                    {stop.label}
                    <span className="relative mt-3 block h-px overflow-hidden bg-white/30">
                      <span
                        className="absolute inset-y-0 left-0 bg-civic-sand"
                        style={{
                          width: `var(--caraca-chapter-${index + 1}, 0%)`,
                        }}
                      />
                    </span>
                  </button>
                ))}
              </div>
              <a
                href="#explorar-caraca"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-6 bg-civic-paper px-5 py-3 text-xs font-semibold text-civic-forest hover:bg-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explora la ciudad{" "}
                <FiArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <p className="mt-4 text-[10px] leading-5 text-white/75">
              {stage < 2
                ? "Recreación interpretativa generada con IA a partir de referencias arqueológicas. No es una fotografía del yacimiento."
                : "De la recreación a las termas reales · Fotografía: Equipo Arqueológico Caraca, 2023."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
