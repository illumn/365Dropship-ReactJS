import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Modal from "../Modal/Modal";
import Sort from "../Header/Sort";

const Catalog = ({
  products,
  setProducts,
  fetchedProducts,
  setFetchedProducts,
  selectedProducts,
  setSelectedProducts,
  description
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
  const [productModal, setProductModal] = useState(null);

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
  const handleOpen = (products) => {
    setProductModal(products);
}

const handleClose = () => {
    setProductModal(null);
}
  return (
    <>
      <div className="sortt">
        {/* {modal !== null && <Modal modal={modal} closeModal={closeModal} />} */}
        <Sort products={products} setProducts={setProducts} />
      </div>
      <section className="catalog">
        {products.map((product) => (
          <CatalogProduct
            price={product.price}
            title={product.title}
            image={product.image}
            id={product.id}
            // openModal={openModal}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            key={product.id}
            handleOpen={handleOpen}
            description={product.description}
          />
        ))}
        {productModal && <Modal product={productModal} handleClose={handleClose}/>}
      </section>
    </>
  );
};
export default Catalog;