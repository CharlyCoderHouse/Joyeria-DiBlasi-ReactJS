import logo from '../../logo.svg';
import getData from '../Data/mockData';
import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({Saludo}) => {
    
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        getData
        .then((response)=>setData(response))
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

export default ItemListContainer