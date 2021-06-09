import SelectProduct from "./SelectProduct";

const CatalogProduct = ({
  image,
  title,
  price,
  product,
  openModal,
  selectedProducts,
  setSelectedProducts,
  handleOpen,
  id,
  selected,
  description

}) => {
  const handleCheckbox = () => {
    setSelectedProducts([id, ...selectedProducts]);
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((item) => item !== id));
    }
  };
  console.log(selectedProducts);

  const productClicked = () => {
    handleOpen({id, image, title, price,description})
}
  return (
    <div
      className={`catalog__product ${
        selectedProducts.includes(id) ? "catalog__product--border" : ""
      }`}
      onClick={openModal}
    >
      <SelectProduct
        catalogSelected={selected}
        handleCatalogSelect={handleCheckbox}
        handleCheckbox={handleCheckbox}
        selectedProducts={selectedProducts}
        id={id}
      />
      <div className="catalog__img" onClick={productClicked}>
        <img src={image} alt="" />
      </div>
      <div className="catalog__title">{title}</div>
      <div className="catalog__prices">
        $60 RRP <span className="border"></span>
        {price}$<span className="border"></span>
        $60 RRP
      </div>
    </div>
  );
};
export default CatalogProduct;