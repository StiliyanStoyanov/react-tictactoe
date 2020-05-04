import React, {useState} from "react";
import { calculateWinner } from "../calculateWinner";
import { Board } from "./Board";

export const Game = () => {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [isXNext, setIsXNext] = useState(true);

    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const handleSquareClick = (i) => {

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXNext ? 'X' : 'O';
        setIsXNext(!isXNext);
        setHistory(history.concat([{squares: squares}]));
    };

    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
        status = `Winner is ${winner} !`;
    } else {
        status = `Next player: ${isXNext ? 'X' : 'O'}`
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleSquareClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
};