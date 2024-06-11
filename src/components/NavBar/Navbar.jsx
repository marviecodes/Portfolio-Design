import "./Navbar.css";
import Logo from "../../commons/Logo/Logo";
import { menus } from "../../data";
import SocialHandles from "../../commons/SocialHandles/SocialHandles";
import { CiMenuFries } from "react-icons/ci";
import Sidebar from "../../commons/Sidebar/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleBtn = () => {
    setOpenSidebar((op) => !op);
  };

  return (
    <nav className="navigation__bar">
      <Sidebar open={openSidebar} onClose={toggleBtn} />

      <div className="column">
        <Logo />
      </div>

      <div className="column menu__container">
        {menus.map((menu, index) => (
          <a href={menu.name.toLowerCase} className="menu__item" key={index}>
            {menu.name}
          </a>
        ))}
      </div>

      <div className="column">
        <SocialHandles />
        <a href="#contact" className="btn btn__primary">
          Let&apos;s Talk
        </a>

        <div className="menu__icon" onClick={() => setOpenSidebar((op) => !op)}>
          <CiMenuFries />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
