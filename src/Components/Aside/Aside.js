import "./aside.css";
import SelectProduct from "./SelectProduct";
import SelectShipping from "./SelectShipping";
import RangeSlider from "./RangeSlider"
import ResetFilters from "./ResetFilters";

const Aside = () => {
  return (
    <aside className="aside catalog__filter">
      <SelectProduct title="Niche" />
      <SelectProduct title="Category" />
      <SelectShipping title="Ship From" />
      <SelectShipping title="Ship To" />
      <SelectShipping title="Select Supplier" />
      <RangeSlider title="Price" min="0" max="9999" From="0" To="4285" symbol="$" />
      <RangeSlider title="Profit" min="0" max="999" From="-12" To="97" symbol="%" />
      <ResetFilters />
    </aside>
  );
};
export default Aside;
