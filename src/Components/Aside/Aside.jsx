import "./aside.css";
import Sidebar from "../Sidebar/Sidebar"

const Aside = ({ title, light }) => {
    return (
      <div className="sidebar__wrapper">
        <div className={light ? "sidebar_header--light" : "sidebar_header"}>
          {title}
        </div>
      </div>
    );
  };
  

const AsideBar = () => {
  return (
    <aside className="sidebar">
      <Sidebar />
      <div className="sidebar__menu">
        <Aside title="Choose Niche" />
        <Aside title="Choose Category" light />
      </div>
    </aside>
  );
};
export default AsideBar;
