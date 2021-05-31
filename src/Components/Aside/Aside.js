import "./aside.css";
import SelectProduct from "./SelectProduct";
import SelectShipping from "./SelectShipping";

const Aside = () => {
  return (
    <aside className="aside catalog__filter">
      <SelectProduct title="Niche" />
      <SelectProduct title="Category" />
      <SelectShipping title="Ship From" />
      <SelectShipping title="Ship To" />
      <SelectShipping title="Select Supplier" />
     
    </aside>
  );
};
export default Aside;
