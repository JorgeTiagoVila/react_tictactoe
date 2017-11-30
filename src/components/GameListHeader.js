import React from 'react';

const GameListHeader = (props) =>
    <div className="gameListHeader">
        <b>Winner:</b>
        <div>
            <input
                checked={props.filters.includes('X')}
                onChange={() => props.onToggleFilter('X')}
                type="checkbox"
            />X
            <input
                checked={props.filters.includes('O')}
                onChange={() => props.onToggleFilter('O')}
                type="checkbox"
            />O
            <input
                checked={props.filters.includes('None')}
                onChange={() => props.onToggleFilter('None')}
                type="checkbox"
            />None
        </div>
        <br />
        <b>Sort By:&nbsp;</b>
        <select
            onChange={(event) => props.onChangeSortField(event.target.value)}
            value={props.sortField}
        >
            <option value="-gameStart">&darr; Start date</option>
            <option value="gameStart">&uarr; Start date</option>
            <option value="-duration">&darr; Duration</option>
            <option value="duration">&uarr; Duration</option>
        </select>
    </div>;

export default GameListHeader;
