import SelectProduct from "./SelectProduct";

const CatalogProduct = ({
  image,
  title,
  price,
  openModal,
  handleSelect,
  handleOpen,
  id,
  selected,
}) => {
  const handleCheckbox = () => {
    handleSelect({ id });
  };

  const hadleProductClick = () => {
    handleOpen({ id, image, title, price });
  };

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
      <div className="catalog__img">
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
