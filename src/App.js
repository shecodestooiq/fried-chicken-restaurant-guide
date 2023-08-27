import "./App.css";
import React from "react";
import Resturants from "./components/Resturants";
import Navbar from "./components/Navbar";



export default function App() {
  return (
    <div className="App">
     
         <Navbar/>
         <Resturants />
    
    </div>
  );
}
