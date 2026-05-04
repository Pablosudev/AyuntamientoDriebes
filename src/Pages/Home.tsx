import { FaChevronRight } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <div className="bg-black pb-10 text-center">
        <img src="" alt="" />
        <h1 className="text-7xl pt-20 pb-10 text-white">Bienvenido a Driebes</h1>
        <p className="text-2xl py-8 text-white">
          Un pueblo con historia en el corazón de Guadalajara
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <button className="bg-yellow-500 text-black font-bold rounded-lg py-3 px-2 text-xl min-w-[180px]">
            Descubre Driebes
          </button>
          <button className="bg-white border border-yellow-500 text-black font-bold py-3 px-2 text-xl rounded-lg min-w-[180px]">
            Ver Eventos
          </button>
        </div>
      </div>
      <div className="p-20 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="shadow-lg p-10 text-start gap-4 flex flex-col rounded-xl">
            <div>
              <CiCalendar className="text-2xl bg-yellow-500/20 rounded-lg w-10 h-auto text-yellow-500 p-1" />
            </div>
            <h2 className="font-bold">Eventos</h2>
            <p>Consulta el calendario de actividades</p>
            <a
              href="/eventos"
              className="flex items-center text-yellow-500 items-center"
            >
              Acceder <FaChevronRight />
            </a>
          </div>
          <div className="shadow-lg p-10 text-start gap-4 flex flex-col">
            <div>
              <HiOutlineNewspaper className="text-2xl bg-yellow-500/20 rounded-lg w-10 h-auto text-yellow-500 p-1" />
            </div>
            <h2 className="font-bold">Noticias</h2>
            <p>Últimas novedades del municipio</p>
            <a
              href="/noticias"
              className="flex items-center text-yellow-500 items-center"
            >
              Acceder <FaChevronRight />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="shadow-lg p-10 text-start gap-4 flex flex-col rounded-xl">
            <div>
              <CiCalendar className="text-2xl bg-yellow-500/20 rounded-lg w-10 h-auto text-yellow-500 p-1" />
            </div>
            <h2 className="font-bold">Turismo</h2>
            <p>Descubre Driebes</p>
            <a
              href="/turismo"
              className="flex items-center text-yellow-500 items-center"
            >
              Acceder <FaChevronRight />
            </a>
          </div>
          <div className="shadow-lg p-10 text-start gap-4 flex flex-col">
            <div>
              <HiOutlineNewspaper className="text-2xl bg-yellow-500/20 rounded-lg w-10 h-auto text-yellow-500 p-1" />
            </div>
            <h2 className="font-bold">Servicios</h2>
            <p>Servicios municipales</p>
            <a
              href="/servicios"
              className="flex items-center text-yellow-500 items-center"
            >
              Acceder <FaChevronRight />
            </a>
          </div>
        </div>
      </div>
      <section className="px-20">
        <h1 className="font-bold text-center py-10 text-black text-3xl">Destacados</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="shadow-xl rounded-xl text-start gap-2 flex flex-col p-10">
            <img src="" alt="" className="object-contain" />
            <p className="text-yellow-500 font-bold">15-18 Agosto</p>
            <p className="font-bold ">Fiestas Patronales 2026</p>
          </div>
          <div className="shadow-xl rounded-xl text-start gap-2 flex flex-col p-10">
            <img src="../assets/img/senderismo.jpg" alt="" />
            <p className="text-yellow-500 font-bold">Todo el año</p>
            <p className="font-bold ">Rutas de Senderismo</p>
          </div>
          <div className="shadow-xl rounded-xl text-start gap-2 flex flex-col p-10">
            <img src="" alt="" />
            <p className="text-yellow-500 font-bold">Visitas guiadas</p>
            <p className="font-bold ">Patrimonio Histórico</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 p-20 gap-10">
        <div className="flex flex-col text-start gap-2">
          <h1 className="font-bold text-3xl text-black ">Sobre Driebes</h1>
          <p className="text-black text-sm pb-4">
            Driebes es un municipio español situado en la provincia de
            Guadalajara, en la comunidad autónoma de Castilla-La Mancha. Con una
            rica historia que se remonta a la época medieval, nuestro pueblo
            conserva un importante patrimonio arquitectónico y cultural. <br /> Rodeado
            de un paisaje natural privilegiado, Driebes ofrece a sus visitantes
            la oportunidad de disfrutar de la tranquilidad rural, rutas de
            senderismo, y una gastronomía tradicional que mantiene vivas las
            costumbres de la región.
          </p>
          <div className="grid grid-cols-2 justify-left gap-10">
            <div className="flex flex-col items-center gap-2">
              <FiUsers className="text-yellow-500 text-3xl" />

              <p className="font-bold text-black">~ 500</p>
              <p className="text-black">Habitantes</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IoIosHeartEmpty className="text-yellow-500 text-3xl" />

              <p className="font-bold text-black">100 %</p>
              <p className="text-black">Hospitalidad</p>
            </div>
          </div>
        </div>
        <img
          src="../../public/img/driebes.jpg"
          alt="Driebes"
          className="rounded-xl h-80"
        />
      </section>
    </div>
  );
}
