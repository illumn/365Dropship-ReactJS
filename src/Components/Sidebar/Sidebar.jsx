import dashboard from "./assets/dashboard.svg";
import cart from "./assets/cart.svg";
import catalog from "./assets/catalog.svg";
import inventory from "./assets/inventory.svg";
import orders from "./assets/orders.svg";
import transactions from "./assets/transactions.svg";
import storesList from "./assets/storesList.svg";
import profile from "./assets/profile.jpg";
import dropship_logo from "./assets/dropship_logo.png";
import Aside from "../Aside/Aside"
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className={"nav"} id={"navbar"}>
      <nav className={"nav__container"}>
        <div>
          <a href="index.html" className={"nav__link"}>
            <img
              src={dropship_logo}
              className={"dropshipLogo"}
              alt={"365Dropship Logo"}
            />
          </a>

          <div className={"nav__list"}>
            <div className={"nav__items"}>
              <a href="#" className={"nav__link"}>
                <img src={profile} className={"profile"} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={dashboard} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={catalog} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={inventory} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={cart} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={orders} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={transactions} />
              </a>
              <a href="#" className={"nav__link"}>
                <img src={storesList} />
              </a>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
    
  );
};

export default Sidebar;
