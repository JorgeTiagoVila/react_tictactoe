import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getScores } from '../selectors/game';

import ScoreCard from '../components/ScoreCard';

class ScoreTableContainer extends Component {
    render() {
        const { scores } = this.props;

        return (
            <div className="scoreTableContainer">
                <ScoreCard
                    title="Games Played"
                    value={scores.gamesPlayed}
                />
                <ScoreCard
                    title="Games X Won"
                    value={scores.gamesXWon}
                />
                <ScoreCard
                    title="Games O Won"
                    value={scores.gamesOWon}
                />

                <ScoreCard
                    title="Games Tied"
                    value={scores.gamesTied}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    scores: getScores(state),
});

export default connect(mapStateToProps)(ScoreTableContainer);