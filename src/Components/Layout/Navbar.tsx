import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { contact } from "../../data/contacto";

const links = [
  { to: "/turismo", label: "Turismo" },
  { to: "/eventos", label: "Eventos" },
  { to: "/noticias", label: "Noticias" },
  // { to: "/empresas", label: "Empresas" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
];

const historyLinks = [
  { to: "/historia", label: "Historia de Driebes" },
  { to: "/historia/caraca", label: "Historia de Caraca" },
];

const navigationClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-11 items-center border-b-2 px-2.5 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy ${isActive ? "border-civic-burgundy text-civic-burgundy" : "border-transparent text-civic-muted hover:border-civic-line hover:text-civic-burgundy"}`;

export default function Navbar() {
  const { pathname } = useLocation();
  return <Navigation key={pathname} pathname={pathname} />;
}

function Navigation({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);
  const historyRef = useRef<HTMLLIElement>(null);
  const historyButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenus() {
    setIsOpen(false);
    setIsHistoryOpen(false);
  }

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      if (!historyRef.current?.contains(event.target)) setIsHistoryOpen(false);
      if (!navigationRef.current?.contains(event.target)) setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (isHistoryOpen) {
        setIsHistoryOpen(false);
        historyButtonRef.current?.focus();
      } else if (isOpen) {
        setIsOpen(false);
        mobileButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isHistoryOpen, isOpen]);

  return (
    <header className="relative z-30 bg-civic-white text-civic-ink">
      <a
        href="#main-content"
        className="sr-only z-50 bg-civic-burgundy px-5 py-3 text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <div className="bg-civic-burgundy text-white">
        <div className="mx-auto flex min-h-9 max-w-[1320px] items-center justify-between gap-4 px-6 py-1.5 text-[10px] sm:px-10 lg:px-12">
          <p className="font-medium tracking-[0.08em]">
            Portal municipal
            <span className="hidden min-[380px]:inline">
              <span className="mx-2 text-white/50">/</span> Guadalajara
            </span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={contact.phone.href}
              className="hidden min-h-6 items-center gap-2 text-white/90 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex"
            >
              <FiPhone aria-hidden="true" className="size-3" />
              {contact.phone.label}
            </a>
            <Link
              to="/contacto"
              onClick={closeMenus}
              className="inline-flex min-h-6 items-center gap-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Atención ciudadana{" "}
              <FiArrowUpRight aria-hidden="true" className="size-3" />
            </Link>
          </div>
        </div>
      </div>
      <nav
        ref={navigationRef}
        aria-label="Navegación principal"
        className="border-b border-civic-line"
      >
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-5 px-6 py-4 sm:px-10 lg:px-12">
          <Link
            to="/"
            onClick={closeMenus}
            aria-label="Ayuntamiento de Driebes. Inicio"
            className="flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
          >
            <img
              src="/img/Logo.png"
              alt=""
              width="434"
              height="771"
              className="h-14 w-auto object-contain"
            />
            <span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
                Ayuntamiento de
              </span>
              <span className="mt-0.5 block font-editorial text-[1.8rem] leading-none tracking-[-0.02em]">
                Driebes
              </span>
            </span>
          </Link>
          <button
            ref={mobileButtonRef}
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setIsOpen((open) => !open);
              setIsHistoryOpen(false);
            }}
            className="flex min-h-11 items-center gap-2 border border-civic-line px-3 text-xs font-medium text-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy xl:hidden"
          >
            <span className="hidden min-[380px]:inline">Menú</span>
            {isOpen ? (
              <FiX aria-hidden="true" className="size-5" />
            ) : (
              <FiMenu aria-hidden="true" className="size-5" />
            )}
          </button>
          <ul
            id="main-navigation"
            className={`${isOpen ? "flex" : "hidden"} mt-4 w-full flex-col gap-1 border-t border-civic-line pt-3 xl:mt-0 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-0 xl:border-0 xl:pt-0`}
          >
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMenus}
                className={navigationClass}
              >
                Inicio
              </NavLink>
            </li>
            <li
              ref={historyRef}
              className="relative"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  setIsHistoryOpen(false);
              }}
            >
              <button
                ref={historyButtonRef}
                type="button"
                onClick={() => setIsHistoryOpen((open) => !open)}
                aria-expanded={isHistoryOpen}
                aria-controls="history-navigation"
                className={`flex min-h-11 w-full items-center justify-between gap-1.5 border-b-2 px-2.5 py-2 text-xs font-medium hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy ${pathname.startsWith("/historia") ? "border-civic-burgundy text-civic-burgundy" : "border-transparent text-civic-muted"}`}
              >
                Historia{" "}
                <FiChevronDown
                  aria-hidden="true"
                  className={`size-3 ${isHistoryOpen ? "rotate-180" : ""} motion-safe:transition-transform`}
                />
              </button>
              {isHistoryOpen && (
                <ul
                  id="history-navigation"
                  className="border-l border-civic-line bg-civic-paper py-2 pl-3 xl:absolute xl:left-0 xl:top-full xl:z-40 xl:mt-2 xl:w-56 xl:border xl:bg-civic-white xl:p-2 xl:shadow-lg"
                >
                  {historyLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `block px-3 py-3 text-xs hover:bg-civic-paper hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-civic-burgundy ${isActive ? "font-semibold text-civic-burgundy" : "text-civic-muted"}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenus}
                  className={navigationClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
