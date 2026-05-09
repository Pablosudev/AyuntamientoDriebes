import { CgFileDocument } from "react-icons/cg";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoBusOutline } from "react-icons/io5";
import Services from "../../data/services.json";

const IconsCard = {
  administracion: <CgFileDocument />,
  residuos: <FaRegTrashCan />,
  medico: <MdOutlineMedicalInformation />,
  transporte: <IoBusOutline />,
};

export default function CardService() {
  return (
    <div className="grid grid-cols-3 gap-10">
      {Services.map((service) => {
        const iconRender = IconsCard[
          service.category as keyof typeof IconsCard
        ] ?? <CgFileDocument />;
        return (
          <div
            key={service.id}
            className="shadow-xl rounded-xl flex h-full flex-col gap-4 p-6 max-w-200"
          >
            <div className="bg-green-600/10 text-green-600 text-3xl p-3 rounded-xl w-auto mr-auto ">{iconRender}</div>
            <div className="min-h-[3.5rem]">
              <h2 className="text-xl text-black font-bold">{service.title}</h2>
            </div>
            <div className="min-h-[3.5rem]">
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
            <ul className="list-disc ml-4 mb-4 flex-1 gap-2">
              {service.servicios.map((servicio, index) => (
                <li key={index} className="text-gray-600">
                  {servicio}
                </li>
              ))}
            </ul>
            <div>
              <p className="text-gray-700 mb-2">
                <strong>Contacto:</strong> {service.contacto}
              </p>
              <p className="text-gray-700">
                <strong>Horario:</strong> {service.horario}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
