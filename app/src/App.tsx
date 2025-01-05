import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { Produtos } from "./Productos";
import { Button } from "./Button";

function App() {
  return (
    <div className="container p-5 gap-10" style={{ background: "rede" }}>
      <Navbar />
      <Carousel />
      <Produtos />
      <Button />
    </div>
  );
}
export default App;
