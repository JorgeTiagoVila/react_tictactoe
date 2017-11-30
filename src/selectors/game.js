import {
    createSelector,
    createSelectorCreator,
    defaultMemoize
} from 'reselect';
import { is } from 'immutable';

// Create a "selector creator" that uses immutable.is instead of ===
const createImmutableSelector = createSelectorCreator(defaultMemoize, is);

const gamesSelector = (state) =>
    state.games;

const filtersSelector = (state) =>
    state.filters;

const sortFieldSelector = (state) =>
    state.sortField;

export const filteredGamesSelector = createImmutableSelector(
    gamesSelector,
    filtersSelector,
    (games, filters) => games.filter((game) => filters.includes(game.winner)));

export const sortedGamesSelector = createImmutableSelector(
    filteredGamesSelector,
    sortFieldSelector,
    (games, sortField) => {
        let compareFunction;
        switch (sortField) {
            default:
            case '-gameStart':
                compareFunction = (gameA, gameB) => gameB.gameStart - gameA.gameStart;
                break;

            case 'gameStart':
                compareFunction = (gameA, gameB) => gameA.gameStart - gameB.gameStart;
                break;

            case '-duration':
                compareFunction = (gameA, gameB) => (gameB.gameEnd - gameB.gameStart) - (gameA.gameEnd - gameA.gameStart);
                break;

            case 'duration':
                compareFunction = (gameA, gameB) => (gameA.gameEnd - gameA.gameStart) - (gameB.gameEnd - gameB.gameStart);
                break;
        }

        return games
            .sort(compareFunction)
            .toList();
    });

export const getScores = createSelector(
    filteredGamesSelector,
    (games) => {
        return {
            gamesPlayed: games.count(),
            gamesXWon: games.count((game) => game.winner === 'X'),
            gamesOWon: games.count((game) => game.winner === 'O'),
            gamesTied: games.count((game) => game.winner === 'None')
        }
    });
