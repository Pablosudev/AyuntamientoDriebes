import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { turismoRoutes } from "../data/turismo";

export default function TurismoRoutes() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % turismoRoutes.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + turismoRoutes.length) % turismoRoutes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = turismoRoutes.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Caminos de Driebes"
        className="grid grid-cols-2 border-y border-white/25 sm:grid-cols-4"
      >
        {turismoRoutes.map((route, index) => (
          <button
            key={route.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`route-tab-${route.id}`}
            type="button"
            role="tab"
            aria-selected={selected === index}
            aria-controls={`route-panel-${route.id}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => navigateTabs(event, index)}
            className={`flex min-h-16 items-center justify-between gap-3 border-b-2 px-4 py-4 text-left text-sm transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-civic-sand sm:px-5 ${selected === index ? "border-civic-sand bg-white/10 text-civic-sand" : "border-transparent text-white/75 hover:bg-white/5 hover:text-white"}`}
          >
            <span>{route.label}</span>
            <span
              aria-hidden="true"
              className="font-editorial text-xs italic opacity-65"
            >
              0{index + 1}
            </span>
          </button>
        ))}
      </div>

      {turismoRoutes.map((route, index) => (
        <div
          key={route.id}
          id={`route-panel-${route.id}`}
          role="tabpanel"
          aria-labelledby={`route-tab-${route.id}`}
          hidden={selected !== index}
          tabIndex={0}
          className="pt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
        >
          {selected === index && (
            <div className="grid items-start gap-8 lg:min-h-[330px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div className="relative isolate lg:py-3">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 right-0 -z-10 font-editorial text-[8rem] leading-none text-white/[0.035] sm:text-[11rem]"
                >
                  0{index + 1}
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-sand">
                  {route.eyebrow}
                </p>
                <h3 className="mt-4 font-editorial text-3xl leading-[1.13] tracking-[-0.025em] sm:text-4xl">
                  {route.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/85">
                  {route.description}
                </p>
                {route.detail && (
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                    {route.detail}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-x-7">
                  {route.source && (
                    <a
                      href={route.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-3 text-xs font-medium text-civic-sand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
                    >
                      Fuente: {route.source.publisher}{" "}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {route.id === "caraca" && (
                    <Link
                      to="/historia/caraca"
                      className="inline-flex min-h-11 items-center gap-3 text-xs font-medium text-white hover:text-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
                    >
                      Conoce Caraca antes de ir{" "}
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
              <dl className="border border-white/20 bg-white/5">
                {[
                  {
                    label: "Distancia",
                    value: route.distance,
                    note: route.distanceNote,
                  },
                  {
                    label: "Duración",
                    value: route.duration,
                    note: route.durationNote,
                  },
                  { label: "Dificultad", value: route.difficulty },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-20 items-center justify-between gap-5 border-b border-white/15 px-5 py-4 last:border-b-0 sm:px-6"
                  >
                    <dt className="text-[10px] font-medium uppercase tracking-[0.17em] text-white/65">
                      {stat.label}
                    </dt>
                    <dd className="text-right">
                      {stat.value ? (
                        <span className="font-editorial text-2xl text-civic-sand">
                          {stat.value}
                        </span>
                      ) : (
                        <span className="text-xs italic text-white/60">
                          Consultar
                        </span>
                      )}
                      {stat.value && stat.note && (
                        <span className="mt-1 block text-[10px] leading-5 text-white/55">
                          {stat.note}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      ))}

      <p className="mt-6 text-[10px] leading-5 text-white/55">
        «Consultar»: dato pendiente de confirmar. Pregunta en el Ayuntamiento
        antes de salir.
      </p>
    </div>
  );
}
