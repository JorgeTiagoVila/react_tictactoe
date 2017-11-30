import React from 'react';
import { Dropdown, Header, Label } from 'semantic-ui-react'

const GameListHeader = (props) =>
    <div className="gameListHeader">
        <Header size='tiny'>Filter Winner:</Header>
        <div>
            <Label
                as="a"
                color="blue"
                active={props.filters.includes('X')}
                onClick={() => props.onToggleFilter('X')}
            >
                X Won
            </Label>
            <Label
                as="a"
                color="red"
                active={props.filters.includes('O')}
                onClick={() => props.onToggleFilter('O')}
            >
                O Won
            </Label>
            <Label
                as="a"
                color="yellow"
                active={props.filters.includes('None')}
                onClick={() => props.onToggleFilter('None')}
            >
                Tie
            </Label>
        </div>
        <Header size='tiny'>Sort By</Header>
        <Dropdown
            fluid
            selection
            options={[{
                text: 'Start date',
                value: '-gameStart',
                icon: 'triangle down'
            }, {
                text: 'Start date',
                value: 'gameStart',
                icon: 'triangle up'
            }, {
                text: 'Duration',
                value: '-duration',
                icon: 'triangle down'
            }, {
                text: 'Duration',
                value: 'duration',
                icon: 'triangle up'
            }
            ]}
            value={props.sortField}
            onChange={(event, data) => props.onChangeSortField(data.value)}
        />
    </div>;

export default GameListHeader;
