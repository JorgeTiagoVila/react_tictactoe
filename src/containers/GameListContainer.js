import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

import {
    setSelectedGame,
    toggleFilter,
    setSortField
} from '../actions/game';

import { sortedGamesSelector } from '../selectors/game'

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
            <List celled relaxed='very' className="gameListCards">
                {this.props.games.map((game, index) =>
                    <GameRow
                        key={game.id}
                        game={game}
                        name={`Game ${index}`}
                        onRowClick={this.onRowClick}
                    />
                )}
            </List>
        </div>
    }
}

const mapStateToProps = (state) => ({
    games: sortedGamesSelector(state),
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