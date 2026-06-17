export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/">
          <img
            src="/logo.png"
            alt="Fedra Lubricantes"
            className="h-20 md:h-24 w-auto"
          />
        </a>

        <nav className="flex gap-4 text-sm md:gap-8 md:text-base">
          <a href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </a>

          <a
            href="/#categorias"
            className="hover:text-blue-600 transition-colors"
          >
            Categorías
          </a>
        </nav>
      </div>
    </header>
  );
}
