/**
 * This hook is used to search specific products
 */

import { useEffect, useState } from "react";
import { Product, productsList } from "@/data";

export default function useSearchProduct() {
  // State to store the search term and the filtered products
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productsList);

  // useEffect hook to filter the products based on the search term
  useEffect(() => {
    const filtered = productsList.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  // Return the search term, setSearchTerm function, and the filtered products.
  // whenever we call this hook, it will return those results to the user.
  return {
    searchTerm,
    setSearchTerm,
    filteredProducts,
  };
}
