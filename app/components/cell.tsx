'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Dispatch,SetStateAction } from 'react';


type CellProps = {
    go:string;
    setGo:Dispatch<SetStateAction<string>>;
    id:number
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    cell:string;
}

const Cell = ({go,setGo,id,setCells,cells,cell}:CellProps) => {

    const handlClick = (e) =>{
        const notTaken = !cells[id]
        
        if(notTaken)
        {
            if( go==="circle")
                {
                    handlcellchange("circle");
                    setGo("cross");
                }
                else if(go === "cross"){
                    handlcellchange("cross");
                    setGo("circle");
                }
        }
    }

    const handlcellchange = (cellToChange: string) => {

        let copyCells =[...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells)

    }
 
    return(

        <div onClick={handlClick} className="square d-flex justify-center col-4 h-45 border border-info border-2 border-box bg-white ">
        
            
                <div className={` m-auto ${cell}`} >
                    {
                       cell ? (cell === "circle" ? "⭕" : "❎"):""
                    }
               
                </div>
                
            

        </div>
        

    );

}

export default Cell;