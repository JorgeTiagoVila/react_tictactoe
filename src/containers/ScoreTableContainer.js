import React from 'react';
import { connect } from 'react-redux';
import { Icon, Statistic } from 'semantic-ui-react'

import { getScores } from '../selectors/game';

const ScoreTableContainer = (props) =>
    <Statistic.Group className="scoreTableContainer" widths='four'>
        <Statistic>
            <Statistic.Value>
                <Icon name='game' />&nbsp;{props.scores.gamesPlayed}
            </Statistic.Value>
            <Statistic.Label>Games Played</Statistic.Label>
        </Statistic>
        <Statistic>
            <Statistic.Value>{props.scores.gamesXWon}</Statistic.Value>
            <Statistic.Label>X Wins</Statistic.Label>
        </Statistic>
        <Statistic>
            <Statistic.Value>{props.scores.gamesOWon}</Statistic.Value>
            <Statistic.Label>O Wins</Statistic.Label>
        </Statistic>
        <Statistic>
            <Statistic.Value>{props.scores.gamesTied}</Statistic.Value>
            <Statistic.Label>Ties</Statistic.Label>
        </Statistic>
    </Statistic.Group>;

const mapStateToProps = (state) => ({
    scores: getScores(state),
});

export default connect(mapStateToProps)(ScoreTableContainer);