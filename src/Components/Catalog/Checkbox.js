import "./checkbox.css";

const Checkbox = ({
  checked,
  handleCheckboxChange,
  handleCheckbox,
  isChecked,
}) => {
  return (
    <label className="catalog__checkbox" onClick={handleCheckbox}>
      <input type="checkbox" onChange={handleCheckbox} checked={isChecked} />
      <span className="catalog__checkmark" />
    </label>
  );
};

export default Checkbox;