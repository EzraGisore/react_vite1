import axios from "axios";
import { useState, useEffect } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/");

    setProducts(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h2>Products</h2>
      {products
        ? products.map((product) => {
            return (
              <>
                <p> {product.name}</p>
                <p>{product.price}</p>
                <img src={product.image} />
              </>
            );
          })
        : null}
    </>
  );
}
