
const CartWidget = (props) => {
  return (
    <>
      <i className="fa-solid fa-cart-shopping carrito"></i> Carrito: {props.items}
    </>
    )
}

export default CartWidget