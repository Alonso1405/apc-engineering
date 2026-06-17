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

      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Categorías</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
