const CatalogProduct = ({ image, title, price, openModal, id }) => {
  return (
    <div className="catalog__product" id={id} onClick={openModal}>
      <div className="catalog__photo">
        <img src={image} id={id} />
      </div>
      <div className="catalog__title" id={id}>{title}</div>
      
      <div className="catalog__prices" id={id}>{price}$</div>
    </div>
  );
};
export default CatalogProduct;