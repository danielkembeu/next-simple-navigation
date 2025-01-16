"use client"; // This directive turns the component into a client component.
// Without it you can't use hooks for example.

import { ButtonLink } from "@/components/ButtonLink";
import { useFindProductById } from "@/hooks/products/useFindProductById";
import { useParams } from "next/navigation";

export default function SingleProduct() {
  const { id } = useParams<{ id: string }>(); // Get the product's ID from the url parameter.

  // Custom hook to use find product by its ID and returns both the product (if found) and the error object (if not found).
  const { product, error } = useFindProductById(+id);

  // Checking if we really have a product found.
  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        {/* Displays the error message in case the product is not found. */}
        <div className="text-2xl font-medium">😖 {error}</div>

        {/* Render the back button in case of an error */}
        <ButtonLink href="/products" />
      </div>
    );
  }

  // When the product is found, the UI displays properly
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
        <p className="text-gray-500 font-medium text-xl">${product.price}</p>
      </div>

      {/* Displays a back button to '/products' with a custom button text */}
      <ButtonLink href="/products" customText="See all products" />
    </div>
  );
}
