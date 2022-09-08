/* import Item from '../Item/Item' */
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({products}) => {
  return (
    <>
        {
          products.map((cerv)=><ItemDetail key={cerv.id} data={cerv} />)
            /*Ahora utilizamo para detalle de un artículo}  */
            /* products.map((cerv)=><Item key={cerv.id} data={cerv} />) */
        }
    </>
  )
}

export default ItemList