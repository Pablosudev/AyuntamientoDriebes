import caracaHero from "../assets/caraca-hero-reconstruction.png";
import { LuLandmark, LuMapPinned, LuPickaxe, LuScrollText } from "react-icons/lu";

const highlights = [
  {
    title: "Ciudad romana",
    text: "Caraca fue un enclave relevante del interior peninsular, vinculado a las rutas comerciales y a la organizacion territorial de epoca romana.",
    icon: LuLandmark,
  },
  {
    title: "Entorno arqueologico",
    text: "Su localizacion junto a Driebes ha convertido el area en un punto de interes para la investigacion historica y el conocimiento del pasado regional.",
    icon: LuPickaxe,
  },
  {
    title: "Legado cultural",
    text: "La memoria de Caraca sigue reforzando la identidad del municipio y ofrece una lectura mas amplia del valor patrimonial de Driebes.",
    icon: LuScrollText,
  },
];

export default function HistoriaCaraca() {
  return (
    <div className="tourism-page overflow-hidden bg-[#f6efe5] text-slate-900">
      <section
        className="relative min-h-[78vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${caracaHero})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.86),rgba(17,24,39,0.52),rgba(120,53,15,0.28))]" />
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-900/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-18 sm:px-8 lg:px-10">
          <div className="tourism-glass max-w-3xl rounded-[2rem] p-8 text-left text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10 lg:p-12">
            <p className="tourism-kicker mb-4 text-sm uppercase tracking-[0.35em] text-amber-200">
              Historia de Caraca
            </p>
            <h1 className="tourism-display text-5xl leading-none sm:text-6xl lg:text-8xl">
              El pasado romano que sigue dando sentido al territorio.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-100 sm:text-lg">
              Caraca es una de las referencias historicas mas significativas del
              entorno de Driebes y una pieza clave para comprender la riqueza
              arqueologica y patrimonial del municipio.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Arqueologia</p>
                <p className="mt-1 text-sm text-stone-200">Vestigios de gran valor historico</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Territorio</p>
                <p className="mt-1 text-sm text-stone-200">Un enclave conectado con la Alcarria</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Memoria</p>
                <p className="mt-1 text-sm text-stone-200">Un legado vivo en la identidad local</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-20">
        <div>
          <p className="tourism-kicker text-sm uppercase tracking-[0.3em] text-amber-700">
            Caraca y Driebes
          </p>
          <h2 className="tourism-display mt-4 text-4xl leading-tight text-stone-900 sm:text-5xl">
            Un yacimiento que amplia la mirada sobre la historia local.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">
            La antigua ciudad de Caraca permite entender que el entorno de
            Driebes fue mucho mas que un espacio rural: tambien fue un lugar de
            intercambio, organizacion y presencia historica duradera. Su valor
            ayuda a situar al municipio dentro de una narracion mas amplia.
          </p>
        </div>

        <div className="tourism-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
              <div className="rounded-2xl bg-amber-100 p-3 text-2xl text-amber-700">
                <LuMapPinned />
              </div>
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  Ubicacion
                </p>
                <p className="mt-1 text-lg font-semibold text-stone-900">
                  Caraca forma parte del relato historico de Driebes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
              <div className="rounded-2xl bg-emerald-100 p-3 text-2xl text-emerald-700">
                <LuPickaxe />
              </div>
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  Investigacion
                </p>
                <p className="mt-1 text-lg font-semibold text-stone-900">
                  El interes arqueologico refuerza el valor patrimonial del municipio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-left">
          <p className="tourism-kicker text-sm uppercase tracking-[0.3em] text-amber-700">
            Claves de lectura
          </p>
          <h2 className="tourism-display mt-3 text-4xl text-stone-900 sm:text-5xl">
            Tres ideas para entender la importancia de Caraca
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="tourism-panel rounded-[2rem] border border-white/70 p-7 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
                  <Icon />
                </div>
                <h3 className="tourism-display text-3xl leading-tight text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-stone-700">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
