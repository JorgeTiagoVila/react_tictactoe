import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid-v4';

import GameRow from '../components/GameRow';

class GameListContainer extends Component {
    render() {
        return <div className="gameListContainer">
            {this.props.games.map((game, index) =>
                <GameRow
                    key={uuid()}
                    game={game}
                    name={`Game ${index}`}
                    onRowClick={this.props.onRowClick}
                />
            )}
            <div className="bottomPadding" />
        </div>
    }
}

const mapStateToProps = (state) => ({
    games: state.games,
});

export default connect(mapStateToProps)(GameListContainer);