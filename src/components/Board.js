import React, {useState} from "react";
import { Square } from "./Square";


export const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const handleSquareClick = (i) => {
        const squaresCopy = [...squares];
        squaresCopy[i] = isXNext ? 'X' : 'O';
        setIsXNext(!isXNext);
        setSquares(squaresCopy);
    };
    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleSquareClick(i)}
            />);
    };
    const status = `Next player: ${(isXNext ? 'X' : 'O')}`;
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
        </div>
    )
};