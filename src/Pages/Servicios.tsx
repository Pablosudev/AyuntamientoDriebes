import CardService from "../Components/Cards/CardService";

export default function Servicios() {
  return (
    <div className="Servicios">
      <div className="bg-green-600 text-white items-center gap-20 flex  pl-15 py-5">
        <h1 className="font-bold text-xl">Servicios Municipales</h1>
        <p className="text-xl">Información sobre servicios y trámites</p>
      </div>

      <section className="py-10">
        <h1 className="font-bold text-3xl text-start pl-15 text-black pb-5">
          Servicios Disponibles
        </h1>
        <div className="px-15">
          <CardService />
        </div>
      </section>
      <section className="bg-gray-50 py-10">
        <h1 className="font-bold text-3xl text-start pl-15 text-black pb-5">
          Trámites Frecuentes
        </h1>
        <div className="px-15">
          <CardService />
        </div>
      </section>
    </div>
  );
}
