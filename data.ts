/**
 * Dummy data source to test.
 * export the productsList variable to be used by the other files.
 * It's an array of type: { id: number, name: string, price: number }
 */

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const productsList: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 1.94,
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.16,
  },
  {
    id: 4,
    name: "Product 4",
    price: 8.99,
  },
];
