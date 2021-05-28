import "./sort.css";
const Sort = ({ data, setData }) => {
  const SortItems = (e) => {
    console.log(e.target.value);
    if (e.target.value === "asc") {
      data.sort((a, b) => a.price - b.price);
      handleSort(data);
    }
    if (e.target.value === "desc") {
      data.sort((a, b) => b.price - a.price);
      handleSort(data);
    }
    if (e.target.value === "A-Z") {
      data.sort((a, b) => a.title.localeCompare(b.title));
      handleSort(data);
    }
    if (e.target.value === "Z-A") {
      data.sort((a, b) => b.title.localeCompare(a.title));
      handleSort(data);
    }
  };

  const handleSort = () => {
    setData(
      data.map((product) => {
        return product;
      })
    );
  };

  return (
    <div className="sort__section" onChange={SortItems}>
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
