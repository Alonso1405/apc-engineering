export default function Hero() {
  return (
    <section
      className="min-h-[700px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="w-full bg-black/60 py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h2 className="text-2xl md:text-3xl text-red-400 font-bold mb-8">
                Política de Calidad
              </h2>

              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                En Fedra Lubricantes, priorizamos la calidad de nuestros
                productos y el soporte técnico a nuestros clientes, garantizando
                que sus necesidades y requerimientos sean satisfechos.
              </p>

              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Colaboramos con la reconocida marca Petro-Canada y utilizamos
                tecnología de vanguardia para asegurar el mejor rendimiento de
                nuestros lubricantes, brindando asesoría especializada para
                optimizar su uso.
              </p>

              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Nuestra organización se basa en la disciplina y el respeto a
                nuestros colaboradores, comprometidos con la mejora continua.
              </p>

              <p className="text-gray-200 text-lg">
                Manteniéndonos como líderes en la distribución y
                comercialización de lubricantes.
              </p>
            </div>

            {/* Logo Petro-Canada */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="https://petrocanadalubricants.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/hero.png"
                  alt="Petro Canada Lubricants"
                  className="
          w-56
          md:w-72
          lg:w-96
          object-contain
          drop-shadow-2xl
          hover:scale-105
          transition
          duration-300
        "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
