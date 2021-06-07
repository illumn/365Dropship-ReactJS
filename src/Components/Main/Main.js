import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = ({
  products,
  setProducts,
  FetchedProducts,
  setFetchedProducts,
  selectedProducts,
  setSelectedProducts,
  unselectAll
}) => {
  return (
    <main className="main">
      <Catalog
        products={products}
        setProducts={setProducts}
        FetchedProducts={FetchedProducts}
        setFetchedProducts={setFetchedProducts}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        unselectAll={unselectAll}
      />
    </main>
  );
};

export default Main;