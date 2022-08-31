import './App.css';
import NavBar from './components/navBar.js'
import ItemListContainer from './components/Greeting/Greeting'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" />
        <p>
          Presentación Trabajo Clase 4
        </p>

      </header>
    </div>
  );
}

export default App;
