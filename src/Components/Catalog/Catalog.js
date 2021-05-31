import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Sort from "../Header/Sort";

const Catalog = ({ products, setProducts, allProducts, setAllProducts }) => {
  const getProducts = async () => {
    const request = await fetch("https://fakestoreapi.com/products");
    return request.json();
  };
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setAllProducts(response);
    });
  }, []);
  return (
    <>
      <div className="goddamnsort">
        <Sort products={products} setProducts={setProducts} />
      </div>
      <section className="catalog">
        {products.map((product) => (
          <CatalogProduct
            price={product.price}
            title={product.title}
            image={product.image}
          />
        ))}
      </section>
    </>
  );
};
export default Catalog;
