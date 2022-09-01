import ItemCount from "../ItemCount/ItemCount";

const Greeting = ({Saludo, stock}) => {
  return (
      <div>
        <h1 className="texto">{Saludo}</h1>
        <div className="card">
          <h2>Camisa manga corta Celeste</h2>
          <h3>Stock Disponible {stock} </h3>
          <ItemCount stock={stock} />
          <button className="botones">Agregar al Carrito</button>
        </div>
      </div>
  );
}

export default Greeting