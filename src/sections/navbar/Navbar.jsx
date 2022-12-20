import "./navbar.css";
import Logo from "../../assets/avatar.jpg";
import dataNavbar from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../context/modal-context";

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="logo"></img>
        </a>
        <ul className="nav__menu">
          {dataNavbar.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
