import SelectProduct from "./SelectProduct";

const CatalogProduct = ({
  image,
  title,
  price,
  openModal,
  handleSelect,
  id,
  selected,
}) => {
  const handleCheckbox = () => {
    // handleSelect({ id });
  };

  // const hadleProductClick = () => {
  //   handleOpen({ id, image, title, price });
  // };

  return (
    <div
      className={`catalog__product ${
        selected ? "catalog__product--border" : ""
      }`}
      onClick={openModal}
    >
      <SelectProduct
        catalogSelected={selected}
        handleCatalogSelect={handleCheckbox}
      />

      <div className="catalog__product-body">
        <div className="catalog__img">
          <img src={image} alt="" />
        </div>

        <div className="catalog__title">{title}</div>
        <div className="catalog__prices">${price}</div>
      </div>
    </div>
  );
};
export default CatalogProduct;
