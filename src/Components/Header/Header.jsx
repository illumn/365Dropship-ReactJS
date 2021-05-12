import Button from "./Button.types";
import Sort from "./Sort";
import Search from "./Search";
import "./header.css";
const Header = ({ headerContent }) => {
  return (
    <header className="header">
      <div class="header__content">
        <Button content={"Select All"} />
        <span class="header__selection">
          selected 0 out of 274,157 products
        </span>
        <Sort/>
      </div>
      <div class="header__content">
        <Search />
        <Button content={"add to inventory"} />
        <i class="far fa-question-circle header__questionmark"></i>
      </div>
    </header>
  );
};

export default Header;
