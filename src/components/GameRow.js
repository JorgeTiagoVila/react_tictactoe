import React from 'react';
import { List } from 'semantic-ui-react';

const GameRow = (props) =>
    <List.Item className="gameCard" onClick={() => {
        props.onRowClick(props.game.id);
    }}>
        <List.Content>
            <List.Header>{props.name}</List.Header>
            <List.Description>
                Winner: {props.game.winner} | {((props.game.gameEnd - props.game.gameStart) / 1000).toFixed(2)}s
            </List.Description>
        </List.Content>
    </List.Item>;

export default GameRow;