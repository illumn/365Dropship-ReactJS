import "./Button.types";
import Button from "./Button.types";
import "./header.css";
const Header = ({ headerContent }) => {
  return (
  
    <header className="header">
       <Button content={"Select All"} />
    <div className="header__content">
    
        <input id="search" className="search__input" type="text" placeholder="Search" />
        <button id="search__button" className="header__searchbtn" type="submit">
            <i className="fas fa-search fa-rotate-90"></i>
        </button>
       <Button content={"Add to inventory"}/>
        <i className="far fa-question-circle header__questionmark"></i>
    </div>
</header>
    

  );
};

export default Header;
