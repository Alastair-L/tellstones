import React from 'react';

const style = {
    background: 'green',
    width: '50%',
    gridArea: 'Actions',
    display: 'flex',
    flexDirection: 'column',
};

export const ActionsList = ({ selectedAction, possibleActions, setAction }) => {
    return <div style={style}>Actions: {possibleActions.map((name, i) => (
        <button key={`action_${i}`} style={{ height: 40, marginTop: 10, background: selectedAction === name ? 'grey' : 'white' }} onClick={() => setAction(name)}> {name} </button>
    ))}</div >;
}
