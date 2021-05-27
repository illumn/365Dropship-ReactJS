import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = () => {
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
    <main className="main">
      <Catalog />
    </main>
  );
};



export default Main;
