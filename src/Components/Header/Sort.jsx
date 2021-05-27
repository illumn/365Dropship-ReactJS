import "./sort.css";
const Sort = ({ data, setData }) => {
  const sortAsc = (item) => {
    item.sort((a, b) => a.price - b.price);
    setData(item);
  };

  const sortDesc = (item) => {
    item.sort((a, b) => b.price - a.price);
    setData(item);
  };

  const sortA_Z = (item) => {
    item.sort((a, b) => a.title.localeCompare(b.title));
    setData(item);
  };

  const sortZ_A = (item) => {
    item.sort((a, b) => b.title.localeCompare(a.title));
    setData(item);
  };

  const Sorting = (value, item) => {
    if (value == "asc") {
      sortAsc(item);
    } else if (value == "desc") {
      sortDesc(item);
    } else if (value == "A-Z") {
      sortA_Z(item);
    } else if (value == "Z-A") {
      sortZ_A(item);
    } else {
      item = [""];
    }
    setData(item);
  };

  const handleSort = (e) => {
    let value = e.target.value;
    Sorting(value, [...data]);
  };

  return (
    <div className="sort__section" onChange={handleSort}>
      <i class="fas fa-sort-amount-up-alt" id="icon"></i>
      <select id="sort">
        <option value="default">New Arrivals</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
};
export default Sort;
