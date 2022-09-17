import logo from "../../logo.svg";
import getData from "../../components/Data/mockData";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Link } from 'react-router-dom'

const ItemDetailContainer = ({ Saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idProd } = useParams();
  
  useEffect(() => {
      getData
      .then((response) => { 
          const prodFiltro = response.find((el) => el.id === idProd);
          setData(prodFiltro);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    },[idProd])

  return (
    <>
      {loading ? (
        <>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span>Cargando...</span>
          </div>  
        </>
      ) : (
        <>
          <div className="App-header">
            <div className="tituloEnca">
              <h1 className="texto">{Saludo + data.nombre}</h1>
              <Link 
                key={data.id}
                to={'/categoria/' + data.categoria}
                      style={{ textDecoration:'none'}}>
                <button className="botones1"> Volver </button>
              </Link>
            </div>  
            <div className='card1'>
              <ItemDetail data={data} />
            </div>  
          </div> 
        </>  
      )}
    </>
  );
};

export default ItemDetailContainer;