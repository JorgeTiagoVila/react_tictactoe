import React from 'react';

const Square = (props) =>
    <button
        className="square"
        onClick={props.onClick}
        style={{ color: props.value === 'X' ? '#2185d0' : '#db2828' }}
    >
        {props.value}
    </button>;

export default Square;