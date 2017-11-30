import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid-v4';

import {
    setSelectedGame,
    toggleFilter,
    setSortField
} from '../actions/game';

import GameListHeader from '../components/GameListHeader';
import GameRow from '../components/GameRow';

class GameListContainer extends Component {

    onRowClick = (gameId) => {
        this.props.actions.setSelectedGame(gameId);
    };

    render() {
        return <div className="gameListContainer">
            <GameListHeader
                filters={this.props.filters}
                sortField={this.props.sortField}
                onToggleFilter={this.props.actions.toggleFilter}
                onChangeSortField={this.props.actions.setSortField}
            />
            <div className="gameListCards">
            {this.props.games.map((game, index) =>
                <GameRow
                    key={uuid()}
                    game={game}
                    name={`Game ${index}`}
                    onRowClick={this.onRowClick}
                />
            )}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    games: state.games,
    filters: state.filters,
    sortField: state.sortField
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        setSelectedGame,
        toggleFilter,
        setSortField,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameListContainer);