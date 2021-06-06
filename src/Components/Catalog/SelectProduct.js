import "./selectProduct.css";
import Checkbox from "./Checkbox";
import Button from "../Header/Button";
const SelectProduct = ({ checkboxChange, isClicked }) => {
  return (
    <div className={`catalog__select`}>
      <div
        className={`catalog__checkbox ${
          isClicked && "catalog__checkbox--clicked"
        }`}
      >
        <Checkbox checkboxChange={checkboxChange} isClicked={isClicked} />
      </div>
      <div className="catalog__inventory-button">
        <Button content="Add to Inventory" />
      </div>
    </div>
  );
};
export default SelectProduct;
