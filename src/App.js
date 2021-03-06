import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import gameReducer from './reducers/game';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import ScoreTableContainer from './containers/ScoreTableContainer';
import BoardContainer from './containers/BoardContainer';
import GameListContainer from './containers/GameListContainer';
import { composeWithDevTools } from 'redux-devtools-extension';

class App extends Component {
    store = createStore(
        gameReducer,
        composeWithDevTools(applyMiddleware(thunk)));

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
