import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Modal from "../Modal/Modal"
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
  
  const [modal, setModal] = useState(null);

  const openModal = (e) => {
    setModal(
        products.filter((product) => {
            return Number(product.id) === Number(e.target.id);
        })
    );
};

const closeModal = () => {
  setModal(null);
};

  return (
    <>
    <div className="sortt">
        {modal !== null && <Modal modal={modal} closeModal={closeModal} />}
      <Sort products={products} setProducts={setProducts} />
    </div>
    <section className="catalog">
      {products.map((product) => (
        <CatalogProduct
          price={product.price}
          title={product.title}
          image={product.image}
          id={product.id}
          openModal={openModal}
        />
      ))}
    </section>
    </>
  );
};
export default Catalog;
