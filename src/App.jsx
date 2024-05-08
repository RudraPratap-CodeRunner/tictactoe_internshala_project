import React, { useState } from "react";
import Board from "./components/Board";
import "./styles.scss";
import {calculateWinner} from './winner';

const App = () => {


  const [squares, setSquares] = useState(Array(9).fill(null));
  const [entry,setEntry] = useState(false);
  const winner =calculateWinner(squares);
  const nextPlayer = entry?'x':'0';
  const statusMessage = winner ? `Winner is ${winner}`:`Active player is ${nextPlayer}`;


  const handleSquareClick = (clickedPosition) => {
      if(squares[clickedPosition] || winner){
        return;
      }
      setSquares(currentsquares=>{
        return currentsquares.map((squareValue,position)=>{
          if(clickedPosition===position){
            return entry? 'x':'0';
          }
          return squareValue;
        })
      })
      setEntry(currentEntry=>!entry);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
