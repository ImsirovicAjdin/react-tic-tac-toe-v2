import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  function renderSquare(i) {
    return (
      <Square
        value={squares[i] + 1}
        onClick={() => {} }
      />
    );
  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {renderSquare(0)}
      </div>
    </div>
  );
}

export default Board;
