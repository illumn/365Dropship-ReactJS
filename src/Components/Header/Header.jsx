import Button from "./Button.types";
import "./header.css";
const Header = ({ headerContent }) => {
  return (
    <header className="header">
     <div class="header__content">
          <Button content={"Select All"}/>
            <span class="header__selection">selected 0 out of 274,157 products</span>
        </div>
        <div class="header__content">
            <input id="search" class="search__input" type="text" placeholder="Search" />
            <button id="search__button" class="header__searchbtn" type="submit">
                <i class="fas fa-search fa-rotate-90"></i>
            </button>
           <Button content={"add to inventory"}/>
            <i class="far fa-question-circle header__questionmark"></i>
        </div>
    </header>
  );
};

export default Header;
