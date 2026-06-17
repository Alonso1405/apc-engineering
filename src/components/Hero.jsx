export default function Hero() {
  return (
    <section
      className="h-[650px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black/50 p-8 rounded-xl max-w-2xl">
          <h1 className="text-5xl font-bold text-white">
            Soluciones Integrales en Lubricación Industrial
          </h1>

          <p className="text-gray-200 mt-4 text-lg">
            Lubricantes de alto desempeño para la industria, generación de
            energía, minería, transporte y manufactura.
          </p>
        </div>
      </div>
    </section>
  );
}
