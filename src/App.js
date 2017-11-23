import React, { Component } from 'react';
import uuid from 'uuid-v4';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import gameReducer from './reducers/game';

import './App.css';

import ScoreTableContainer from './containers/ScoreTableContainer';
import BoardContainer from './containers/BoardContainer';
import GameListContainer from './containers/GameListContainer';

class App extends Component {
    state = {
        selectedGame: null,
        games: [],
    };

    store = createStore(gameReducer);

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
            <Provider store={this.store}>
                <div>
                    <ScoreTableContainer games={games} />
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
                </div>
            </Provider>
        );
    }
}

export default App;
