import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/categoria/${category.slug}`}
      className="
        group
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-2xl
        border
        border-gray-100
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={category.banner_image || "/categoria-default.jpg"}
          alt={category.name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-6">
        <h3
          className="
            text-xl
            font-bold
            text-gray-900
            mb-3
          "
        >
          {category.name}
        </h3>

        <p className="text-gray-600 text-sm mb-5">
          Explorar productos especializados para esta categoría.
        </p>

        <div
          className="
            flex
            items-center
            text-red-600
            font-semibold
          "
        >
          Ver productos
          <span
            className="
              ml-2
              transition-transform
              group-hover:translate-x-2
            "
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
