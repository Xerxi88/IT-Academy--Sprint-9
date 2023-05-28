import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import header from "./images/header.png";
import Pokedex from "./Routes/Pokedex"
import Home from "./Routes/Home";
import Favorites from "./Routes/Favorites";
import Error from "./Routes/Error";
import { Context } from "./Context";
import { useState } from "react";
import Login from "./components/Login";
import PrivateRoute from "./Routes/PrivatePokedex";


function App() {

  const [showLogin,setShowLogin]=useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <>
      <BrowserRouter>
      <Context>
      {showLogin && <Login setShowLogin={setShowLogin} setRegistered={setRegistered}/>}
      <header>
        <img  className="pokeapi" src={header} alt="pokeapi" width={"150px"} />
        <Nav registered={registered}/>
      </header>
      <Routes>
        <Route path="/" element={<Home setShowLogin={setShowLogin} setRegistered={setRegistered} registered={registered}/>}/>
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/pokedex" element={
        <PrivateRoute registered={registered}>
          <Pokedex/>
        </PrivateRoute>}/>
        <Route path="/favorites" element={
        <PrivateRoute registered={registered}>
        <Favorites/>
        </PrivateRoute>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
