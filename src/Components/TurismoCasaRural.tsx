import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiMaximize2,
  FiPhone,
  FiX,
} from "react-icons/fi";
import {
  LuAccessibility,
  LuBath,
  LuBedDouble,
  LuCookingPot,
  LuFlame,
  LuSofa,
} from "react-icons/lu";
import { casaRuralFacade, casaRuralPhotos } from "../data/turismo";

const facts = [
  { value: "5", label: "habitaciones: 4 dobles y 1 triple" },
  { value: "2", label: "baños completos" },
  { value: "2", label: "salones, uno pensado para niños" },
  { value: "Accesible", label: "para personas con movilidad reducida" },
];
const features = [
  {
    icon: LuBedDouble,
    title: "Cinco dormitorios",
    text: "Cuatro dobles y uno triple, todos con ropa de cama. Dos de ellos están en la planta baja.",
  },
  {
    icon: LuBath,
    title: "Dos baños completos",
    text: "Equipados con secador, gel, champú y toallas.",
  },
  {
    icon: LuCookingPot,
    title: "Cocina-comedor equipada",
    text: "Con lavavajillas, cafetera, tostadora, exprimidor eléctrico y batidora. Tiene salida al patio.",
  },
  {
    icon: LuFlame,
    title: "Patio con barbacoa",
    text: "Parrillas, paellera y fuegos con bombona para cocinar al aire libre.",
  },
  {
    icon: LuSofa,
    title: "Dos salones y terraza",
    text: "Uno de los salones es ideal para niños. En la primera planta, una amplia terraza.",
  },
  {
    icon: LuAccessibility,
    title: "Accesible y práctica",
    text: "Acceso adaptado a personas con movilidad reducida y cuarto de lavadora para estancias largas.",
  },
];

export default function TurismoCasaRural() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const photo = selected === null ? null : casaRuralPhotos[selected];
  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const step = (direction: number) =>
    setSelected((current) =>
      current === null
        ? current
        : (current + direction + casaRuralPhotos.length) %
          casaRuralPhotos.length,
    );

  return (
    <section
      id="casa-rural"
      aria-labelledby="casa-rural-title"
      className="scroll-mt-16"
    >
      <div className="relative isolate overflow-hidden bg-civic-burgundy text-white">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-4 -z-10 font-editorial text-[clamp(10rem,26vw,26rem)] leading-none tracking-[-0.06em] text-white/[0.035]"
        >
          Casa
        </span>
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-civic-sand">
              Alojamiento en el pueblo
            </p>
            <h2
              id="casa-rural-title"
              className="mb-0 mt-5 font-editorial text-4xl leading-[1.07] tracking-[-0.03em] sm:text-5xl"
            >
              Casa Rural Caraca.
              <br />
              <span className="italic text-civic-sand">
                Tu casa en Driebes.
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/85">
              Un alojamiento acogedor y bien equipado para disfrutar de unos
              días en un entorno tranquilo. Perfecto para familias o grupos de
              amigos.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-white/25 py-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-editorial text-3xl text-civic-sand sm:text-4xl">
                    {fact.value}
                  </dt>
                  <dd className="mt-2 text-[11px] leading-5 text-white/70">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                to="/contacto"
                className="group inline-flex min-h-12 items-center gap-7 bg-civic-paper px-6 py-3 text-xs font-semibold text-civic-burgundy hover:bg-civic-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
              >
                Consultar disponibilidad{" "}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="size-5 motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
                />
              </Link>
              <a
                href="tel:+34949298001"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-civic-sand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
              >
                <FiPhone aria-hidden="true" className="size-4" />
                949 29 80 01
              </a>
            </div>
          </div>
          <figure className="min-w-0 max-w-[750px]">
            <div className="border border-white/25 bg-civic-paper p-3 sm:p-4">
              <img
                src={casaRuralFacade.image}
                alt={casaRuralFacade.alt}
                width={casaRuralFacade.width}
                height={casaRuralFacade.height}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-x-5 gap-y-1 text-[10px] leading-5 text-white/70">
              <span>La fachada, con su terraza en arcos.</span>
              <span>Casa Rural Caraca · Driebes</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-civic-burgundy sm:text-xs">
              Lo que vas a encontrar
            </p>
            <h3 className="mt-4 font-editorial text-3xl leading-[1.1] tracking-[-0.025em] sm:text-4xl">
              Espacios para
              <br />
              <span className="italic text-civic-burgundy">compartir.</span>
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-7 text-civic-muted">
              Luminosa y bien distribuida, la casa combina funcionalidad y
              calidez.
            </p>
          </div>
          <ul className="grid gap-x-10 gap-y-7 border-t border-civic-line pt-7 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 stroke-[1.2] text-civic-burgundy"
                />
                <div>
                  <h4 className="font-editorial text-xl">{title}</h4>
                  <p className="mt-2 text-xs leading-6 text-civic-muted">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-b border-civic-line pb-4">
          <h3 className="font-editorial text-2xl sm:text-3xl">
            Recorre la casa.
          </h3>
          <p className="text-[10px] uppercase tracking-[0.15em] text-civic-muted">
            {casaRuralPhotos.length} fotografías · Pulsa para ampliar
          </p>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {casaRuralPhotos.map((item, index) => (
            <li key={item.image}>
              <button
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`Ampliar fotografía: ${item.label}`}
                className="group relative block w-full overflow-hidden bg-civic-stone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="aspect-[4/3] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-linear-to-t from-[#14261f]/85 to-transparent px-3 pb-3 pt-10 text-left text-[11px] font-medium text-white">
                  {item.label}
                  <FiMaximize2 aria-hidden="true" className="size-3.5 shrink-0" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="casa-rural-photo-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          step(event.key === "ArrowRight" ? 1 : -1);
        }}
        className="fixed inset-0 m-auto max-h-[94svh] w-[min(94vw,1000px)] max-w-none overflow-auto border border-civic-line bg-civic-paper p-5 text-civic-ink shadow-2xl backdrop:bg-black/85 sm:p-7"
      >
        {photo && selected !== null && (
          <>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-civic-burgundy">
                  Casa Rural Caraca · {selected + 1} de{" "}
                  {casaRuralPhotos.length}
                </p>
                <h2
                  id="casa-rural-photo-title"
                  className="mb-0 mt-2 font-editorial text-2xl"
                >
                  {photo.label}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setSelected(null)}
                aria-label="Cerrar fotografía"
                className="flex size-11 shrink-0 items-center justify-center border border-civic-line hover:bg-civic-stone/40 focus-visible:outline-2 focus-visible:outline-civic-burgundy"
              >
                <FiX aria-hidden="true" className="size-5" />
              </button>
            </div>
            <img
              key={photo.image}
              src={photo.image}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              style={{ maxWidth: photo.width }}
              className="mx-auto max-h-[64svh] w-full object-contain"
            />
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-civic-line pt-4">
              <p className="text-[10px] leading-5 text-civic-muted">
                Usa las flechas del teclado o los botones para pasar las
                fotografías.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Fotografía anterior"
                  className="flex size-11 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-white focus-visible:outline-2 focus-visible:outline-civic-burgundy"
                >
                  <FiArrowLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Fotografía siguiente"
                  className="flex size-11 items-center justify-center border border-civic-line text-civic-burgundy hover:bg-civic-white focus-visible:outline-2 focus-visible:outline-civic-burgundy"
                >
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
