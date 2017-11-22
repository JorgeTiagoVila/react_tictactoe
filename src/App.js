import React, { Component } from 'react';
import './App.css';
import BoardContainer from './containers/BoardContainer';

class App extends Component {
    state = {
        activeGameIndex: 0,
        games: [{
            squares: new Array(9).fill(null),
            currentPlayer: 'X',
            winner: null
        }],
    };

    render() {
        const {
            activeGameIndex,
            games,
        } = this.state;

        return (
        <div>
            <BoardContainer
                game={games[activeGameIndex]}
            />
        </div>
        );
    }
}

export default App;
