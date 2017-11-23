import React, { Component } from 'react';
import uuid from 'uuid-v4';
import './App.css';

import BoardContainer from './containers/BoardContainer';
import GameListContainer from './containers/GameListContainer';

class App extends Component {
    state = {
        selectedGame: null,
        games: [],
    };

    onGameEnd = (game) => {
        this.setState((state) => {
            const gameId = uuid();
            // Create a copy of the array, add new game on its beginning
            const games = this.state.games.slice();
            games.unshift([gameId, game]);
            return Object.assign({}, state, { games, selectedGame: gameId });
        });
    };

    onNewGame = () => {
        this.setState({ selectedGame: null });
    };

    onRowClick = (gameId) => {
        this.setState({ selectedGame: gameId });
    };

    render() {
        const {
            selectedGame,
            games,
        } = this.state;

        return (
        <div className="container">
            <BoardContainer
                games={games}
                selectedGame={selectedGame}
                onGameEnd={this.onGameEnd}
                onNewGame={this.onNewGame}
            />
            <GameListContainer
                games={games}
                onRowClick={this.onRowClick}
            />
        </div>
        );
    }
}

export default App;
