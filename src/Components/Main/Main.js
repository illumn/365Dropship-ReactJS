import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = ({ products, setProducts, allProducts, setAllProducts }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  return (
    <main className="main">
      <Catalog
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </main>
  );
};

export default Main;
