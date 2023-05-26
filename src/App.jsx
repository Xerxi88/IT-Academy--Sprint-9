import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import header from "./images/header.png";
import Pokedex from "./Routes/Pokedex"
import Home from "./Routes/Home";
import Favorites from "./Routes/Favorites"
import { Context } from "./Context";


function App() {
  return (
    <>
      <BrowserRouter>
      <Context>
      <header>
        <img  className="pokeapi" src={header} alt="pokeapi" width={"150px"} />
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
