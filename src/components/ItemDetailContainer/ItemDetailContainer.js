import logo from '../../logo.svg';
import getData from '../Data/mockData';
import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemDetailContainer = ({Saludo}) => {
    
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const idSeleccion = 3

    useEffect(()=>{
        getData
        .then((response)=> { 
            const prodFiltro = response.filter((el) => el.id === idSeleccion)
            setData(prodFiltro)
        })
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      },[])
  return (
  <>
    {
    loading ?
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <span>Cargando...</span>
    </>
    :
    <>
      <h1 className="texto">{Saludo}</h1>
      <div className='card1'>
        <ItemList products={data} ></ItemList>
      </div>  
    </>  
    }
  </>
)}

export default ItemDetailContainer