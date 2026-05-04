import { FiMapPin } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex bg-black py-5 px-13 justify-between items-center border-b-7 border-yellow-500 ">
      <div className="flex text-yellow-500 gap-3 items-center">
        <FiMapPin className="text-4xl text-yellow-500" />
        <div className="text-left">
          <h3 className="font-bold text-lg">Driebes</h3>
          <h4>Guadalajara</h4>
        </div>
      </div>
      <ul className="grid grid-cols-8 gap-3 items-center ">
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/">Inicio</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/historia">Historia</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/turismo">Turismo</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/eventos">Eventos</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/noticias">Noticias</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/empresas">Empresas</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/servicios">Servicios</a>
        </li>
        <li className="hover:text-yellow-500 hover:font-bold">
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
