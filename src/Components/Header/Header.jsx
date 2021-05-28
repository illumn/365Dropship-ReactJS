import Button from "./Button";
import Search from "./Search";
import "./header.css";
const Header = ({
  data,
  setData,
  allData,
  setAllData,
  searchInput,
  setSearchInput,
  result,
  setResult,
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
            data={data}
            setData={setData}
            allData={allData}
            setAllData={setAllData}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            result={result}
            setResult={setResult}
          />
          <Button content={"add to inventory"} />
          <i class="far fa-question-circle header__questionmark"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
