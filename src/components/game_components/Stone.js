import React from 'react';

const styles = {
    root: isActive => ({
        width: '100px',
        height: '100px',
        backgroundColor: isActive ? 'grey' : '#fff',
        borderRadius: '50%',
        zIndex: 102,
    }),
    ring1: {
        position: 'relative',
        backgroundColor: 'green',
        width: 'calc(100% - 10px)',
        height: 'calc(100% - 10px)',
        top: 5,
        left: 5,
        borderRadius: '50%',
    },
    ring2: (isActive) => ({
        position: 'relative',
        backgroundColor: isActive ? 'grey' : '#fff',
        width: 'calc(100% - 8px)',
        height: 'calc(100% - 8px)',
        top: '4px',
        left: '4px',
        borderRadius: '50%',
    }),
    text: {
        paddingTop: '24px',
        fontSize: '25px',
        margin: '0px',
        color: '#007acc',
        textShadow: '2px 2px 2px #444'
    }
}

export const Stone = ({ name, onClick, isActive, isHidden }) => (
    isHidden ? (<div style={styles.root(isActive)} onClick={onClick} ></div>) : (<div style={styles.root(isActive)} onClick={onClick}>
        <div style={styles.ring1}>
            <div style={styles.ring2(isActive)}>
                <p style={styles.text}>{name}</p>
            </div>
        </div>
    </div>)
);
