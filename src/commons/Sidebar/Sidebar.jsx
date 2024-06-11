import "./Sidebar.css";
import Logo from "../Logo/Logo";
import { menus } from "../../data";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ open = false, onClose }) => {
  return (
    <>
      {open ? <div className="sidebar__overlay" onClick={onClose}></div> : ""}
      <aside className={`sidebar ${open ? "active" : ""}`}>
        <div className="sidebar__top">
          <Logo />

          <div className="icon__container close__btn" onClick={onClose}>
            <AiOutlineClose />
          </div>
        </div>

        <div className="sidebar__middle">
          {menus.map((menu, index) => (
            <a
              href={menu.name.toLowerCase}
              className="menu__item"
              key={index}
              onClick={onClose}
            >
              <h3>{menu.name}</h3>
            </a>
          ))}
        </div>

        <div className="sidebar__bottom"></div>
      </aside>
    </>
  );
};

export default Sidebar;
