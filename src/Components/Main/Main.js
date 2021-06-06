import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = ({
  products,
  setProducts,
  FetchedProducts,
  setFetchedProducts,
}) => {
  const [idArray, setIdArray] = useState([]);

  return (
    <main className="main">
      <Catalog
        idArray={idArray}
        setIdArray={setIdArray}
        products={products}
        setProducts={setProducts}
        FetchedProducts={FetchedProducts}
        setFetchedProducts={setFetchedProducts}
      />
    </main>
  );
};

export default Main;
