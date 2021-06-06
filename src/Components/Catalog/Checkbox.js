import "./checkbox.css";

const Checkbox = ({isClicked, checkboxChange }) => {
  return (
    <label className="catalog__checkbox-container">
      <input checked={isClicked} type="checkbox" onChange={checkboxChange} />
      <span className="catalog__checkmark" />
    </label>
  );
};

export default Checkbox;
