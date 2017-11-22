import React from 'react';

const GameRow = (props) =>
    <div className="gameCard">
        <div>{props.name}</div>
        <div><p>Winner: {props.game.winner}</p></div>
    </div>;

export default GameRow;