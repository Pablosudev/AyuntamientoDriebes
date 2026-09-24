import { Link } from "react-router-dom";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const quickLinks = [
  { to: "/servicios", label: "Servicios municipales" },
  { to: "/eventos", label: "Agenda de actividades" },
  { to: "/noticias", label: "Información municipal" },
  { to: "/contacto", label: "Atención ciudadana" },
];

const footerLinkClass =
  "inline-flex min-h-11 items-center gap-3 text-xs leading-6 transition-colors hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy";

export default function Footer() {
  return (
    <footer className="border-t border-civic-line bg-[#eeece4] text-civic-ink">
      <div className="mx-auto max-w-[1320px] px-6 pb-5 pt-12 sm:px-10 lg:px-12">
        <div className="grid gap-x-10 gap-y-9 border-b border-civic-line pb-10 sm:grid-cols-2 xl:grid-cols-[1.15fr_1.25fr_1fr_1fr] xl:gap-x-8">
          <div>
            <Link
              to="/"
              aria-label="Ayuntamiento de Driebes. Inicio"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
            >
              <img
                src="/img/Logo.png"
                alt=""
                width="434"
                height="771"
                loading="lazy"
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
            <p className="mt-5 max-w-60 text-xs leading-6 text-civic-muted">
              Un pueblo con historia.
              <br />
              Un Ayuntamiento cerca de ti.
            </p>
          </div>

          <section aria-labelledby="footer-contact-title" className="min-w-0">
            <h2
              id="footer-contact-title"
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy"
            >
              Encuéntranos
            </h2>
            <address className="grid text-civic-muted not-italic">
              <p className="flex min-h-11 items-start gap-3 text-xs leading-6">
                <FiMapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
                <span>
                  Plaza Mayor
                  <br />
                  Driebes, Guadalajara
                </span>
              </p>
              <a href="tel:+34949298001" className={footerLinkClass}>
                <FiPhone aria-hidden="true" className="size-4 shrink-0" />
                949 29 80 01
              </a>
              <a
                href="mailto:ayuntamiento@driebes.es"
                className={footerLinkClass}
              >
                <FiMail aria-hidden="true" className="size-4 shrink-0" />
                <span className="min-w-0 break-all">
                  ayuntamiento@driebes.es
                </span>
              </a>
            </address>
          </section>

          <nav aria-labelledby="footer-links-title">
            <h2
              id="footer-links-title"
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy"
            >
              Tu Ayuntamiento
            </h2>
            <ul className="text-civic-muted">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLinkClass}>
                    {link.label}
                    <FiArrowUpRight aria-hidden="true" className="size-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-hours-title">
            <h2
              id="footer-hours-title"
              className="mb-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-burgundy"
            >
              Horario de atención
            </h2>
            <div className="flex items-start gap-3 text-xs leading-6 text-civic-muted">
              <FiClock aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <dl>
                <dt>Lunes a viernes</dt>
                <dd className="font-medium text-civic-ink">9:00–14:00</dd>
                <dt className="mt-3">Sábados</dt>
                <dd className="font-medium text-civic-ink">9:00–13:00</dd>
              </dl>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-[10px] text-civic-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ayuntamiento de Driebes{" "}
            <span className="mx-2 text-civic-gold">/</span> Guadalajara
          </p>
          <div className="flex items-center justify-between gap-7">
            <span>Desarrollado por PsUdev</span>
            <a
              href="#root"
              className="inline-flex min-h-11 items-center gap-2 hover:text-civic-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
            >
              Volver arriba{" "}
              <FiArrowUp aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
