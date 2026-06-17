import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const { data } = await supabase
      .from("classifications")
      .select("*")
      .eq("active", true)
      .order("sort_order");

    setCategories(data || []);
  }

  return (
    <>
      <Hero />

      <section
        id="categorias"
        className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold uppercase tracking-widest">
              Nuestro Portafolio
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Soluciones para cada industria
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
              Contamos con una amplia gama de lubricantes, grasas y fluidos
              especializados para aplicaciones industriales, generación de
              energía, manufactura, minería, transporte y sector alimenticio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
