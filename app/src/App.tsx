import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>
  );
}
export default App;
