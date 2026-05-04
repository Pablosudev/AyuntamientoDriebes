




export default function Turismo() {
  return (
    <div className="bg-black pb-10 text-center place-items-center overflow-hidden">
        <div
          className="mx-auto mb-8 h-[500px] overflow-hidden bg-cover w-full"
          style={{
            backgroundImage: 'url("/img/hermita.jpg")',
            backgroundPosition: "center 90%",
          }}
        >
          <div className="h-full w-full bg-black/30 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Descubre Driebes
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-white">
                Patrimonio, naturaleza y tradición
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}   