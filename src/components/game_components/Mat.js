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
    position: 'relative',
};


export const Mat = ({ stoneState, onClickMat, onClickStone, activeStone }) => {
    const stones = Object.values(STONES);
    const matStones = stones.filter(stone => stoneState[stone]?.matIndex != null)
        .sort((s1, s2) => stoneState[s1].matIndex - stoneState[s2].matIndex);

    return (
        <div style={style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex' }}>
                <div style={{ zIndex: 101, width: '50%', height: '100%' }} onClick={() => onClickMat('left')} />
                <div style={{ zIndex: 101, width: '50%', height: '100%' }} onClick={() => onClickMat('right')} />
            </div>
            {matStones.map((stone, i) => (
                <Stone key={`stone_${i}`} name={stone} onClick={() => onClickStone(stone)} isActive={stone === activeStone} isHidden={stoneState[stone].hidden} />
            ))}
        </div>);
}
