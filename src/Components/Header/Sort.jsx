import "./sort.css"
const Sort = () => {
  return (
    <div className="sort__section">
      <select id="sort">
        <option>Sort By: New Arrivals</option>
        <option value="asc">Price: High To Low</option>
        <option value="desc">Price: Low To High</option>
        <option value="desc">Profit: High To Low</option>
        <option value="desc">Price: Low To High</option>
      </select>
    </div>
  );
};

export default Sort;
