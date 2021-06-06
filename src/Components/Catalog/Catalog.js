import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Modal from "../Modal/Modal";
import Sort from "../Header/Sort";

const Catalog = ({
  products,
  setProducts,
  idArray,
  setIdArray,
  handleOpen,
  fetchedProducts,
  setFetchedProducts,
  selectedProducts,
  setSelectedProducts,
}) => {
  const getProducts = async () => {
    const request = await fetch("https://fakestoreapi.com/products");
    return request.json();
  };

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setFetchedProducts(response);
    });
  }, []);

  // const [modal, setModal] = useState(null);

  // const openModal = (e) => {
  //   setModal(
  //     products.filter((product) => {
  //       return Number(product.id) === Number(e.target.id);
  //     })
  //   );
  // };

  // const closeModal = () => {
  //   setModal(null);
  // };

  return (
    <>
      <div className="sortt">
        {/* {modal !== null && <Modal modal={modal} closeModal={closeModal} />} */}
        <Sort products={products} setProducts={setProducts} />
      </div>
      <section className="catalog">
        {products.map((product) => (
          <CatalogProduct
            handleOpen={handleOpen}
            key={product.id}
            idArray={idArray}
            price={product.price}
            title={product.title}
            image={product.image}
            // openModal={openModal}
            id={product.id}
            setIdArray={setIdArray}
            description={product.description}
          />
        ))}
      </section>
    </>
  );
};
export default Catalog;
