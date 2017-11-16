import React, { Component } from 'react';
import './App.css';

const Square = (props) =>
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>;

const Board = (props) =>
    <div>
        <div className="board-row">
            <Square value={props.squares[0]} onClick={() => props.onClick(0)} />
            <Square value={props.squares[1]} onClick={() => props.onClick(1)} />
            <Square value={props.squares[2]} onClick={() => props.onClick(2)} />
        </div>
        <div className="board-row">
            <Square value={props.squares[3]} onClick={() => props.onClick(3)} />
            <Square value={props.squares[4]} onClick={() => props.onClick(4)} />
            <Square value={props.squares[5]} onClick={() => props.onClick(5)} />
        </div>
        <div className="board-row">
            <Square value={props.squares[6]} onClick={() => props.onClick(6)} />
            <Square value={props.squares[7]} onClick={() => props.onClick(7)} />
            <Square value={props.squares[8]} onClick={() => props.onClick(8)} />
        </div>
    </div>;

class App extends Component {
    state = {
        game: {
            squares: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null
        }
    };

    static calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick = (i) => {
        // Ignore click if the square is already filled or there is already a winner
        if (this.state.game.squares[i] !== null || this.state.game.winner !== null) {
            return;
        }

        // Update the board
        const squares = this.state.game.squares.slice();
        squares[i] = this.state.game.currentPlayer;

        // Find the next player
        const nextPlayer = this.state.game.currentPlayer === 'X' ? 'O' : 'X';

        // Check if there is a winner
        const winner = App.calculateWinner(squares);

        this.setState((state) => Object.assign({}, state, {
            game: {
                squares,
                currentPlayer: winner === null ? nextPlayer : null,
                winner
            }
        }));
    };

    render() {
        const {
            squares,
            currentPlayer,
            winner
        } = this.state.game;

        const status = winner === null ? `Next player: ${currentPlayer}` : `Winner: ${winner}`;

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={squares} onClick={i => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>
        );
    }
}

export default App;
