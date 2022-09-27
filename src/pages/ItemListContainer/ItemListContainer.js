import logo from "../../logo.svg";
// import getData from "../../components/Data/mockData";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ Saludo }) => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoriaNombre } = useParams();
    let saludoCat = "";
    categoriaNombre ? saludoCat= categoriaNombre : saludoCat="";

    useEffect(() => {
      const getData = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');
        
        if(categoriaNombre){
          const queryFiltered = query(querySnapshot, where('categoria', '==', categoriaNombre));
          getDocs(queryFiltered)
          .then(response => {
            const data = response.docs.map((doc) => {
              return { id: doc.id, ...doc.data()};
            });
            setData(data);
          })
          .catch(error=>console.log(error))
          .finally(()=>setLoading(false))

        } else {
          getDocs(querySnapshot)
          .then(response => {
            const data = response.docs.map((doc) => {
              return { id: doc.id, ...doc.data()};
            });
            setData(data);  
          })
          .catch(error=>console.log(error))
          .finally(()=>setLoading(false))
        }
      }
      getData();
    }, [categoriaNombre]);

/*     useEffect(() => {
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
 */
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