import logo from "../../logo.svg";
import getData from "../../components/Data/mockData";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = ({ Saludo }) => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoriaNombre } = useParams();
    let saludoCat = "";
    categoriaNombre ? saludoCat= categoriaNombre : saludoCat="";

    useEffect(() => {
        getData
        .then((response) => {
          if (categoriaNombre){
            const dataCategoria = response.filter((item) => item.categoria === categoriaNombre);
            setData(dataCategoria);
          }else{
            setData(response);
          }
         })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      }, [categoriaNombre]);

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
          <h1 className="texto">{Saludo + saludoCat}</h1>
          <div className='card1'>
            <ItemList products={data} categoria={categoriaNombre} />
          </div>  
        </div>  
      </>  
    )}
  </>
  );
};

export default ItemListContainer;