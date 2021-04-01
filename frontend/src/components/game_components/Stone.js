import React from 'react';
import Paper from '@material-ui/core/Paper';

const activeColor = '#0E77F1';
const inactiveColor ='#7BB5F8';

const styles = {
    root: isActive => ({
        width: '100px',
        height: '100px',
        backgroundColor: '#eee',
        borderRadius: '50%',
        zIndex: 102,
    }),
    ring: (isActive) => ({
        position: 'relative',
        backgroundColor: isActive ? activeColor : inactiveColor,
        boxShadow: isActive ? '0 0 2px 2px #7BB5F8' : 'inset 0.5px 0.5px 0.5px 0.5px #2c6ac5',
        width: 'calc(100% - 10px)',
        height: 'calc(100% - 10px)',
        top: 5,
        left: 5,
        borderRadius: '50%',
    }),
    innerCircle: (isActive) => ({
        position: 'relative',
        backgroundColor: '#eee',
        boxShadow: isActive ? '0 0 2px 2px #7BB5F8' : '',
        width: 'calc(100% - 8px)',
        height: 'calc(100% - 8px)',
        top: '4px',
        left: '4px',
        borderRadius: '50%',
    }),
    text: (isActive) => ({
        paddingTop: '24px',
        fontSize: '25px',
        margin: '0px',
        color: isActive ? activeColor : inactiveColor,
        textShadow: isActive ? '0 0 2px 2px #7BB5F8' : '-0.5px -0.5px 1px #2c6ac5'
    })
}

export const Stone = ({ name, onClick, isActive, isHidden }) => (
    <div style={{marginTop: isActive ? '5px' : '0px', marginLeft: '2px', marginRight:'2px'}}>
        {   isHidden ? (
            <Paper style={ styles.root(isActive) } onClick={ onClick }></Paper>) : (<Paper style={ styles.root(isActive) } onClick={ onClick } elevation={ isActive ? 7 : 1 }>
                <Paper style={ styles.ring(isActive) } elevation={ 0 }>
                    <Paper style={ styles.innerCircle(isActive) } elevation={ 2 }>
                        <p style={ styles.text(isActive) }>{ name }</p>
                    </Paper>
                </Paper>
            </Paper>)
        }
    </div>
);
