import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './components/WINNING_COMBINATIONS';
import GamveOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedActivePlayer(gameTurn) {
  let currentPlayer = 'X';

      if(gameTurn.length > 0 && gameTurn[0].player === 'X') {
        currentPlayer = 'O';
      }

  return currentPlayer;
}

export default function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });
  const [gameTurn, setGameTurn] = useState([]);
  let winner = null;
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

    for(const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
  
    for(const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        const { row: rowA, column: colA } = a;
        const { row: rowB, column: colB } = b;
        const { row: rowC, column: colC } = c;

        if(gameBoard[rowA][colA] && gameBoard[rowA][colA] === gameBoard[rowB][colB] && gameBoard[rowA][colA] === gameBoard[rowC][colC]) {
            console.log(`${gameBoard[rowA][colA]} is the winner`);
            winner = players[gameBoard[rowA][colA]];
            console.log(players[gameBoard[rowA][colA]]);
        }
    }
    
    if(gameTurn.length === 9 && !winner) {
        winner = 'No one,';
    }

  let activePlayer = derivedActivePlayer(gameTurn);

  function handleSelectSquare(rowIndex, colIndex) {
   

    setGameTurn((prevGameTurn) => {
      let currentPlayer = derivedActivePlayer(prevGameTurn);
      
      const updatedGameTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
         ...prevGameTurn
        ];

        
      return updatedGameTurn;
    })
  }

  function handlePlayerNameChange(symbol, newName) {
    console.log("handlePlayerNameChange called with symbol::", symbol, "newName::", newName);
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }

  console.log(players);


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={players['X']} symbol="X" style={activePlayer === 'X' ? "active" : undefined} onNameChange={handlePlayerNameChange}/>
          <Player name={players['O']} symbol="O" style={activePlayer === 'O' ? "active" : undefined } onNameChange={handlePlayerNameChange}/>
        </ol>
        {winner && <GamveOver winner={winner} onPlayAgain={() => setGameTurn([])} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurn} />

    </main>
  )
}

