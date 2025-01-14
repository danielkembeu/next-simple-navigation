import { productsList } from "@/data";
import { ProductCardLink } from "@/components/ProductCardLink";

// Page component.
/**
 * Renders the products list by mapping over the productsList variable imported from '@/data.ts' file.
 */

export default function Products() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[20%] p-3">
        <h1 className="text-5xl font-bold mb-10">Products Page</h1>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="text-xl font-medium mb-3">
            Welcome to the products page.
          </p>
          <p>Here you can find all the products.</p>
          <p>Feel free to explore the other sections of the site.</p>
          <p>Good luck!</p>
        </div>
      </div>

      <div className="my-10">
        {productsList.map((product, index) => (
          // Delegating the product item to another component: The ProductCardLink.
          <ProductCardLink key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
