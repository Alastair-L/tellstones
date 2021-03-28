import React from 'react';
import { Stone } from '.';
import { STONES } from '../../constants';

const style = {
    background: 'lightBlue',
    justifySelf: 'stretch',
    gridArea: 'Pool',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'spaceEvenly',
};

export const Pool = ({ activeStone, stoneState, selectStone }) => {
    const stones = Object.values(STONES);
    const poolStones = stones.filter(stone => stoneState[stone]?.matIndex == null);
    return <div style={style}>
        {poolStones.map((stone, i) => (
            <Stone key={`pool_stone_${i}`} name={stone} onClick={() => selectStone(stone)} isActive={stone === activeStone} />
        ))}</div>;
}
