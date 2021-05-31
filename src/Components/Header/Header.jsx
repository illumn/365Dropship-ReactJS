import Button from "./Button";
import Search from "./Search";
import "./header.css";
const Header = ({
  products,
  setProducts,
  allProducts,
  setAllProducts,
  searchInput,
  setSearchInput,
  searchResult,
  setSearchResult,
}) => {
  return (
    <>
      <header className={"header"}>
        <div className={"header__content"}>
          <Button content={"Select All"} />
          <span className={"header__selection"}>
            selected 0 out of 274,157 products
          </span>
        </div>
        <div className={"header__content"}>
          <Search
            products={products}
            setProducts={setProducts}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
          <Button content={"add to inventory"} />
          <i class="far fa-question-circle header__questionmark"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
