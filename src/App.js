import "./App.css";
import NavBar from "./components/NavBar/navBar.js";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import { CartProvider } from "./Context/CartProvider";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";

function App() {

  return (
     <CartProvider> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" />} />
          <Route path="quienesSomos" element={<QuienesSomos />} />
          <Route path="detalle/:idProd" element={<ItemDetailContainer Saludo="Conoce más del " />} />
          <Route path="categoria/:categoriaNombre" element={<ItemListContainer Saludo="Sección " />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/order/:idFirestore" element={<CheckOut />} />          
        </Routes>
      </BrowserRouter>
     </CartProvider> 
  );
}

export default App;
