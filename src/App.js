import "./App.css";
import NavBar from "./components/navBar.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemDetailContainer Saludo="(Detalle) - Bienvenidos a la Tienda Virtual" />
        <ItemListContainer Saludo="(Lista) - Bienvenidos a la Tienda Virtual" />
        <p className='texto'>
          Presentación Trabajo Clase 7
        </p>
      </header>
    </div>
  );
}

export default App;
