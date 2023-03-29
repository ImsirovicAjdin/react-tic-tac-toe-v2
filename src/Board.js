import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  console.log(squares);

  const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  function calculateWinner(squares) {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a,b,c] = WINNING_COMBINATIONS[i];
      console.warn(a,b,c);
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a]);
      }
    }
  }

  function handleClick(i) {
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    calculateWinner(newSquares);
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i) }
      />
    );
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <p>Next player: {xIsNext ? 'X' : 'O'}</p>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={() => restartGame()}>
        Restart Game
      </button>
    </div>
  );
}

export default Board;
