import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, onAdd, initialItem, setInitialItem }) => {

  const sumar = () => {
        setInitialItem(initialItem + 1);
    };

    const restar = () => {
        setInitialItem(initialItem - 1);
    };

    const handleOnAdd = () => {
        if (initialItem <= stock) onAdd(initialItem);
    };

  return (
    <div className="spinner">
      <Button className='btn-warning' onClick={restar} disabled={initialItem < 1}>
        -
      </Button>
      <div className="textoTilt"> {initialItem} </div>
      <Button className='btn-warning' onClick={sumar} disabled={initialItem>=stock}>
        +
      </Button>
      <Button className='btn-warning' onClick={handleOnAdd} disabled={initialItem < 1} >Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;