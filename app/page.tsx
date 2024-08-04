import Image from "next/image";
'use client'
import styles from "./page.module.css";
import Cell from "./components/cell";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from "react";

const  winningCombos =[
    [1,2,3],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


export default function Home() {

  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState("circle");
  const [winningMessage,setWinningMessage] = useState(""); 
  useEffect (()=>{

    winningCombos.forEach((combo)=>{

        const circleWin = combo.every((cell) => cells[cell]=== "circle");
        const crossWin = combo.every((cell) => cells[cell]=== "cross");
        if(circleWin){
          setWinningMessage("Circle wins!");
        }
        else if(crossWin)
        {
          setWinningMessage("Cross wins!");
        }

    });

  },[cells])


  useEffect(()=>{
      if(cells.every((cell)=> cell !== "")&& !winningMessage)
      {
        setWinningMessage("Draw");
      }
  },[cells,winningMessage])
  
  return (
    <div className="d-flex justify-content-center ">
      
        <div className="row vh-100 w-50 ">
          <div className="gameBoard col-md-6 d-flex flex-wrap h-50 my-auto mx-auto ">
            
               {

                    cells.map((cell, index) => (

                        <Cell key={index} setGo={setGo} go={go} id={index} 
                        cells={cells} setCells={setCells} cell={cell}
                        winningMessage={winningMessage}  />
                      ))


                }

          </div>
          <div className="text text-center text-danger"><h5> {winningMessage}</h5></div>
          <div className="text text-center "> { !winningMessage && <h4> Its  <span className="text text-danger">{go}</span> turn now !</h4>} </div>
        </div>
      
    </div>
  );
}
