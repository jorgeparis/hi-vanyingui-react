import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import Categorias from "./Categorias";

function App() {
  return (
    <div className="container">
      <div className="row mb-4">
        <Navbar />
      </div>
      <div className="row">
        <div className="col">
          <Carousel/>
          <h2>Categorias</h2>
          <Categorias/>
        </div>
      </div>
     

 
    </div>
  );
}
export default App;
