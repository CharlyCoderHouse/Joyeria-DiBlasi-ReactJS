import "./App.css";
import NavBar from "./components/NavBar/navBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" />} />
        <Route path="/quienesSomos" element={<div> Quienes Somos </div>} />
        <Route path="/detalle/:idProd" element={<ItemDetailContainer Saludo="Conoce más del " />} />
        <Route path="/categoria/:categoriaNombre" element={<ItemListContainer Saludo="Sección " />} />
        <Route path="/contacto" element={<div> Contacto </div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
