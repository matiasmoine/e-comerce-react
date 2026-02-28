import "./NavBar.css"
import auto from "../../img/logo.png"
import Carrito from "../Carrito/Carrito"
const NavBar = () => {

  return (
    <nav className="nav">
        <img className="nav-logo" src={auto} alt="logo" />
        <ul className="nav-opciones">
            <li>Audi</li>
            <li>BMW</li>
            <li>Mercedes</li>
        </ul>
        <Carrito />
    </nav>
  )
}

export default NavBar