import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Presentación Trabajo Clase 3
        </p>

      </header>
    </div>
  );
}

export default App;
