import React, { useState } from 'react';
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, board}) {
    
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map((row) => [...row])];
    //         newGameBoard[rowIndex][colIndex] = activePlayer;
    //         return newGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {
                board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        
                            <ol>
                                {
                                    row.map((playerSymbol, colIndex) => 
                                        <li key={colIndex}>
                                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                            disabled={playerSymbol !== null}>{playerSymbol}</button>
                                        </li>
                                    )
                                }
                            </ol>
                        
                    </li>
                ))
            }
        </ol>
    );
}