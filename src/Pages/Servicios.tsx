import { LuClock3, LuFileCheck2, LuLandmark, LuUsersRound } from "react-icons/lu";
import CardService from "../Components/Cards/CardService";
import serviciosHero from "../assets/servicios-ayuntamiento-acuarela.png";

export default function Servicios() {
  return (
    <div className="tourism-page overflow-hidden bg-[#f6efe5] text-slate-900">
      <section
        className="relative min-h-[78vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${serviciosHero})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.82),rgba(22,101,52,0.58),rgba(180,83,9,0.26))]" />
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-emerald-900/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-18 sm:px-8 lg:px-10">
          <div className="tourism-glass max-w-4xl rounded-[2rem] p-8 text-left text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10 lg:p-12">
            <p className="tourism-kicker mb-4 text-sm uppercase tracking-[0.35em] text-amber-200">
              Servicios Municipales
            </p>
            <h1 className="tourism-display text-5xl leading-none sm:text-6xl lg:text-8xl">
              Trámites, atención y servicios cotidianos con una mirada cercana.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-100 sm:text-lg">
              El Ayuntamiento de Driebes reúne en esta sección la información
              esencial para resolver gestiones, consultar horarios y localizar
              los servicios municipales más habituales.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Atención útil</p>
                <p className="mt-1 text-sm text-stone-200">Información clara y directa</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Gestiones básicas</p>
                <p className="mt-1 text-sm text-stone-200">Trámites del día a día municipal</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Cercanía local</p>
                <p className="mt-1 text-sm text-stone-200">Servicios pensados para el vecino</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-20">
        <div>
          <p className="tourism-kicker text-sm uppercase tracking-[0.3em] text-amber-700">
            Servicios
          </p>
          <h2 className="tourism-display mt-4 text-4xl leading-tight text-stone-900 sm:text-5xl">
            Una página práctica, pero con la misma identidad visual del sitio.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">
            Esta sección organiza la atención municipal desde un formato más
            acogedor y legible, manteniendo el lenguaje visual cálido y
            patrimonial que ya define las páginas de inicio y turismo.
          </p>
        </div>

        <div className="tourism-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
              <div className="rounded-2xl bg-amber-100 p-3 text-2xl text-amber-700">
                <LuLandmark />
              </div>
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  Enfoque
                </p>
                <p className="mt-1 text-lg font-semibold text-stone-900">
                  Servicios municipales presentados con más claridad
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
              <div className="rounded-2xl bg-emerald-100 p-3 text-2xl text-emerald-700">
                <LuUsersRound />
              </div>
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  Objetivo
                </p>
                <p className="mt-1 text-lg font-semibold text-stone-900">
                  Facilitar la relación cotidiana entre el vecino y el ayuntamiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-left">
          <p className="tourism-kicker text-sm uppercase tracking-[0.3em] text-amber-700">
            Servicios disponibles
          </p>
          <h2 className="tourism-display mt-3 text-4xl text-stone-900 sm:text-5xl">
            Recursos municipales para el día a día
          </h2>
        </div>
        <CardService />
      </section>

      <section className="relative mt-10 bg-[linear-gradient(180deg,#fffaf3_0%,#f0e1cf_100%)] py-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-left">
            <p className="tourism-kicker text-sm uppercase tracking-[0.3em] text-amber-700">
              Trámites frecuentes
            </p>
            <h2 className="tourism-display mt-3 text-4xl text-stone-900 sm:text-5xl">
              Gestiones habituales resueltas de forma sencilla
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
              Desde certificados y padrones hasta consultas de horarios o
              servicios específicos, este bloque reúne la parte más práctica de
              la vida municipal en una presentación más amable y ordenada.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="tourism-panel rounded-[2rem] border border-white/70 p-7 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
                <LuFileCheck2 />
              </div>
              <h3 className="tourism-display text-3xl leading-tight text-stone-900">
                Documentación
              </h3>
              <p className="mt-4 leading-8 text-stone-700">
                Certificados, registros, solicitudes y trámites administrativos
                con la información básica que el vecino necesita consultar antes
                de acudir al ayuntamiento.
              </p>
            </article>

            <article className="tourism-panel rounded-[2rem] border border-white/70 p-7 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
                <LuClock3 />
              </div>
              <h3 className="tourism-display text-3xl leading-tight text-stone-900">
                Horarios
              </h3>
              <p className="mt-4 leading-8 text-stone-700">
                Una lectura rápida de los días de atención y funcionamiento de
                los servicios más consultados para evitar desplazamientos
                innecesarios y ganar claridad.
              </p>
            </article>

            <article className="tourism-panel rounded-[2rem] border border-white/70 p-7 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-200 text-2xl text-stone-700">
                <LuUsersRound />
              </div>
              <h3 className="tourism-display text-3xl leading-tight text-stone-900">
                Atención cercana
              </h3>
              <p className="mt-4 leading-8 text-stone-700">
                Una presentación más humana y comprensible de los servicios
                municipales, coherente con la identidad acogedora del resto del
                portal.
              </p>
            </article>
          </div>

          <div className="mt-12">
            <CardService />
          </div>
        </div>
      </section>
    </div>
  );
}
