import React from 'react';
import { Stone } from '../../components';

const style = {
    background: 'blue',
    width: '80%',
    height: 100,
    margin: '100px auto',
    gridArea: 'Mat',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
};


const Mat = ({ stones, placeStone }) => {
    return <div style={style} onClick={() => placeStone('left')}>
        {stones.map(stone => (
            <Stone {...stone} />
        ))}</div>;
}

export default Mat;