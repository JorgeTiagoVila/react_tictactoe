import { createSelector } from 'reselect';

const gamesSelector = (state) =>
    state.games;

const filtersSelector = (state) =>
    state.filters;

const sortFieldSelector = (state) =>
    state.sortField;

export const filteredGamesSelector = createSelector(
    gamesSelector,
    filtersSelector,
    (games, filters) => games.filter((game) => filters.includes(game[1].winner)));

export const sortedGamesSelector = createSelector(
    filteredGamesSelector,
    sortFieldSelector,
    (games, sortField) => {
        let compareFunction;
        switch (sortField) {
            default:
            case '-gameStart':
                compareFunction = (gameA, gameB) => gameB[1].gameStart - gameA[1].gameStart;
                break;

            case 'gameStart':
                compareFunction = (gameA, gameB) => gameA[1].gameStart - gameB[1].gameStart;
                break;

            case '-duration':
                compareFunction = (gameA, gameB) => (gameB[1].gameEnd - gameB[1].gameStart) - (gameA[1].gameEnd - gameA[1].gameStart);
                break;

            case 'duration':
                compareFunction = (gameA, gameB) => (gameA[1].gameEnd - gameA[1].gameStart) - (gameB[1].gameEnd - gameB[1].gameStart);
                break;
        }

        return games.sort(compareFunction);
    });

export const getScores = createSelector(
    filteredGamesSelector,
    (games) => {
        return {
            gamesPlayed: games.length,
            gamesXWon: games.filter((game) => game[1].winner === 'X').length,
            gamesOWon: games.filter((game) => game[1].winner === 'O').length,
            gamesTied: games.filter((game) => game[1].winner === 'None').length
        }
    });
