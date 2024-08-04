import Image from "next/image";
'use client'
import styles from "./page.module.css";
import Cell from "./components/cell";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react";


export default function Home() {

  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState("circle");
  console.log(cells);
  return (
    <div className="d-flex justify-content-center ">
      
        <div className="row vh-100 w-50 ">
          <div className="gameBoard col-md-6 d-flex flex-wrap h-50 my-auto mx-auto ">
            
               {

                    cells.map((cell, index) => (

                        <Cell key={index} setGo={setGo} go={go} id={index} cells={cells} setCells={setCells} cell={cell}/>
                      ))


                }

          </div>
          <div className="text text-center "> <h4>Its  <span className="text text-danger">{go}</span> turn now !</h4></div>
        </div>
      
    </div>
  );
}
