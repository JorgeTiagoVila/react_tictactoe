import React from 'react';

const GameRow = (props) =>
    <div className="gameCard" onClick={() => {
        props.onRowClick(props.game[0]);
    }}>
        <div>{props.name}</div>
        <div><p>Winner: {props.game[1].winner} | {((props.game[1].gameEnd - props.game[1].gameStart)/1000).toFixed(2)}s</p></div>
    </div>;

export default GameRow;