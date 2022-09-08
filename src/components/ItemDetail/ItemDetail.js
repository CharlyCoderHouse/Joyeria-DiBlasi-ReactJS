/* import React, { useState } from 'react' */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/*import Form from 'react-bootstrap/Form';*/

const ItemDetail = ({data}) => {
/*     const[cantidad,setCantidad]=useState(1)

    const increment=()=>{
        setCantidad(actualValor=>actualValor+1)
    }
    const decrement=()=>{
        setCantidad(actualValor=>actualValor-1)
    } */
  return (
    <>
        <Card>
            <Card.Header as="h2">{data.nombre}</Card.Header>
            <Card.Body>
                <Card.Title>Precio: ${data.precio}</Card.Title>
                <Card.Text className='texto1'>{data.desc}</Card.Text>
                <Card.Text className='textoDesc'>{`Stock disponible ${data.stock}`}</Card.Text>
                <Card.Img variant="top" src={`${data.img}`} alt={`${data.alt}`}  />
                <Button className='btn-warning'>Agregar a la Compra</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default ItemDetail