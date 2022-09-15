import "./App.css";
import NavBar from "./components/NavBar/navBar.js";
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";

function App() {
  
  const [items, setItems] = useState(0);

  return (
    <BrowserRouter>
      <NavBar items={items} />
      <Routes>
        <Route path="/" element={<ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" />} />
        <Route path="/quienesSomos" element={<div> Quienes Somos </div>} />
        <Route path="/detalle/:idProd" element={<ItemDetailContainer Saludo="Conoce más del " setItems={setItems} />} />
        <Route path="/categoria/:categoriaNombre" element={<ItemListContainer Saludo="Sección " />} />
        <Route path="/contacto" element={<div> Contacto </div>} />
        <Route path="/cart" element={<div> Carrito </div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
