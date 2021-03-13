import React from 'react';
import { Stone } from '.';

const style = {
    background: 'lightBlue',
    justifySelf: 'stretch',
    gridArea: 'Pool',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'spaceEvenly',
};

export const Pool = ({ stones }) => {
    return <div style={style}>
        {[].map((stone) => (
            <Stone {...stone} />
        ))}</div>;
}
