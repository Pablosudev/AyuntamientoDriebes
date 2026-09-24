import { useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { FiMaximize2, FiMinus, FiPlus } from "react-icons/fi";

const locations = [
  {
    id: "overview",
    label: "Vista completa",
    x: 0.5,
    y: 0.5,
    zoom: 1,
    text: "El plano completo sitúa las estructuras sobre las curvas de nivel del cerro. Amplía para leer su leyenda y explorar los detalles.",
  },
  {
    id: "forum",
    label: "El foro",
    x: 0.64,
    y: 0.5,
    zoom: 3,
    text: "La superficie gris identifica el foro en la interpretación publicada. A su alrededor se reconocen calles y otras estructuras.",
  },
  {
    id: "streets",
    label: "Las calles",
    x: 0.4,
    y: 0.22,
    zoom: 3,
    text: "Las bandas amarillas dibujan los caminos y ejes de circulación interpretados; las líneas marrones recogen las estructuras urbanas detectadas.",
  },
];

const buttonClass =
  "flex min-h-11 min-w-11 items-center justify-center border border-white/25 px-3 text-civic-sand hover:bg-white/10 disabled:cursor-default disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-sand";

export default function CaracaPlan({ onExpand }: { onExpand: () => void }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);
  const centerRef = useRef({ x: 0.5, y: 0.5, image: true });
  const [view, setView] = useState({ zoom: 1, target: "overview" });
  const location = locations.find((item) => item.id === view.target);

  useLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const width = node.clientWidth * view.zoom;
    const height = node.clientHeight * view.zoom;
    const center = centerRef.current;
    const imageWidth = Math.min(width, height * (1358 / 1920));
    const imageHeight = imageWidth * (1920 / 1358);
    node.scrollTo({
      left:
        (center.image
          ? (width - imageWidth) / 2 + imageWidth * center.x
          : width * center.x) -
        node.clientWidth / 2,
      top:
        (center.image
          ? (height - imageHeight) / 2 + imageHeight * center.y
          : height * center.y) -
        node.clientHeight / 2,
      behavior: "instant",
    });
  }, [view]);

  const changeZoom = (amount: number) => {
    const node = viewportRef.current;
    if (!node) return;
    const zoom = Math.min(4, Math.max(1, view.zoom + amount));
    if (zoom === view.zoom) return;
    centerRef.current = {
      x:
        (node.scrollLeft + node.clientWidth / 2) /
        (node.clientWidth * view.zoom),
      y:
        (node.scrollTop + node.clientHeight / 2) /
        (node.clientHeight * view.zoom),
      image: false,
    };
    setView({ zoom, target: zoom === 1 ? "overview" : "custom" });
  };

  const focusLocation = (item: (typeof locations)[number]) => {
    centerRef.current = { x: item.x, y: item.y, image: true };
    setView({ zoom: item.zoom, target: item.id });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "+" || event.key === "=") changeZoom(0.5);
    else if (event.key === "-") changeZoom(-0.5);
    else if (event.key === "0") focusLocation(locations[0]);
    else return;
    event.preventDefault();
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (view.zoom === 1 || event.pointerType !== "mouse" || event.button !== 0)
      return;
    const node = event.currentTarget;
    node.focus({ preventScroll: true });
    node.setPointerCapture(event.pointerId);
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      left: node.scrollLeft,
      top: node.scrollTop,
    };
    node.dataset.dragging = "true";
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    event.currentTarget.scrollLeft = drag.left - (event.clientX - drag.x);
    event.currentTarget.scrollTop = drag.top - (event.clientY - drag.y);
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="bg-[#182a24]">
      <div
        className="flex flex-wrap gap-2 border-b border-white/20 p-3"
        aria-label="Lugares del plano"
      >
        {locations.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => focusLocation(item)}
            aria-pressed={view.target === item.id}
            className={`min-h-11 px-3 text-xs focus-visible:outline-2 focus-visible:outline-civic-sand ${view.target === item.id ? "bg-civic-sand text-civic-forest" : "text-white/80 hover:bg-white/10"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        ref={viewportRef}
        role="region"
        aria-label="Plano arqueológico ampliable"
        aria-describedby="caraca-plan-help"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onLostPointerCapture={(event) => {
          dragRef.current = null;
          delete event.currentTarget.dataset.dragging;
        }}
        className={`h-[380px] overflow-auto bg-[#d4d2c9] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-sand sm:h-[480px] ${view.zoom > 1 ? "cursor-grab overscroll-contain data-[dragging=true]:cursor-grabbing" : ""}`}
      >
        <div
          style={{
            width: `${view.zoom * 100}%`,
            height: `${view.zoom * 100}%`,
          }}
        >
          <img
            src="/img/caraca/georradar.jpg"
            alt="Plano de interpretación arqueológica de Caraca. Foro en gris, caminos en amarillo y estructuras urbanas en marrón, sobre las curvas de nivel del cerro."
            width="1358"
            height="1920"
            loading="lazy"
            draggable={false}
            className="h-full w-full max-w-none select-none object-contain"
          />
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => changeZoom(-0.5)}
              disabled={view.zoom === 1}
              aria-label="Alejar plano"
              className={buttonClass}
            >
              <FiMinus aria-hidden="true" />
            </button>
            <output
              aria-live="polite"
              aria-label="Nivel de zoom"
              className="min-w-12 text-center text-xs tabular-nums text-civic-sand"
            >
              {view.zoom * 100}%
            </output>
            <button
              type="button"
              onClick={() => changeZoom(0.5)}
              disabled={view.zoom === 4}
              aria-label="Acercar plano"
              className={buttonClass}
            >
              <FiPlus aria-hidden="true" />
            </button>
          </div>
          <button
            type="button"
            onClick={onExpand}
            className={`${buttonClass} gap-2 text-xs`}
          >
            <FiMaximize2 aria-hidden="true" /> Ver original
          </button>
        </div>
        <p
          id="caraca-plan-help"
          className="mt-3 text-[11px] leading-5 text-white/70"
        >
          Amplía y arrastra para recorrer el plano. Con teclado: + / − para
          ampliar, flechas para moverte y 0 para volver al inicio.
        </p>
        <p className="mt-3 border-t border-white/15 pt-3 text-xs leading-6 text-white/85">
          {location?.text ??
            "Estás explorando el documento original. Vuelve a «Vista completa» para recuperar la orientación."}
        </p>
      </div>
    </div>
  );
}
