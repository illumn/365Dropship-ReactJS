import Button from "./Button";
import Search from "./Search";
import "./header.css";
const Header = ({
  products,
  setProducts,
  fetchedProducts,
  setFetchedProducts,
  searchInput,
  setSearchInput,
  searchResult,
  setSearchResult,
  selectedCount,
  count,
}) => {
  return (
    <>
      <header className={"header"}>
        <div className={"header__content"}>
          <Button content={"Select All"} />
          <span className={"header__selection"}>
            {`selected ${selectedCount} out of ${count} products`}
          </span>
        </div>
        <div className={"header__content"}>
          <Search
            products={products}
            setProducts={setProducts}
            fetchedProducts={fetchedProducts}
            setFetchedProducts={setFetchedProducts}
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
