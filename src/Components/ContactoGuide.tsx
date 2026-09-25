import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiMail,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";
import {
  LuCompass,
  LuFileText,
  LuHouse,
  LuNewspaper,
  LuSiren,
} from "react-icons/lu";
import { contactGuide, mailtoHref } from "../data/contacto";
import type { GuideAction } from "../data/contacto";

const icons = {
  tramites: LuFileText,
  refugio: LuHouse,
  actividades: FiCalendar,
  avisos: LuNewspaper,
  visita: LuCompass,
  urgencia: LuSiren,
  otra: FiMessageCircle,
};

function Action({ action, primary }: { action: GuideAction; primary: boolean }) {
  const className = `inline-flex min-h-12 items-center gap-4 px-5 py-3 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand ${primary ? "bg-civic-paper text-civic-forest hover:bg-civic-sand" : "border border-white/30 text-white hover:border-civic-sand hover:text-civic-sand"}`;
  if (action.kind === "page")
    return (
      <Link to={action.to} className={className}>
        {action.label} <FiArrowRight aria-hidden="true" className="size-4" />
      </Link>
    );
  const Icon = action.kind === "phone" ? FiPhone : FiMail;
  return (
    <a
      href={action.kind === "phone" ? action.href : mailtoHref(action.subject)}
      className={className}
    >
      <Icon aria-hidden="true" className="size-4" />
      {action.label}
    </a>
  );
}

export default function ContactoGuide() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % contactGuide.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + contactGuide.length) % contactGuide.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = contactGuide.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
      <div
        role="tablist"
        aria-label="¿Qué necesitas?"
        aria-orientation="vertical"
        className="border-t border-white/25"
      >
        {contactGuide.map((item, index) => {
          const Icon = icons[item.id as keyof typeof icons] ?? FiMessageCircle;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`guide-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls={`guide-panel-${item.id}`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => navigateTabs(event, index)}
              className={`flex min-h-14 w-full items-center gap-4 border-b border-l-2 border-b-white/15 px-4 py-3 text-left text-sm transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-civic-sand ${selected === index ? "border-l-civic-sand bg-white/10 text-civic-sand" : "border-l-transparent text-white/75 hover:bg-white/5 hover:text-white"}`}
            >
              <Icon aria-hidden="true" className="size-5 shrink-0 stroke-[1.3]" />
              <span className="flex-1">{item.label}</span>
              <span
                aria-hidden="true"
                className="font-editorial text-xs italic opacity-65"
              >
                0{index + 1}
              </span>
            </button>
          );
        })}
      </div>

      {contactGuide.map((item, index) => {
        const Icon = icons[item.id as keyof typeof icons] ?? FiMessageCircle;
        return (
          <div
            key={item.id}
            id={`guide-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`guide-tab-${item.id}`}
            hidden={selected !== index}
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-civic-sand"
          >
            {selected === index && (
              <div className="relative isolate h-full overflow-hidden border border-white/20 bg-white/5 p-6 sm:p-10">
                <Icon
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-10 -z-10 size-64 stroke-[0.5] text-white/[0.05]"
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-civic-sand">
                  0{index + 1} / {item.label}
                </p>
                <h3 className="mt-5 font-editorial text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/80">
                  {item.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {item.actions.map((action, actionIndex) => (
                    <Action
                      key={action.label}
                      action={action}
                      primary={actionIndex === 0}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
