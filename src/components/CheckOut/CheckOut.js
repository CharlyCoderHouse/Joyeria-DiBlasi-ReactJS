import "../Cart/Cart.css";
import { useState, useEffect, useContext } from "react";
import { Button } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

// MUESTRA LOS DETALLES DE LA COMPRA LUEGO DE GRABAR EL PEDIDO EN FIREBASE

const CheckOut = () => {
  const { cart, clear, dataUser } = useContext(CartContext);
  const [newOrder, setNewOrder] = useState([]);
  const { idFirestore } = useParams();
  const totalCart = newOrder.reduce((acumulador, items) => acumulador + items.quantity * items.precio,0);
  
  
  const getProducts = () => {
    setNewOrder(cart);
    clear();
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="carrito">
      <h2>Estimad@ {dataUser.nombre}, el pedido fue enviado con exito!</h2>
      <br></br>
      <h4>Tu id de pedido es: {idFirestore}</h4>
      <h4>El total del pedido es: $ {totalCart}</h4>
      <div className="modal-carrito">
        <div className='productoEnCarrito'>
            <h5>Imagen</h5>
            <h5>Cantidad</h5>
            <h5>Precio Unit.</h5>
            <h5>Precio Total</h5>
        </div>
        {newOrder.map((item) => (
          <div key={item.id} className="productoEnCarrito">
            <img src={`../${item.img}`} alt={`${item.alt}`} style={{ width: '7rem' }}></img>
            <p>{item.name}</p>
            <p>{item.quantity} unid.</p>
            <p>${item.precio}</p>
            <p>${item.precio * item.quantity}</p>
          </div>
        ))}
      </div>
      <br></br>
      <h4>En unos instantes le llegara a su correo {dataUser.email} los datos de su compra.</h4>
      <h4>Muchas gracias por comprar en nuestra Tienda Virtual</h4>
      <h2>Joyería Puga</h2>
      <Link
                to={'/'} >
                <Button className='btn-warning' >Volver</Button>        
      </Link>
    </div>
  );
};

export default CheckOut;