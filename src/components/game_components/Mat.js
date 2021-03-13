import React from 'react';
import { Stone } from '.';
import { STONES } from '../../constants';

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


export const Mat = ({ stoneState, placeStone }) => {
    const stones = Object.values(STONES);
    const matStones = stones.filter(stone => stoneState[stone]?.onMat)
    return <div style={style} onClick={() => placeStone('left')}>
        {matStones.map(stone => (
            <Stone name={stone} />
        ))}</div>;
}
