import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.precio), 0);
    
    return (
        <div>
            <div className='encabezado'>
                <h1>Su carrito de compras</h1>
                <Link
                    to={'/'} >
                    <Button className='btn-warning'>Volver</Button>        
                </Link>
            </div>
            { cart.length===0 ? (
                <>
                <h2>No selecciono productos!</h2> 
                <h2> haga click en Volver y seleccione el producto que esta buscando</h2>
                </>)
            : 
            (
                <>
                  <h3>Total de su Pedido: $ {totalCart}.-</h3>
                  <br/>
                  <div className='modal-carrito'>
                    <div className='productoEnCarrito'>
                        <h5>Imagen</h5>
                        <h5>Cantidad</h5>
                        <h5>Precio Unit.</h5>
                        <h5>Precio Total</h5>
                        <h5>X</h5>
                    </div>
                    {cart.map((item) => (
                        <div key={item.id} className='productoEnCarrito'>
                            <img src={`${item.img}`} alt={`${item.alt}`} style={{ width: '7rem' }}></img>
                            <p>{item.name}</p>
                            <p>{item.quantity} unid.</p>
                            <p>$ {item.precio}.-</p>
                            <p>$ {item.precio*item.quantity}.-</p>
                            {/* <button onClick={() => removeItem(item.id)}>Eliminar</button> */}
                            <button className='boton-eliminar' onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash-can"></i></button>

                        </div>
                    ))}
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Cart;
