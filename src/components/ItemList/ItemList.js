import Item from "../Item/Item"
import { Link } from 'react-router-dom'

const ItemList = ({ products }) => {
  
  return (
    <>
        {products.map((cerv) => (
            <Link 
              key={cerv.id}
              to={'/detalle/' + cerv.id}
                    style={{ textDecoration:'none',
                             color: "black"  }}>
              <Item data={cerv}/>
            </Link>
        ))}
    </>
  );
};

export default ItemList;