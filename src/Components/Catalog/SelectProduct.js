import "./selectProduct.css"
import Checkbox from "./Checkbox";
import Button from "../Header/Button";
const SelectProduct = ({catalogSelected, handleCatalogSelect}) => {
    return (
        <div className={`catalog__head ${catalogSelected ? "catalog__head--active" : ""}`}>
            <Checkbox checked={catalogSelected} handleCheckboxChange={handleCatalogSelect}/>
            <Button content="add to inventory" />
        </div>
    )
}
export  default SelectProduct;

