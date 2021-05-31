import "./rangeSlider.css";
const RangeSlider = ({ title, min, max, symbol, From, To }) => {
  return (
    <div className="range-slider__wrapper">
      <p className="range-slider__title">{title} Range</p>
      <input type="range" min={min} max={max} className="range-slider__input" />
      <div className="range-slider__scope-wrapper">
        <div className="amount-from__wrapper">
          <div className="range-slider__symbol">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="range-slider__amount">
            <span className="amount">{From}</span>
          </div>
        </div>
        <div className="amount-to__wrapper">
          <div className="range-slider__symbol">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="range-slider__amount">
            <span className="amount">{To}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RangeSlider;
