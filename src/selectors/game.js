import { createSelector } from 'reselect';

const gamesSelector = (state) =>
    state.games;

export const getScores = createSelector(
    [
        gamesSelector
    ],
    (games) => {
        return {
            gamesPlayed: games.length,
            gamesXWon: games.filter((game) => game[1].winner === 'X').length,
            gamesOWon: games.filter((game) => game[1].winner === 'O').length,
            gamesTied: games.filter((game) => game[1].winner === 'None').length
        }
    });