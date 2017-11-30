import {
    Map,
    Record,
    Set
} from 'immutable';

import { actionTypes } from '../actions/game';

const State = Record({
    games: new Map(),
    selectedGame: null,
    filters: Set.of('X', 'O', 'None'),
    sortField: '-gameStart',
    loading: false,
});

const game = (state = new State(), action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return state.set('loading', action.payload);

        case actionTypes.SET_SELECTED_GAME:
            return state.set('selectedGame', action.payload);

        case actionTypes.ADD_GAME:
            return state.setIn(['games', action.payload.id], action.payload);

        case actionTypes.TOGGLE_FILTER:
            return state.update('filters', (filters) => {
                if (filters.includes(action.payload)) {
                    return filters.delete(action.payload);
                }

                return filters.add(action.payload);
            });

        case actionTypes.SET_SORT_FIELD:
            return state.set('sortField', action.payload);

        default:
            return state;
    }
};

export default game;