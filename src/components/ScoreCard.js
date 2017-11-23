import React from 'react';

const ScoreCard = (props) =>
    <div className="scoreCardContainer">
        <p>{props.title}</p>
        <div className="valueContainer">
            <p>{props.value}</p>
        </div>
    </div>;

export default ScoreCard;
