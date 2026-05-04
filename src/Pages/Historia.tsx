export default function Historia() {
  return (
    <>
      <div className="bg-black pb-10 text-center place-items-center overflow-hidden">
        <div
          className="mx-auto mb-8 h-[500px] overflow-hidden bg-cover bg-center w-full "
          style={{ backgroundImage: 'url("/img/driebesHistoria.jpg")' }}
        >
          <div className="h-full w-full bg-black/30 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Historia de Driebes
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-white">
                Siglos de tradición y cultura
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto text-3xl">
        <h1>Un viaje a Través del Tiempo</h1>
      </section>
      <section></section>
      <section className="bg-yellow-100 border-l-4 border-yellow-700 rounded-xl w-240 px-5 py-6 mx-auto">
        <h1 className="text-black text-3xl my-6 font-bold text-center">Memoria Colectiva</h1>
        <p className="text-black text-center">
          "La historia de Driebes es la historia de sus gentes, de familias que
          han trabajado la tierra durante generaciones, de vecinos que han
          mantenido vivas las tradiciones, y de una comunidad que ha sabido
          preservar su identidad a través del tiempo." Cada rincón del pueblo
          cuenta una historia, cada edificio guarda recuerdos, y cada tradición
          es un hilo que une el pasado con el presente, creando el rico tapiz
          cultural que caracteriza a Driebes
        </p>
      </section>
    </>
  );
}
