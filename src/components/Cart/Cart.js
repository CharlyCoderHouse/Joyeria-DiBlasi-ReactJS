import "./Cart.css";
import logo from "../../logo.svg";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'animate.css';

const Cart = () => {
    const navigate = useNavigate();
    const [orderLista, setOrderLista] = useState(false);
    const { cart, removeItem, dataUser } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.precio), 0);
    const db = getFirestore();

    const createOrder = () => { 
        const order = {
            buyer: {
                uid: dataUser.id, 
                name: dataUser.nombre,
                phone: dataUser.phone,
                email: dataUser.email
            },
            items: cart,
            date: moment().format('DD/MM/YYYY, h:mm:ss a'),
            total: totalCart,
        };
        setOrderLista(true);
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({ id }) => {
            updateStockItems(id);
            console.log(id);
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos, No se pudo realizar la compra, intenta más tarde",
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
              });
           })
        .finally(()=>{
            setOrderLista(false);
        });
    };

    const updateStockItems = (orderId) => {
        cart.forEach((element) => {
            const queryUpdate = doc(db, 'items', element.id );
            updateDoc(queryUpdate, {
                stock: element.stock - element.quantity,})
            .then(() => {
                if (cart[cart.length -1].id === element.id) {
                    navigate(`order/${orderId}`, { replace: true });
                }
                Swal.fire({
                    title: 'Muchas gracias por su compra ! su orden esta en progreso',
                    icon: "success",
                    showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(() => {console.log('Error al Actualizar el Stock');})
            });
    }; 

    return (
        <div className="carrito">
            <div className='encabezado'>
                <h1>Su carrito de compras</h1>

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
            {
                <>
                    <Modal show={orderLista} size="sm">
    
                        <Modal.Body>
                            <div className="App-header">
                                <img src={logo} className="App-logo" alt="logo" style={{ width: '7rem' }}/>
                                <br></br>
                                <span>Estamos procesando tu Orden</span>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            }
            <Link
                to={'/'} >
                <Button className='btn-warning'>Volver</Button>        
            </Link>
        </div>
    )
}

export default Cart;
