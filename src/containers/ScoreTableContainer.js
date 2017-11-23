import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScoreCard from '../components/ScoreCard';

class ScoreTableContainer extends Component {
    render() {
        const { games } = this.props;

        return (
            <div className="scoreTableContainer">
                <ScoreCard
                    title="Games Played"
                    value={games.length}
                />
                <ScoreCard
                    title="Games X Won"
                    value={games.filter((game) => game[1].winner === 'X').length}
                />
                <ScoreCard
                    title="Games O Won"
                    value={games.filter((game) => game[1].winner === 'O').length}
                />

                <ScoreCard
                    title="Games Tied"
                    value={games.filter((game) => game[1].winner === 'None').length}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    games: state.games,
});

export default connect(mapStateToProps)(ScoreTableContainer);