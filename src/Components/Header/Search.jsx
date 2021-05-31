import "./search.css";
import { useState, useEffect } from "react";


const Search = ({
  allProducts,
  setProducts,
  searchInput,
  setSearchInput,
  result,
  setResult
}) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const search = () => {
    setResult(searchInput);
  };
  useEffect(() => {
    const res = allProducts.filter((e) => {
      return e.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setProducts(res);
  }, [result]);

  return (
    <div classNameName={"search__content"}>
      <input
        id={"search"}
        className={"search__input"}
        type={"text"}
        placeholder={"Search"}
        value={searchInput}
        onChange={handleChange}
      />
      <button
        id={"search__button"}
        className={"header__searchbtn"}
        type={"submit"}
        onClick={search}
      >
        <i className="fas fa-search fa-rotate-90"></i>
      </button>
    </div>
  );
};
export default Search;
