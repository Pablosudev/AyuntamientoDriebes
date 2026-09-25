import { useState } from "react";
import { wasteService } from "../data/servicios";

const containerTone = {
  resto: "bg-civic-ink",
  envases: "bg-civic-gold",
  papel: "bg-civic-muted/60",
};

export default function ServiciosResiduos() {
  const [season, setSeason] = useState(0);
  const current = wasteService.seasons[season];
  const total = wasteService.containers.reduce(
    (sum, container) => sum + container.count,
    0,
  );

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
      <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-editorial text-2xl leading-tight">
            ¿Cada cuánto pasa el camión?
          </h3>
          <div
            role="group"
            aria-label="Temporada"
            className="flex border border-civic-line p-1"
          >
            {wasteService.seasons.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={season === index}
                onClick={() => setSeason(index)}
                className={`min-h-10 px-3 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy ${season === index ? "bg-civic-burgundy text-white" : "text-civic-muted hover:text-civic-burgundy"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
              Contenedor de resto
            </p>
            <p className="mt-3 flex items-baseline gap-3">
              <span className="font-editorial text-7xl leading-none tracking-[-0.04em] text-civic-burgundy">
                {current.restDays}
              </span>
              <span className="text-sm leading-5">
                días
                <br />
                por semana
              </span>
            </p>
            <div aria-hidden="true" className="mt-5 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 7 }, (_, index) => (
                <span
                  key={index}
                  className={`h-2.5 motion-safe:transition-colors motion-safe:duration-500 ${index < current.restDays ? "bg-civic-burgundy" : "bg-civic-stone/60"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-[10px] text-civic-muted">
              {current.restDays} de cada 7 días
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
              Recogida selectiva
            </p>
            <p className="mt-3 font-editorial text-4xl leading-tight tracking-[-0.02em] text-civic-forest">
              {current.selective}
            </p>
            <p className="mt-3 text-xs leading-6 text-civic-muted">
              Envases ligeros y papel y cartón.
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-civic-line pt-4 text-xs leading-6 text-civic-muted">
          Los días concretos de recogida no están publicados. Consulta en el
          Ayuntamiento qué días pasa el camión.
        </p>
      </article>

      <article className="border border-civic-line bg-civic-white p-6 sm:p-8">
        <h3 className="font-editorial text-2xl leading-tight">
          {total} contenedores en el pueblo.
        </h3>
        <ul className="mt-6 space-y-6">
          {wasteService.containers.map((container) => (
            <li key={container.id}>
              <p className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium">{container.label}</span>
                <span className="font-editorial text-3xl leading-none text-civic-burgundy">
                  {container.count}
                </span>
              </p>
              <div
                aria-hidden="true"
                className="mt-3 flex flex-wrap gap-1"
              >
                {Array.from({ length: container.count }, (_, index) => (
                  <span
                    key={index}
                    className={`size-3 ${containerTone[container.id as keyof typeof containerTone]}`}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-7 border-t border-civic-line pt-4 text-xs leading-6 text-civic-muted">
          Limpieza: {wasteService.washes}.
        </p>
      </article>
    </div>
  );
}
