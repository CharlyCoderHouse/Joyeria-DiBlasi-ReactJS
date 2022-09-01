import './App.css';
import NavBar from './components/navBar.js'
import ItemListContainer from './components/Greeting/Greeting'

function App() {
  const stock = 10
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer Saludo="Bienvenidos a la Tienda Virtual" stock={stock}/>
        <p className='texto'>
          Presentación Trabajo Clase 5
        </p>

      </header>
    </div>
  );
}

export default App;
