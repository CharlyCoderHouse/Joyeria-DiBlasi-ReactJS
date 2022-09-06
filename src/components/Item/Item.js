import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Item = ({data}) => {
    const[cantidad,setCantidad]=useState(1)

    const increment=()=>{
        setCantidad(actualValor=>actualValor+1)
    }
    const decrement=()=>{
        setCantidad(actualValor=>actualValor-1)
    }
  return (
    <>
    <Card border="warning" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${data.img}`} alt={`${data.alt}`}  />
      <Card.Body>
        <Card.Title className='textoTil'>{data.nombre}</Card.Title>
        <Card.Text className='textoDesc'>{data.desc}</Card.Text>
        <Card.Text className='textoDesc'>{`Stock disponible ${data.stock}`} </Card.Text>
        <Card.Text>Precio: ${data.precio}</Card.Text>
        <Button className='btn bg-dark' onClick={decrement} disabled={cantidad<=1} >-</Button>
        <Form.Text className='texto1'>  {cantidad}  </Form.Text>
        <Button className='btn bg-dark' onClick={increment} disabled={cantidad>=data.stock} >+</Button>
        <Button className='btn-warning' onClick={()=>{console.log(`agregaste ${cantidad} producto/s`)}}>Agregar</Button>
      </Card.Body>
      </Card>
    </>
  )
}

export default Item

