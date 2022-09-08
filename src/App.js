import "./App.css";
import NavBar from "./components/navBar.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemDetailContainer Saludo="(ItemDetailContainer) - Bienvenidos a la Tienda Virtual" />
        <ItemListContainer Saludo="(ItemListContainer) - Bienvenidos a la Tienda Virtual" />
      </header>
    </div>
  );
}

export default App;
