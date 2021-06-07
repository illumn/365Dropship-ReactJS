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
  selectedProducts,
  setSelectedProducts,
  sellectAllProducts
}) => {
  return (
    <>
      <header className={"header"}>
        <div className={"header__content"}>
          <div className="header__select" onClick={sellectAllProducts}>
          <Button content={"Select All"} />
          </div>
          <span className={"header__selection"}>
            selected {selectedProducts.length} out of 274,157 products
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
          <i className="far fa-question-circle header__questionmark"></i>
        </div>
      </header>
    </>
  );
};

export default Header;