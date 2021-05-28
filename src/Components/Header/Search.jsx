import "./search.css";
import { useState } from "react";

const Search = ({ setData, allData }) => {
  const [searchInput, setSearchInput] = useState();
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const Searching = () => {
    let filtered = allData.filter((products) =>
      products.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setData(filtered);
  };



  return (
    <div classNameName={"search__content"}>
      <input
        id={"search"}
        className={"search__input"}
        type={"text"}
        placeholder={"Search"}
        value={searchInput}
        onChange={handleSearch}
      />
      <button
        id={"search__button"}
        className={"header__searchbtn"}
        type={"submit"}
        onClick={Searching}
      >
        <i className="fas fa-search fa-rotate-90"></i>
      </button>
    </div>
  );
};
export default Search;
