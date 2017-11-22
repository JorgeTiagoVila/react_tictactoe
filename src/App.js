import React, { Component } from 'react';
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
            // Create a copy of the array, add new game on its beginning
            const games = this.state.games.slice();
            games.unshift(game);
            return Object.assign({}, state, { games, selectedGame: 0 });
        });
    };

    onNewGame = () => {
        this.setState({ selectedGame: null });
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
            />
        </div>
        );
    }
}

export default App;
