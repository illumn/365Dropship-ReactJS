import {useState} from 'react'
import Button from "./Button";
import Sort from "./Sort";
import Search from "./Search";
import "./header.css";
const Header = () => {
  const[data, setData] = useState([]);
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
          <Search />
          <Button content={"add to inventory"} />
          <i class="far fa-question-circle header__questionmark"></i>
        </div>
      </header>
      {/* <Sort  data={data} setData={setData}/> */}
    </>
  );
};

export default Header;
