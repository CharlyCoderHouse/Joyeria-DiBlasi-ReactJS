import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => { 

    const [initialItem, setInitialItem] = useState(1);
    let compraOn = false;
    const handleOnAdd = (cantidad)=>{
        alert(`Se agrego ${cantidad} producto al carrito`);
        compraOn = true;
    };

    const handleClik = (cantidad)=>{
        console.log(cantidad);

    };

    return (
        <Card>
            <Card.Header as="h2">{data.nombre}</Card.Header>
            <Card.Body>
                <Card.Title>{`Precio: $ ${data.precio}` } </Card.Title>
                <Card.Text className='texto1'>{data.desc}</Card.Text>
                <Card.Text className='textoDesc'>{`Stock disponible ${data.stock}`}</Card.Text>
                <Card.Img variant="top" src={`${data.img}`} alt={`${data.alt}`}  />
                <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd} setInitialItem={setInitialItem} initialItem={initialItem}/>
                <Link
                    to={'/cart'} >
                    <Button className='btn-warning' onClick={handleClik}>Terminar Comprar</Button>        
                </Link>  
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;