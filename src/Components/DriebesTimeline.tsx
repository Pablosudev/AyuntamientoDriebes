import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { driebesTimeline } from "../data/driebes";

export default function DriebesTimeline() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navigate = (event: KeyboardEvent<HTMLButtonElement>) => {
    let next: number;
    if (event.key === "ArrowRight")
      next = (selected + 1) % driebesTimeline.length;
    else if (event.key === "ArrowLeft")
      next = (selected - 1 + driebesTimeline.length) % driebesTimeline.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = driebesTimeline.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  };
  const step = (direction: number) => {
    const next = Math.max(
      0,
      Math.min(driebesTimeline.length - 1, selected + direction),
    );
    setSelected(next);
    tabRefs.current[next]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "instant",
    });
  };

  return (
    <div className="mt-10 border border-civic-line bg-civic-white">
      <div
        role="tablist"
        aria-label="Etapas de la historia de Driebes"
        className="flex overflow-x-auto border-b border-civic-line [scrollbar-color:var(--color-civic-stone)_transparent] [scrollbar-width:thin]"
      >
        {driebesTimeline.map((era, index) => (
          <button
            key={era.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`driebes-era-tab-${index}`}
            role="tab"
            type="button"
            aria-selected={selected === index}
            aria-controls={`driebes-era-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={navigate}
            className={`min-h-20 min-w-[145px] flex-1 scroll-mt-24 border-b-2 px-5 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy ${selected === index ? "border-civic-burgundy bg-civic-paper text-civic-burgundy" : "border-transparent text-civic-muted hover:bg-civic-paper"}`}
          >
            <span className="block font-editorial text-lg">{era.date}</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.1em]">
              {era.label}
            </span>
          </button>
        ))}
      </div>
      {driebesTimeline.map((era, index) => (
        <div
          key={era.id}
          id={`driebes-era-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`driebes-era-tab-${index}`}
          hidden={selected !== index}
          tabIndex={0}
          className="focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy"
        >
          {selected === index && (
            <div className="grid lg:min-h-[490px] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative isolate overflow-hidden p-6 sm:p-9 lg:p-10">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 right-0 -z-10 font-editorial text-[12rem] leading-none text-civic-burgundy/[0.035]"
                >
                  0{index + 1}
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy">
                  {era.date} / {era.label}
                </p>
                <h3 className="mt-5 font-editorial text-3xl leading-[1.1] tracking-[-0.025em] sm:text-4xl">
                  {era.title}
                </h3>
                <p className="mt-6 text-sm leading-7 text-civic-muted">
                  {era.text}
                </p>
                <p className="mt-4 text-xs leading-6 text-civic-muted">
                  {era.detail}
                </p>
                <a
                  href={era.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-[10px] font-medium text-civic-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
                >
                  {era.source.publisher}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0"
                  />
                </a>
              </div>
              <figure className="flex min-w-0 flex-col justify-center border-t border-civic-line bg-civic-paper p-5 sm:p-8 lg:border-l lg:border-t-0">
                <img
                  src={era.image}
                  alt={era.alt}
                  loading="lazy"
                  className="mx-auto aspect-[16/10] max-h-[350px] w-full object-contain"
                />
                <figcaption className="mt-4 text-[10px] leading-5 text-civic-muted">
                  {era.imageCredit}
                  {era.id === "territorio" && (
                    <>
                      {" "}
                      ·{" "}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Ruinas_virgen_de_la_muela.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
                      >
                        Original
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://creativecommons.org/licenses/by-sa/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
                      >
                        Licencia
                      </a>
                    </>
                  )}
                </figcaption>
              </figure>
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center justify-between gap-4 border-t border-civic-line px-5 py-3 sm:px-9">
        <p className="text-[10px] uppercase tracking-[0.15em] text-civic-muted">
          Etapa {selected + 1} de {driebesTimeline.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={selected === 0}
            onClick={() => step(-1)}
            aria-label="Etapa anterior"
            className="flex size-11 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-civic-burgundy disabled:cursor-not-allowed disabled:opacity-30"
          >
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            disabled={selected === driebesTimeline.length - 1}
            onClick={() => step(1)}
            aria-label="Etapa siguiente"
            className="flex size-11 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-civic-burgundy disabled:cursor-not-allowed disabled:opacity-30"
          >
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
