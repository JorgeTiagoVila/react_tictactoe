export const actionTypes = {
    SET_LOADING: 'GAME/SET_LOADING',
    SET_SELECTED_GAME: 'GAME/SET_SELECTED_GAME',
    SET_SORT_FIELD: 'GAME/SET_SORT_FIELD',
    TOGGLE_FILTER: 'GAME/TOGGLE_FILTER',
    ADD_GAME: 'GAME/ADD_GAME',
};

export const setLoading = (loading) => ({
    type: actionTypes.SET_LOADING,
    payload: loading,
});

export const setSelectedGame = (gameId) => ({
    type: actionTypes.SET_SELECTED_GAME,
    payload: gameId,
});

export const setSortField = (field) => ({
    type: actionTypes.SET_SORT_FIELD,
    payload: field,
});

export const toggleFilter = (filter) => ({
    type: actionTypes.TOGGLE_FILTER,
    payload: filter,
});

export const addGame = (game) => ({
    type: actionTypes.ADD_GAME,
    payload: game,
});

export const addGameAsync = (game) =>
    async (dispatch) => {
        dispatch(setLoading(true));

        return new Promise((resolve) =>
            setTimeout(() => {
                dispatch(addGame(game));
                dispatch(setLoading(false));
                resolve();
            }, 5000)
        );
    };