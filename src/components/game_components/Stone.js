import React from 'react';

export const Stone = ({ name, onClick, isActive, isHidden }) => (
    <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: isActive ? '#000' : '#fff',
        borderRadius: '50%',
        zIndex: 102,
    }} onClick={onClick}>
        <p style={{
            paddingTop: '30px',
            fontSize: '25px',
            margin: '0px',
            color: '#007acc',
            textShadow: '2px 2px 2px #444'
        }}>{isHidden ? '' : name}</p>
    </div>
);
