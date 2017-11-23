export const actionTypes = {
    SET_SELECTED_GAME: 'GAME/SELECTED_GAME',
    ADD_GAME: 'GAME/ADD_GAME',
};

export const setSelectedGame = (gameId) => ({
    type: actionTypes.SET_SELECTED_GAME,
    payload: gameId,
});

export const addGame = (gameId, game) => ({
    type: actionTypes.ADD_GAME,
    payload: {
        gameId,
        game,
    },
});
