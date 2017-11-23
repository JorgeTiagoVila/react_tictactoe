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
    store = createStore(gameReducer);

    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <ScoreTableContainer />
                    <div className="container">
                        <BoardContainer />
                        <GameListContainer />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
