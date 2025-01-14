import React from "react";
import { productsList } from "@/data";
import Link from "next/link";

export default function Products() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold mb-10">Products Page</h1>
        <div className="text-gray-600">
          <p>Welcome to the products page.</p>
          <p>Here you can find all the products.</p>
          <p>Feel free to explore the other sections of the site.</p>
          <p>Good luck!</p>
        </div>
      </div>

      <div className="my-10">
        {productsList.map((product, index) => (
          <ProductCardLink key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

type ProductCardLinkProps = {
  product: {
    id: number;
    name: string;
    price: number;
  };
};
function ProductCardLink({ product }: ProductCardLinkProps) {
  return (
    <Link href={`/products/single-product/${product.id}`}>
      <div className="border border-gray-200 p-6 w-96 active:bg-gray-400 hover:bg-gray-100 transition-all duration-500">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p>Price: ${product.price}</p>
      </div>
    </Link>
  );
}
