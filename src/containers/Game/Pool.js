import React from 'react';
import { Stone } from '../../components';

const style = {
    background: 'lightBlue',
    justifySelf: 'stretch',
    gridArea: 'Pool',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'spaceEvenly',
};

const Pool = ({ stones }) => {
    return <div style={style}>
        {stones.map((stone) => (
            <Stone {...stone} />
        ))}</div>;
}

export default Pool;