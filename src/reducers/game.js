import { actionTypes } from '../actions/game';

const initialState = {
    games: [],
    selectedGame: null,
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_GAME:
            return Object.assign({}, state, { selectedGame: action.payload });

        case actionTypes.ADD_GAME:
            const games = state.games.slice();
            games.unshift([action.payload.gameId, action.payload.game]);
            return Object.assign({}, state, { games });

        default:
            return state;
    }
};

export default game;