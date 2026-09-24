import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiMaximize2, FiX } from "react-icons/fi";

const photoSource = "https://driebes.weebly.com/";
const photo = "/img/home/driebes-panoramica-oficial.png";
const photoAlt =
  "Panorámica de Driebes desde la ladera, con la iglesia, las casas de tejados rojizos y la carretera de acceso al pueblo";

function PhotoCredit() {
  return (
    <a
      href={photoSource}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-3 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      Fotografía de la web municipal ↗
    </a>
  );
}

export default function HomeHero() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  return (
    <>
      <section
        aria-labelledby="home-title"
        className="border-b border-civic-line bg-civic-paper text-civic-ink"
      >
        <div className="mx-auto max-w-[1088px] px-6 pt-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-civic-line pb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-civic-muted">
            <p>Alcarria · Guadalajara</p>
            <p className="hidden sm:block">Tu pueblo. Tu Ayuntamiento.</p>
          </div>
          <div className="home-hero-copy grid gap-6 pb-8 pt-8 sm:gap-8 sm:pb-10 sm:pt-10 md:grid-cols-2 md:items-end lg:gap-12">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-civic-burgundy"
                />
                Bienvenido a casa
              </p>
              <h1
                id="home-title"
                className="font-editorial text-[clamp(5.25rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.065em] text-civic-burgundy"
              >
                Driebes<span className="text-civic-gold">.</span>
              </h1>
            </div>
            <div>
              <p className="font-editorial text-[clamp(1.65rem,2.6vw,2.2rem)] italic leading-[1.2]">
                Lo que nos une.
                <br />
                <span className="text-civic-burgundy">
                  Lo que nos hace volver.
                </span>
              </p>
              <p className="mt-4 max-w-[25rem] text-sm leading-7 text-civic-muted">
                La vida de nuestro pueblo, la historia que compartimos y un
                Ayuntamiento cerca de ti.
              </p>
            </div>
          </div>

          <figure className="border border-civic-line bg-civic-white">
            <img
              src={photo}
              width="960"
              height="300"
              alt={photoAlt}
              fetchPriority="high"
              className="block h-auto w-full"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-civic-forest">
                  Driebes, de un vistazo
                </p>
                <p className="mt-1 text-[10px] leading-5 text-civic-muted">
                  <PhotoCredit />
                </p>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex min-h-11 items-center gap-3 border border-civic-line px-4 py-2 text-xs font-semibold text-civic-forest hover:border-civic-forest hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-forest"
              >
                Mirar de cerca{" "}
                <FiMaximize2 aria-hidden="true" className="size-4" />
              </button>
            </figcaption>
          </figure>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5 py-6 sm:py-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-6">
              <a
                href="#a-tu-servicio"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-civic-burgundy px-4 py-3 text-[11px] font-semibold text-white hover:bg-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy sm:gap-5 sm:px-5 sm:text-xs"
              >
                Tu Ayuntamiento{" "}
                <FiArrowDown aria-hidden="true" className="size-4" />
              </a>
              <Link
                to="/turismo"
                className="inline-flex min-h-12 items-center gap-2 border-b border-civic-burgundy text-[11px] font-semibold text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy sm:gap-3 sm:text-xs"
              >
                Ven a conocernos{" "}
                <FiArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <a
              href="#descubre-driebes"
              className="inline-flex min-h-11 items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
            >
              Mucho por descubrir{" "}
              <FiArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>
      <dialog
        ref={dialogRef}
        aria-labelledby="home-photo-title"
        onClose={() => setExpanded(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setExpanded(false);
        }}
        className="fixed inset-0 m-auto max-h-[94svh] w-[min(94vw,1024px)] max-w-none overflow-auto border border-white/20 bg-civic-forest p-4 text-white shadow-2xl backdrop:bg-black/85 sm:p-6"
      >
        {expanded && (
          <>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-civic-sand">
                  Nuestro pueblo
                </p>
                <h2
                  id="home-photo-title"
                  className="mb-0 mt-2 font-editorial text-2xl"
                >
                  Driebes, de un vistazo.
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setExpanded(false)}
                aria-label="Cerrar fotografía"
                className="flex size-11 shrink-0 items-center justify-center border border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-civic-sand"
              >
                <FiX aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div
              role="region"
              aria-label="Panorámica ampliada de Driebes; desplázate horizontalmente para recorrerla"
              tabIndex={0}
              className="overflow-x-auto overscroll-x-contain border border-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
            >
              <img
                src={photo}
                alt={photoAlt}
                width="960"
                height="300"
                className="mx-auto block h-auto w-[960px] max-w-none"
              />
            </div>
            <p className="mt-4 text-xs leading-6 text-white/75">
              <span className="mb-2 block">
                Desliza o usa las flechas del teclado para recorrer la
                fotografía a tamaño completo.
              </span>
              <PhotoCredit />
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
