import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const cantCarrito = cart.reduce((acumulador, cantidad) => acumulador + cantidad.quantity, 0);
  
  return (
    <>
      <i className="fa-solid fa-cart-shopping carrito"></i> Carrito: {cantCarrito}
    </>
    )
}

export default CartWidget