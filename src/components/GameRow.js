import React from 'react';

const GameRow = (props) =>
    <div className="gameCard">
        <div>{props.name}</div>
        <div><p>Winner: {props.game.winner} | {((props.game.gameEnd - props.game.gameStart)/1000).toFixed(2)}s</p></div>
    </div>;

export default GameRow;