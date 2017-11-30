import { actionTypes } from '../actions/game';

const initialState = {
    games: [],
    selectedGame: null,
    filters: ['X', 'O', 'None'],
    sortField: '-gameStart'
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_GAME:
            return Object.assign({}, state, { selectedGame: action.payload });

        case actionTypes.ADD_GAME:
            const games = state.games.slice();
            games.unshift([action.payload.gameId, action.payload.game]);
            return Object.assign({}, state, { games });

        case actionTypes.TOGGLE_FILTER:
            const filters = state.filters.slice();
            const filterIndex = filters.indexOf(action.payload);
            if (filterIndex === -1) {
                filters.push(action.payload);
            } else {
                filters.splice(filterIndex, 1);
            }

            return Object.assign({}, state, { filters });

        case actionTypes.SET_SORT_FIELD:
            return Object.assign({}, state, { sortField: action.payload });

        default:
            return state;
    }
};

export default game;