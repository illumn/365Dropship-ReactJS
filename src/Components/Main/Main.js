import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = ({ products, setProducts, FetchedProducts, setFetchedProducts }) => {
  
  return (
    <main className="main">
      <Catalog
        products={products}
        setProducts={setProducts}
        FetchedProducts={FetchedProducts}
        setFetchedProducts={setFetchedProducts}
      />
    </main>
  );
};

export default Main;
