import "./sort.css";
const Sort = () => {
  return (
    <div className="sort__section">
      <i class="fas fa-sort-amount-up-alt" id="icon"></i>
      <select id="sort">
        <option>Sort By: New Arrivals </option>
        <option value="asc">Price: High To Low</option>
        <option value="desc">Price: Low To High</option>
        <option value="profitH">Profit: High To Low</option>
        <option value="profitL">Profit: Low To High</option>
      </select>
    </div>
  );
};

export default Sort;
