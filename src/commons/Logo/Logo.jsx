import "./Logo.css";
import { IoLogoEdge } from "react-icons/io5";

const Logo = () => {
  return (
    <div className="logo__container">
      <IoLogoEdge className="icon" />
      <h2>Marvelous</h2>
    </div>
  );
};

export default Logo;
