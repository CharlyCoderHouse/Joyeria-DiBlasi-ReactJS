import React from "react";
import Card from "react-bootstrap/Card";

const Item = ({ data }) => {
  return (
    <>
    <Card border="warning" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${data.img}`} alt={`${data.alt}`}  />
      <Card.Body>
        <Card.Title className='textoTil'>{data.nombre}</Card.Title>
        <Card.Text className='textoDesc'>{data.desc}</Card.Text>
        <Card.Text className='textoDesc'>
          {`Stock disponible: ${data.stock}`} 
        </Card.Text>
        <Card.Text className='textoTil'>{`Precio: $ ${data.precio}.-`}</Card.Text>
      </Card.Body>
      </Card>
    </>
  );
};

export default Item;