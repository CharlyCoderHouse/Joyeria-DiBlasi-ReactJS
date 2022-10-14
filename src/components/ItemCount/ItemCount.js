import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2';

const ItemCount = ({ stock, onAdd, initialItem, setInitialItem }) => {

  const { user } = useContext(CartContext);  

  const sumar = () => {
        setInitialItem(initialItem + 1);
    };

    const restar = () => {
        setInitialItem(initialItem - 1);
    };

    const handleOnAdd = () => {
        if (initialItem <= stock) onAdd(initialItem);
    };

    const handleCart = () => {
      Swal.fire({
          title: 'Debe iniciar sesión para continuar!',
          showClass: {
          popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
          }
      })
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
      {user !== null ? 
        <Button className='btn-warning' onClick={handleOnAdd} disabled={initialItem < 1} >Agregar al Carrito</Button>
      :
        <Button className='btn-secondary' onClick={handleCart} >Agregar al Carrito</Button>
      }
    </div>
  );
};

export default ItemCount;