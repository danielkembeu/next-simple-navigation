// This is a custom hook. They start with the "use" keyword.
// Without that, React won't recognize them as custom hooks and they will be treated as normal JavaScript functions.
import { useState, useEffect } from "react";
import { Product, productsList } from "@/data";

// The hooks takes an id as an argument in order to find the matching product.
export function useFindProductById(productId: number) {
  // the states to hold the found produc and the error message
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Finding the matching product in the list of products.
  useEffect(() => {
    const productFound = productsList.find((p) => p.id === productId);
    if (productFound) {
      setProduct(productFound); // update the state if the product was found
    } else {
      setError(`Product of id "${productId}" does not exist`); // else set the error message
    }
  }, [productId]); // whenever the productId changes, the useEffect is triggered.

  // Return the found product and the error message.
  // whenever we call this hook, it will return those results to the user.
  return { product, error };
}
