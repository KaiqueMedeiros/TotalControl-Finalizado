import { Link } from "react-router-dom";
import "../../styles/header.css"
import Logo from "../../assets/logo.png"

function Header() {
  return (
    <header class>
      <div class="navHeader">
        <img id="headerimg" src ={Logo} />
        <Link to="/aplicativo.js"> Home </Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre nós </Link>
        <Link id ="logout"to="/"> Logout </Link>
      </div>
    </header>
  );
}
export default Header;