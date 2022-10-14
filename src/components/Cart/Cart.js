import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const { cart, clear, removeItem } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.precio), 0);
    
    const db = getFirestore();

    const createOrder = () => { 
        const order = {
            buyer: {
                name: 'Juan',
                phone: '2235534546',
                email: 'juan@gmail.com'
            },
            items: cart,
            date: moment().format('DD/MM/YYYY, h:mm:ss a'),
            total: totalCart,
        };
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({ id }) => {
            updateStockItems();
            console.log(id);
            alert('Felicidades por tu compra');
        })
        .catch(() => alert('No se pudo realizar la compra, intenta más tarde'));
    };

    const updateStockItems = () => {
        cart.forEach((element) => {
            const queryUpdate = doc(db, 'items', element.id );
            updateDoc(queryUpdate, {
                stock: element.stock - element.quantity,})
            .then(() => {
                if (cart[cart.length -1].id === element.id) {
                    clear();
                    navigate('/');
                }
                console.log('Stock Actualizado');
            })
            .catch(() => {console.log('Error al Actualizar el Stock');})
            });
    }; 

    return (
        <div className="carrito">
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
                            <button className='boton-eliminar' onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash-can"></i></button>

                        </div>
                    ))}
                    </div>
                    <Button className='btn-warning' onClick={createOrder}>Crear Orden de Compra</Button>     
                </>
            )
            }
        </div>
    )
}

export default Cart;
