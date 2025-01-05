import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { Produtos } from "./Productos";
import { Button } from "./Button";

function App() {
  const alunos = [

    {id:1,name:'Jorge Paris',isAlive:true},
    {id:2,name:'Jorge Paris',isAlive:true},
    {id:3,name:'Jorge Paris',isAlive:true},
  ];
  return (
    <div className="container p-5 gap-10" style={{ background: "rede" }}>
      <Navbar />
      <Carousel />
      <Produtos />
      <Button alunos={alunos}/>
    </div>
  );
}
export default App;
