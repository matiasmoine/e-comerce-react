import carrito from "../../img/carrito.png";
import "./carrito.css";

const Carrito = () => {
  return (
    <div className="divCarrito">
        <img className="imgCarrito" src={carrito} alt="carrito" />
        <p>3</p>
    </div>
  )
}

export default Carrito 