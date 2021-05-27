const CatalogProduct = ({ image, title, price }) => {
    return (
      <div className="catalog__product">
        <div className="catalog__photo">
          <img src={image} />
        </div>
        <div className="catalog__title">{title}</div>
        
        <div className="catalog__prices">{price}$</div>
      </div>
    );
  };
  export default CatalogProduct;