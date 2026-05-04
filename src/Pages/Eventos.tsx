export default function Eventos() {
  return (
    <>
      <div
        className="relative mx-auto  h-[500px] overflow-hidden bg-cover bg-center w-full"
        style={{
          backgroundImage: 'url("/img/grafitiDriebes.jpg")',
          backgroundSize: "100%",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="text-7xl pt-2 pb-2 text-white">Eventos y Fiestas</h1>
          <p className="text-2xl py-8 text-white">
            Tradiciones que nos unen y celebran nuestra identidad como comunidad.
            Descubre los eventos
          </p>
        </div>
      </div>
      
    </>
  );
}
