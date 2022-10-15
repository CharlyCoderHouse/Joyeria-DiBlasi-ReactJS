import logo from "../../logo.svg";
// import getData from "../../components/Data/mockData";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import Swal from 'sweetalert2';
import 'animate.css';

const ItemListContainer = ({ Saludo }) => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoriaNombre } = useParams();
    let saludoCat = "";
    categoriaNombre ? saludoCat= categoriaNombre : saludoCat="";

    useEffect(() => {
      const getData = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        const querySnapshot = categoriaNombre ? query(queryBase, where('categoria', '==', categoriaNombre)) : queryBase;
        
        getDocs(querySnapshot)
        .then(response => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data()};
          });
          setData(data);  
        })
        .catch(error=>{
          console.log(error)
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
      };
      getData();
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