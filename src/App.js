import "./App.css";
import NavBar from "./components/NavBar/navBar.js";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import { CartProvider } from "./Context/CartContext";

function App() {
  
 /*  const [items, setItems] = useState(0); */

  return (
     <CartProvider> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" />} />
          <Route path="/quienesSomos" element={<div> Quienes Somos </div>} />
          <Route path="/detalle/:idProd" element={<ItemDetailContainer Saludo="Conoce más del " />} />
          <Route path="/categoria/:categoriaNombre" element={<ItemListContainer Saludo="Sección " />} />
          <Route path="/contacto" element={<div> Contacto </div>} />
          <Route path="/cart" element={<div> Carrito </div>} />
        </Routes>
      </BrowserRouter>
     </CartProvider> 
  );
}

export default App;
