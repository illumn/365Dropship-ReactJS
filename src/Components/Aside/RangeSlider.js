import "./rangeSlider.css";
const RangeSlider = ({ title, min, max, symbol, From, To }) => {
  return (
    <div className="range-slider__wrapper">
      <p className="range-slider__title">{title} Range</p>
      <input type="range" min={min} max={max} className="range-slider__input" />
      <div className="range-slider__scope-wrapper">
        <div className="price-from__wrapper">
          <div className="range-slider__symbol">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="range-slider__scope">
            <span className="scope">{From}</span>
          </div>
        </div>
        <div className="price-to__wrapper">
          <div className="range-slider__symbol">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="range-slider__scope">
            <span className="scope">{To}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RangeSlider;
