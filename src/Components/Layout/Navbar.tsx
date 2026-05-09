import { useState } from "react";
import { FiMapPin, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/historia", label: "Historia" },
    { href: "/turismo", label: "Turismo" },
    { href: "/eventos", label: "Eventos" },
    { href: "/noticias", label: "Noticias" },
    { href: "/empresas", label: "Empresas" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="border-b-7 border-yellow-500 bg-black px-4 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-yellow-500">
          <FiMapPin className="text-3xl sm:text-4xl" />
          <div className="text-left">
            <h3 className="text-base font-bold sm:text-lg">Driebes</h3>
            <h4 className="text-sm sm:text-base">Guadalajara</h4>
          </div>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>

        <ul className="hidden items-center gap-3 text-sm text-white lg:grid lg:grid-cols-4 xl:grid-cols-8">
          {links.map((link) => (
            <li key={link.href} className="text-center hover:text-yellow-500 hover:font-bold">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="mx-auto mt-4 grid max-w-7xl gap-2 border-t border-white/15 pt-4 text-white lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
