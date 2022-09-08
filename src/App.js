import './App.css';
import NavBar from './components/navBar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemDetailContainer Saludo="Bienvenidos a la Tienda Virtual" />
        {/* Comento el ItemListConteiner del Trabajo 6 para reusarlo para el 7 con el detalle de un producto */}
        {/* <ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" /> */}
        <p className='texto'>
          Presentación Trabajo Clase 7
        </p>

      </header>
    </div>
  );
}

export default App;
