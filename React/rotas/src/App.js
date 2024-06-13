import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Tempe from "./pages/Tempe";

function App() {
  return (
    <div className="App">
      <h1>Rotas</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Maps />} path="/maps" />
          <Route element={<Tempe />} path="/tempe" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
