"use client";

import { productsList } from "@/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function SingleProduct() {
  const params = useParams<{ id: string }>();
  const [match, setMatch] = useState<any>(null);

  React.useEffect(() => {
    const product = productsList.find(
      (product) => product.id === parseInt(params.id)
    );
    setMatch(product);
  }, []);

  if (!match) {
    return <div>Product not found</div>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {match && (
        <div>
          <h1 className="text-4xl font-bold mb-3">{match.name}</h1>
          <p className="text-gray-500 font-medium text-xl">${match.price}</p>
        </div>
      )}

      <Link
        className="px-8 py-2 bg-gray-600 rounded-full mt-10 w-52 flex items-center justify-center text-white font-bold active:opacity-85 hover:opacity-90"
        href="/products"
      >
        Go back
      </Link>
    </div>
  );
}
