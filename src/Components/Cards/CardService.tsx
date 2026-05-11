import { CgFileDocument } from "react-icons/cg";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoBusOutline } from "react-icons/io5";
import { MdOutlineMedicalInformation } from "react-icons/md";
import Services from "../../data/services.json";

const IconsCard = {
  administracion: <CgFileDocument />,
  residuos: <FaRegTrashCan />,
  medico: <MdOutlineMedicalInformation />,
  transporte: <IoBusOutline />,
};

function getAccent(category: string) {
  switch (category) {
    case "residuos":
      return "bg-emerald-100 text-emerald-700";
    case "medico":
      return "bg-sky-100 text-sky-700";
    case "transporte":
      return "bg-stone-200 text-stone-700";
    default:
      return "bg-amber-100 text-amber-700";
  }
}

export default function CardService() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Services.map((service) => {
        const iconRender =
          IconsCard[service.category as keyof typeof IconsCard] ?? <CgFileDocument />;
        const accent = getAccent(service.category);

        return (
          <article
            key={service.id}
            className="tourism-panel flex h-full flex-col rounded-[2rem] border border-white/70 p-7 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(120,53,15,0.16)]"
          >
            <div
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${accent}`}
            >
              {iconRender}
            </div>

            <div className="min-h-[4.5rem]">
              <h3 className="tourism-display text-3xl leading-tight text-stone-900">
                {service.title}
              </h3>
            </div>

            <div className="min-h-[5rem]">
              <p className="leading-7 text-stone-700">{service.description}</p>
            </div>

            <ul className="mt-4 flex-1 space-y-3 text-stone-700">
              {service.servicios.map((servicio, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-600" />
                  <span>{servicio}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-stone-200/80 pt-5 text-sm leading-7 text-stone-700">
              <p>
                <strong className="font-semibold text-stone-900">Contacto:</strong>{" "}
                {service.contacto}
              </p>
              <p>
                <strong className="font-semibold text-stone-900">Horario:</strong>{" "}
                {service.horario}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
