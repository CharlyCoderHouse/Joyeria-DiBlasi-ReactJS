import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ data }) => { 

    const { addToCart, removeItem, getCantidad } = useContext(CartContext);  
    const [compraOn, setCompraOn] = useState(false);
    
    const handleOnAdd = (cantidad)=>{
        setCompraOn(addToCart(data, cantidad));
    };

    const handleClik = (cantidad)=>{
        console.log(cantidad);
    };

    const handleBorrar = ()=>{
        removeItem(data.id);
    };

    return (
        <Card>
            <Card.Header as="h2">{data.nombre}</Card.Header>
            <Card.Body>
                <Card.Title>{`Precio: $ ${data.precio}` } </Card.Title>
                <Card.Text className='texto1'>{data.desc}</Card.Text>
                <Card.Text className='textoDesc'>{`Stock disponible ${data.stock}`}</Card.Text>
                <Card.Img variant="top" src={`${data.img}`} alt={`${data.alt}`}  />
                {compraOn===false ?
                    <ItemCount stock={data.stock} initial={getCantidad(data.id)} onAdd={handleOnAdd}/>
                    :    
                    <Link
                        to={'/cart'} >
                        <Button className='btn-warning' onClick={handleClik}>Terminar Comprar</Button>        
                    </Link>  
                }
                {/* Este boton de borrar es solo para probar la función de borrado después se elimina */}
                <Button className='btn-warning' onClick={handleBorrar}>Borrar</Button>  
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;