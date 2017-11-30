import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import uuid from 'uuid-v4';

import { addGameAsync as addGame, setSelectedGame } from '../actions/game';

import Board from '../components/Board';

class BoardContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: props.selectedGame !== null ?
                props.games.find((game) =>
                    game[0] === props.selectedGame)[1] :
                {
                    id: uuid(),
                    squares: new Array(9).fill(null),
                    currentPlayer: 'X',
                    winner: null,
                    gameStart: new Date(),
                    gameEnd: null,
                },
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedGame !== this.props.selectedGame) {
            this.setState({
                game: nextProps.selectedGame !== null ?
                    nextProps.games.get(nextProps.selectedGame) :
                    {
                        id: uuid(),
                        squares: new Array(9).fill(null),
                        currentPlayer: 'X',
                        winner: null,
                        gameStart: new Date(),
                        gameEnd: null,
                    },
            });
        }
    }

    static calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        let hasEmptySquare = false;
        for (let i = 0; i < 8; i++) {
            if (squares[i] === null) {
                hasEmptySquare = true;
                break;
            }
        }

        if (!hasEmptySquare) {
            return 'None'
        }

        return null;
    }

    handleClick = async (i) => {
        // Ignore click if the square is already filled or there is already a winner
        if (this.state.game.squares[i] !== null || this.state.game.winner !== null) {
            return;
        }

        // Update the board
        const squares = this.state.game.squares.slice();
        squares[i] = this.state.game.currentPlayer;

        // Find the next player
        const nextPlayer = this.state.game.currentPlayer === 'X' ? 'O' : 'X';

        // Check if there is a winner
        const winner = BoardContainer.calculateWinner(squares);

        await this.setState((state) => Object.assign({}, state, {
            game: {
                ...this.state.game,
                squares,
                currentPlayer: winner === null ? nextPlayer : null,
                winner,
            }
        }), async () => {
            if (this.props.selectedGame === null && winner !== null) {

                await this.props.actions.addGame({
                    ...this.state.game,
                    gameEnd: new Date(),
                });

                this.props.actions.setSelectedGame(this.state.game.id);
            }
        });
    };

    onNewGameButtonClick = () => {
        this.props.actions.setSelectedGame(null);
    };

    render() {
        const {
            squares,
            currentPlayer,
            winner
        } = this.state.game;

        const { loading } = this.props;

        const status = winner === null ? `Next player: ${currentPlayer}` : `Winner: ${winner}`;

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={squares} onClick={i => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <Header size='tiny'>{status}</Header>
                    {winner !== null &&
                    <Button
                        style={{ marginTop: '1em' }}
                        content='New Game'
                        icon='smile'
                        labelPosition='left'
                        loading={loading}
                        onClick={this.onNewGameButtonClick}
                    />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    games: state.games,
    selectedGame: state.selectedGame,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addGame,
        setSelectedGame,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
