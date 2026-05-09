import { FiMapPin } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <section className="bg-black py-5  gap-5 px-13">
        <div className="b-bottom border-white pb-5">
          <div className="grid grid-cols-3 text-white">
            <div className="text-start  ">
              <h1 className="text-xl font-bold mb-4">Ayuntamiento de Driebes</h1>
              <ul className="">
                <li className="flex gap-2 items-center mb-2">
                  <FiMapPin />
                  Plaza Mayor, 19112 Driebes, Guadalajara
                </li>
                <li className="flex gap-2 items-center mb-2">
                  <MdOutlinePhone />
                  949 29 80 01
                </li>
                <li className="flex gap-2 items-center mb-2">
                  <MdMailOutline />
                  ayuntamiento@driebes.es
                </li>
              </ul>
            </div>
            <div className="text-start">
              <h1 className="text-xl font-bold mb-4">Enlaces Rápidos</h1>
              <ul>
                <li>Servicios Municipales</li>
                <li>Calendario de Eventos</li>
                <li>Últimas Noticias</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div className="text-start">
              <h1 className="text-xl font-bold mb-4">Horario de Atención</h1>
              <ul>
                <li>Lunes a Viernes: 9:00 - 14:00</li>
                <li>Sábados: 9:00 - 13:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-sm text-gray-400 mt-4">
            © 2026 Ayuntamiento de Driebes. PsUdev
          </p>
        </div>
      </section>
    </>
  );
}
