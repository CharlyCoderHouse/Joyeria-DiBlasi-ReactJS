import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const cantCarrito = cart.reduce((acumulador, cantidad) => acumulador + cantidad.quantity, 0);
  
  return (
    <div className="textCart">
      <i className="fa-solid fa-cart-shopping carrito"></i> Carrito: {cantCarrito}
    </div>
    )
}

export default CartWidget