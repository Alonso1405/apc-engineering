import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function ProductPage() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, [slug]);

  async function loadProduct() {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        classifications (
          id,
          name,
          slug
        )
      `,
      )
      .eq("slug", slug)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setProduct(data);
  }

  if (!product) {
    return <div className="p-10">Cargando producto...</div>;
  }

  const image = product.images?.[0]?.url || "/placeholder-product.jpg";

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <img
            src={image}
            alt={product.name}
            className="w-full h-[500px] object-contain"
          />
        </div>

        <div>
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            {product.classifications?.name}
          </span>

          <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

          <p className="text-lg text-gray-600 mb-8">
            {product.short_description}
          </p>

          {product.technical_sheet_url && (
            <a
              href={product.technical_sheet_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg mr-4"
            >
              Ver ficha técnica
            </a>
          )}
        </div>
      </div>

      {product.popup_content && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Información Técnica</h2>

          <div className="bg-gray-100 rounded-xl p-8 whitespace-pre-line">
            {product.popup_content}
          </div>
        </section>
      )}
    </div>
  );
}
