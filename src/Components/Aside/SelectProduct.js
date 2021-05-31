import "./selectProduct.css"
const SelectProduct = ({title}) => {
    return (
        <div className={"select-product__wrapper select-product__wrapper--"+ title}>
      <select className={"select-product__options select-product__options--"+ title}>
          <option>Choose {title}</option>
          <option></option>
      </select>
    </div>

  
    )
}

export default SelectProduct
