import logo from "../../logo.svg";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Link } from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import 'animate.css';

const ItemDetailContainer = ({ Saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idProd } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, 'items', idProd);
    const getData  = async () => {
      await getDoc(queryDoc)
      .then((res) => {
        setData({id: res.id, ...res.data()});
      })
      .catch(err => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Lo sentimos, el servicio no se encuentra disponible",
          showClass: {
          popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
          }
        });
      })
      .finally(()=>setLoading(false))
    }
    getData();
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