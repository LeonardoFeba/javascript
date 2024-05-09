import Botao from "./components/botao";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Olá, Mundo!</h1>
      <p>Aula de React PWFE</p>
      <form>
        <label>
          User: <input type="email"></input>
        </label>
        <label>
          Senha: <input type="password"></input>
        </label>
        <Botao descricao="Componente Botao" nome="Corinthians"></Botao>
        <Botao descricao="Componente Botao"></Botao>
        <button>Entrar</button>
        <button>Esqueci minha senha</button>
      </form>
    </div>
  );
}

export default App;
