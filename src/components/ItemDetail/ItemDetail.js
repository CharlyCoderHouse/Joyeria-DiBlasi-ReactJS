import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => { 
    const handleOnAdd = (cantidad)=>{
        alert(`Se agrego ${cantidad} producto al carrito`);
    };

    return (
        <Card>
            <Card.Header as="h2">{data.nombre}</Card.Header>
            <Card.Body>
                <Card.Title>{`Precio: $ ${data.precio}` } </Card.Title>
                <Card.Text className='texto1'>{data.desc}</Card.Text>
                <Card.Text className='textoDesc'>{`Stock disponible ${data.stock}`}</Card.Text>
                <Card.Img variant="top" src={`${data.img}`} alt={`${data.alt}`}  />
                <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd} />
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;