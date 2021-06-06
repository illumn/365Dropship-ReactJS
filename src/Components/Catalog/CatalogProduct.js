import { useState, useEffect } from "react";
import SelectProduct from "./SelectProduct";

const CatalogProduct = ({
  idArray,
  id,
  image,
  title,
  price,
  setIdArray,
}) => {
  const [selected, setselected] = useState(false);

  const Changed = (event) => {
    setselected(event.target.checked);

    setIdArray((prev) => {
      const foundId = prev.find((product) => product === id);
      if (foundId) {
        const newArr = prev.filter((product) => product !== id);
        return newArr;
      } else {
        return [...prev, id];
      }
    });
  };
  useEffect(() => {
    const isFound = idArray.find((product) => product == id);
    setselected(isFound);
  }, [idArray]);

  return (
    <div
      className={`catalog__product ${
        selected ? `catalog__product--border` : ""
      }`}
    >
      <SelectProduct isClicked={selected} checkboxChange={Changed} />
        <div className="catalog__photo">
          <img src={image} />
        </div>
        <div className="catalog__title">{title}</div>
        <div className="catalog__prices">{price}$</div>
      </div>
 
  );
};
export default CatalogProduct;
