import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { FiArrowUpRight, FiMaximize2, FiX } from "react-icons/fi";
import { caracaSources, citySpaces } from "../data/caraca";
import CaracaPlan from "./CaracaPlan";

export default function CaracaExplorer() {
  const [selected, setSelected] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const space = citySpaces[selected];
  const isPlan = space.id === "trazado";

  useEffect(() => {
    if (!isExpanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded]);

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % citySpaces.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + citySpaces.length) % citySpaces.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = citySpaces.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Espacios de Caraca"
        className="grid grid-cols-2 border-y border-white/25 sm:grid-cols-4"
      >
        {citySpaces.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={selected === index}
            aria-controls={`panel-${item.id}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => navigateTabs(event, index)}
            className={`flex min-h-16 items-center justify-between gap-3 border-b-2 px-4 py-4 text-left text-sm transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-civic-sand sm:px-5 ${selected === index ? "border-civic-sand bg-white/10 text-civic-sand" : "border-transparent text-white/75 hover:bg-white/5 hover:text-white"}`}
          >
            <span>{item.label}</span>
            <span
              aria-hidden="true"
              className="font-editorial text-xs italic opacity-65"
            >
              0{index + 1}
            </span>
          </button>
        ))}
      </div>

      {citySpaces.map((item, index) => (
        <div
          key={item.id}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={selected !== index}
          tabIndex={0}
          className="pt-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
        >
          {selected === index && (
            <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
              <figure className="min-w-0">
                {isPlan ? (
                  <CaracaPlan onExpand={() => setIsExpanded(true)} />
                ) : (
                  <div
                    className={`relative isolate overflow-hidden ${item.id === "foro" ? "bg-white" : "bg-civic-stone"}`}
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                      <img
                        key={item.image}
                        src={item.image}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        loading="lazy"
                        className={`caraca-image-enter h-full w-full ${item.id === "foro" ? "object-contain" : "object-cover object-top"}`}
                      />
                      <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        aria-label={`Ampliar imagen: ${item.label}`}
                        className="absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 border border-white/40 bg-civic-forest/95 px-4 py-2 text-xs text-white hover:bg-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <FiMaximize2 aria-hidden="true" /> Ampliar
                      </button>
                    </div>
                  </div>
                )}
                <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[10px] leading-5 text-white/65">
                  <span>{item.kind}</span>
                  <a
                    href={caracaSources.city.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    {item.credit} ↗
                  </a>
                </figcaption>
              </figure>
              <div className="lg:py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-sand">
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 font-editorial text-3xl leading-[1.13] tracking-[-0.025em] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/85">
                  {item.description}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.detail}
                </p>
                <div className="mt-7 border-t border-white/20 pt-5">
                  <p className="font-editorial text-3xl text-civic-sand">
                    {item.fact}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-white/65">
                    {item.factLabel}
                  </p>
                </div>
                <a
                  href={item.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-sand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
                >
                  Consultar la investigación{" "}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      <dialog
        ref={dialogRef}
        aria-labelledby="caraca-image-title"
        onClose={() => setIsExpanded(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsExpanded(false);
        }}
        className="fixed inset-0 m-auto max-h-[94svh] w-[min(94vw,1400px)] max-w-none overflow-auto border border-white/20 bg-civic-forest p-0 text-white shadow-2xl backdrop:bg-black/80"
      >
        {isExpanded && (
          <div className="p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="caraca-image-title"
                className="m-0 font-editorial text-2xl"
              >
                {space.label}
              </h2>
              <button
                type="button"
                autoFocus
                onClick={() => setIsExpanded(false)}
                aria-label="Cerrar imagen"
                className="flex size-11 shrink-0 items-center justify-center border border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-civic-sand"
              >
                <FiX aria-hidden="true" className="size-5" />
              </button>
            </div>
            <img
              src={space.image}
              alt={space.alt}
              width={space.width}
              height={space.height}
              className="max-h-[72svh] w-full object-contain"
            />
            <p className="mt-4 text-xs leading-6 text-white/75">
              {space.kind} · {space.credit}. Fuente: Portal de Cultura de
              Castilla-La Mancha, 9 de febrero de 2023.
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
}
