import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Faça alterações em "<code>src/App.js</code>" e salve para atualizar
          esta tela.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Website
        </a>
      </header>
      <h1> Aqui já não é mais o Header</h1>
    </div>
  );
}

export default App;
