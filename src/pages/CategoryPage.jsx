import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCategory();
  }, [slug]);

  async function loadCategory() {
    const { data: categoryData, error: categoryError } = await supabase
      .from("classifications")
      .select("*")
      .eq("slug", slug)
      .single();

    console.log("CATEGORY", categoryData);
    console.log("CATEGORY ERROR", categoryError);

    if (!categoryData) return;

    setCategory(categoryData);

    const { data: productsData, error: productsError } = await supabase
      .from("products")
      .select("*")
      .eq("classification_id", categoryData.id)
      .eq("active", true)
      .order("sort_order");

    console.log("PRODUCTS", productsData);
    console.log("PRODUCTS ERROR", productsError);

    setProducts(productsData || []);
  }

  if (!category) {
    return <div className="p-10">Cargando...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/producto/${product.slug}`}
            className="
            group
            bg-white
            rounded-2xl
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-300
            overflow-hidden
            border border-gray-100
          "
          >
            {/* Imagen */}
            <div className="bg-gray-50 h-64 flex items-center justify-center p-6">
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="
                max-h-52
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
              />
            </div>

            {/* Información */}
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-3 min-h-[60px]">
                {product.short_description}
              </p>

              <div className="mt-5 flex items-center text-blue-600 font-semibold">
                Ver producto
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
