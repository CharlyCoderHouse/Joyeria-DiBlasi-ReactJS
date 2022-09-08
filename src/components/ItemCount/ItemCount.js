import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [initialItem, setInitialItem] = useState(initial);

  const sumar = () => {
    initialItem < stock
      ? setInitialItem(initialItem + 1)
      : alert("Se alcanzo el maximo");
  };

  const restar = () => {
    initialItem > 0
      ? setInitialItem(initialItem - 1)
      : alert("No se pueden introducir valores negativos");
  };

  const handleOnAdd = () => {
    if (initialItem <= stock) onAdd(initialItem);
  };

  return (
    <div className="spinner">
      <button onClick={restar} className="botonera">
        -
      </button>
      <div className="texto1"> {initialItem} </div>
      <button onClick={sumar} className="botonera">
        +
      </button>
      <button onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
