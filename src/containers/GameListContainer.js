import React, { Component } from 'react';
import { bindActionsCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid-v4';

import { setSelectedGame } from '../actions/game';

import GameRow from '../components/GameRow';

class GameListContainer extends Component {

    onRowClick = (gameId) => {
        this.props.actions.setSelectedGame(gameId);
    };

    render() {
        return <div className="gameListContainer">
            {this.props.games.map((game, index) =>
                <GameRow
                    key={uuid()}
                    game={game}
                    name={`Game ${index}`}
                    onRowClick={this.onRowClick}
                />
            )}
            <div className="bottomPadding" />
        </div>
    }
}

const mapStateToProps = (state) => ({
    games: state.games,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        setSelectedGame,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameListContainer);