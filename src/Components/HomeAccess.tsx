import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCalendar,
  FiHome,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import {
  LuBuilding2,
  LuCompass,
  LuLandmark,
  LuNewspaper,
} from "react-icons/lu";

const audiences = [
  {
    id: "vecinos",
    label: "Vivo en Driebes",
    icon: FiHome,
    description: "Lo que necesitas para el día a día, a un paso.",
    links: [
      {
        title: "Servicios y trámites",
        text: "Información municipal, gestiones y reservas.",
        to: "/servicios",
        icon: LuLandmark,
      },
      {
        title: "Agenda del pueblo",
        text: "Actividades y encuentros para compartir.",
        to: "/eventos",
        icon: FiCalendar,
      },
      {
        title: "Noticias y avisos",
        text: "La información de tu Ayuntamiento.",
        to: "/noticias",
        icon: LuNewspaper,
      },
      {
        title: "Comercio cercano",
        text: "Negocios y profesionales de Driebes.",
        to: "/empresas",
        icon: LuBuilding2,
      },
    ],
  },
  {
    id: "visitantes",
    label: "Vengo de visita",
    icon: LuCompass,
    description: "Un buen comienzo para conocer nuestro pueblo.",
    links: [
      {
        title: "Descubre Caraca",
        text: "Un viaje a la ciudad romana de Driebes.",
        to: "/historia/caraca",
        icon: LuLandmark,
      },
      {
        title: "Qué ver y recorrer",
        text: "Patrimonio, paisaje y caminos de la Alcarria.",
        to: "/turismo",
        icon: FiMapPin,
      },
      {
        title: "Qué hay en la agenda",
        text: "Consulta las actividades del municipio.",
        to: "/eventos",
        icon: FiCalendar,
      },
      {
        title: "Prepara tu visita",
        text: "Pregunta al Ayuntamiento y resuelve tus dudas.",
        to: "/contacto",
        icon: FiMessageCircle,
      },
    ],
  },
];

export default function HomeAccess() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const audience = audiences[selected];

  const navigate = (event: KeyboardEvent<HTMLButtonElement>) => {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft")
      next = 1 - selected;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="a-tu-servicio"
      aria-labelledby="services-title"
      className="scroll-mt-6 border-b border-civic-line bg-civic-white"
    >
      <div className="mx-auto max-w-[1320px] px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-burgundy">
              Un Ayuntamiento cercano
            </p>
            <h2
              id="services-title"
              className="mb-0 mt-3 font-editorial text-3xl tracking-[-0.025em] sm:text-4xl"
            >
              Tu punto de encuentro.
            </h2>
          </div>
          <div
            role="tablist"
            aria-label="Accesos según tu visita"
            className="flex w-fit max-w-full border-b border-civic-line"
          >
            {audiences.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                id={`home-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={selected === index}
                aria-controls={`home-panel-${id}`}
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={navigate}
                className={`flex min-h-12 items-center gap-2 border-b-2 px-3 py-3 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy sm:gap-3 sm:px-5 ${selected === index ? "border-civic-burgundy text-civic-burgundy" : "border-transparent text-civic-muted hover:text-civic-burgundy"}`}
              >
                <Icon aria-hidden="true" className="size-4 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </div>
        {audiences.map((item, index) => (
          <div
            key={item.id}
            id={`home-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`home-tab-${item.id}`}
            hidden={selected !== index}
          >
            {selected === index && (
              <>
                <p className="mb-7 mt-5 text-sm leading-6 text-civic-muted">
                  {audience.description}
                </p>
                <div className="grid gap-px overflow-hidden border border-civic-line bg-civic-line sm:grid-cols-2 lg:grid-cols-4">
                  {audience.links.map(
                    ({ title, text, to, icon: Icon }, linkIndex) => (
                      <Link
                        key={to}
                        to={to}
                        className="group flex flex-col bg-civic-white p-6 transition-colors hover:bg-civic-paper focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-burgundy sm:min-h-[230px]"
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
                            0{linkIndex + 1}
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
                    ),
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
