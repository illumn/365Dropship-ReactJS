import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";

const Catalog = () => {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const request = await fetch("https://fakestoreapi.com/products");
    return request.json();
  };
  useEffect(() => {
    getProducts().then((response) => {
      setData(response);
    });
  }, []);
  return (
    <section className="catalog">
      {data.map((product) => (
        <CatalogProduct
          price={product.price}
          title={product.title}
          image={product.image}
        />
      ))}
    </section>
  );
};
export default Catalog;
