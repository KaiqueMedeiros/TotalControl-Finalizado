import { Link } from "react-router-dom";
import "../../styles/header.css"
import Logo from "../../assets/logo-header.png"

function Header() {
  return (
    <header class>
      <div class="navHeader">
        <img id="headerimg" src ={Logo} />
        <Link to="/aplicativo.js"> Home </Link>
        <Link to="/sobre">Sobre nós </Link>
        <Link to="/faleconosco"> Fale conosco </Link>
        <Link id ="logout"to="/"> Logout </Link>
      </div>
    </header>
  );
}
export default Header;