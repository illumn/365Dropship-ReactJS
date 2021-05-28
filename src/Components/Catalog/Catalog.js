import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Sort from "../Header/Sort";

const Catalog = () => {
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);
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
    <>
      <div className="goddamnsort">
        <Sort data={data} setData={setData} />
      </div>
      <section className="catalog">
        {data.map((product) => (
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
