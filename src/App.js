import './App.css';
import NavBar from './components/navBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" />
        <p className='texto'>
          Presentación Trabajo Clase 6
        </p>

      </header>
    </div>
  );
}

export default App;
