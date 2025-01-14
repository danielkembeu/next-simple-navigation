import { Product } from "@/data";
import Link from "next/link";

/**
 * Renders a single product card that offers the possibility to navigate to the product details page.
 */

// The component's props type.
type ProductCardLinkProps = {
  product: Product;
};

export function ProductCardLink({ product }: ProductCardLinkProps) {
  return (
    <Link href={`/products/single-product/${product.id}`}>
      {/* Managing the light and the dark theme text and background styles. */}
      <div className="dark:hover:text-gray-800 dark:hover:bg-gray-400 border border-gray-200 p-6 w-96 active:bg-gray-400 hover:bg-gray-100 transition-all duration-500">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p>
          Price: <span className="font-bold">${product.price}</span>
        </p>
      </div>
    </Link>
  );
}
