import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";

function App() {
  return (
    <div className="container p-5">
      <div className="row mb-3">
        <Navbar />
      </div>
      <div className="row">
        <Carousel />
      </div>
      <div className="row">
        <div className="col">
          <h5>Categorias</h5>
        </div>
        <div className="col align-self-end">
          <h3>Jorge</h3>
        </div>
      </div>
    </div>
  );
}
export default App;
