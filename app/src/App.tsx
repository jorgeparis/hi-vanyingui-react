import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import Categorias from "./Categorias";
import rice from "./static/2M-Embalagem.jpg";
import coca from "./static/coca-cola.png";
import { ProductosCategorias } from "./Categorias";

function App() {
  return (
    <div className="container ">
      <div className="row mb-4">
        <div className="col"> <Navbar /></div>
       
      </div>
      <div className="row">
        <div className="col">
          <Carousel />
        </div>
      </div>
      <h5>Categorias</h5>
      <div className="row">
        <div className="col"><ProductosCategorias/></div>
      </div>
     
    </div>
  );
}
export default App;
