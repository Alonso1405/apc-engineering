import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/categoria/${category.slug}`}
      className="
      block
      bg-white
      rounded-xl
      shadow-md
      p-6
      hover:shadow-xl
      hover:-translate-y-1
      transition
      "
    >
      <h3 className="text-xl font-semibold">{category.name}</h3>
    </Link>
  );
}
