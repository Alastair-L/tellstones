import React from 'react';

const style = {
    background: 'green',
    width: '50%',
    gridArea: 'Actions',
};

const Actions = ({ possibleActions, setAction }) => {
    return <div style={style}>Actions: {possibleActions.map(name => (
        <button display={'block'} onClick={() => setAction(name)}> {name} </button>
    ))}</div >;
}

export default Actions;