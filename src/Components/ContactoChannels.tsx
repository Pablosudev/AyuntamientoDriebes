import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { contact, mailtoHref } from "../data/contacto";

const actionClass =
  "inline-flex min-h-11 items-center gap-2 border border-civic-line px-3.5 py-2 text-xs font-semibold text-civic-burgundy hover:border-civic-burgundy hover:bg-civic-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-burgundy";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [state]);

  return (
    <>
      <button
        type="button"
        onClick={() =>
          (navigator.clipboard?.writeText(value) ?? Promise.reject())
            .then(() => setState("copied"))
            .catch(() => setState("failed"))
        }
        aria-label={`Copiar ${label}`}
        className={actionClass}
      >
        {state === "copied" ? (
          <FiCheck aria-hidden="true" className="size-4" />
        ) : (
          <FiCopy aria-hidden="true" className="size-4" />
        )}
        {state === "copied"
          ? "Copiado"
          : state === "failed"
            ? "No se pudo copiar"
            : "Copiar"}
      </button>
      <span role="status" className="sr-only">
        {state === "copied" && `Copiado: ${value}`}
        {state === "failed" && `No se ha podido copiar: ${value}`}
      </span>
    </>
  );
}

export default function ContactoChannels() {
  return (
    <div className="mt-10 grid gap-px overflow-hidden border border-civic-line bg-civic-line lg:grid-cols-3">
      <article className="flex flex-col bg-civic-white p-6 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <FiPhone
            aria-hidden="true"
            className="size-6 stroke-[1.25] text-civic-burgundy"
          />
          <span
            aria-hidden="true"
            className="font-editorial text-xs italic text-civic-muted"
          >
            01
          </span>
        </div>
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
          Llámanos
        </h3>
        <a
          href={contact.phone.href}
          className="mt-3 w-fit font-editorial text-4xl tracking-[-0.03em] text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
        >
          {contact.phone.label}
        </a>
        <p className="mt-2 text-sm text-civic-muted">
          o al móvil{" "}
          <a
            href={contact.mobile.href}
            className="font-medium text-civic-ink underline decoration-civic-gold/60 underline-offset-4 hover:text-civic-burgundy"
          >
            {contact.mobile.label}
          </a>
        </p>
        <p className="mt-5 flex-1 text-xs leading-6 text-civic-muted">
          {contact.hours}. Fuera de ese horario, escríbenos.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={contact.phone.href} className={actionClass}>
            <FiPhone aria-hidden="true" className="size-4" />
            Llamar
          </a>
          <CopyButton value={contact.phone.label} label="teléfono" />
        </div>
      </article>

      <article className="flex flex-col bg-civic-white p-6 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <FiMail
            aria-hidden="true"
            className="size-6 stroke-[1.25] text-civic-burgundy"
          />
          <span
            aria-hidden="true"
            className="font-editorial text-xs italic text-civic-muted"
          >
            02
          </span>
        </div>
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
          Escríbenos
        </h3>
        <a
          href={`mailto:${contact.email}`}
          className="mt-3 w-fit font-editorial text-2xl tracking-[-0.02em] text-civic-burgundy hover:text-civic-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-burgundy"
        >
          {contact.email.split("@")[0]}
          <wbr />@{contact.email.split("@")[1]}
        </a>
        <p className="mt-5 flex-1 text-xs leading-6 text-civic-muted">
          «Preparar un correo» abre tu programa de email con el asunto y una
          estructura ya escritos. Solo tienes que completarla.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={mailtoHref("Consulta desde la web municipal")}
            className={actionClass}
          >
            <FiSend aria-hidden="true" className="size-4" />
            Preparar un correo
          </a>
          <CopyButton value={contact.email} label="email" />
        </div>
      </article>

      <article className="flex flex-col bg-civic-white p-6 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <FiMapPin
            aria-hidden="true"
            className="size-6 stroke-[1.25] text-civic-burgundy"
          />
          <span
            aria-hidden="true"
            className="font-editorial text-xs italic text-civic-muted"
          >
            03
          </span>
        </div>
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.17em] text-civic-muted">
          Ven a vernos
        </h3>
        <address className="mt-3 font-editorial text-2xl not-italic leading-tight sm:text-3xl">
          {contact.street}
          <span className="mt-1 block text-base text-civic-muted">
            {contact.postalCode} {contact.town}
          </span>
        </address>
        <p className="mt-5 flex-1 text-xs leading-6 text-civic-muted">
          Atención presencial: {contact.hours.toLowerCase()}.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            Cómo llegar <FiArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <CopyButton
            value={`${contact.street}, ${contact.postalCode} ${contact.town}`}
            label="dirección"
          />
        </div>
      </article>
    </div>
  );
}
