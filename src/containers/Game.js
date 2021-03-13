import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { ActionsList, Mat, Pool } from '../components';
import { ACTIONS, INITIAL_STONE_STATE, STONES } from '../constants';

const style = {
    background: 'black',
    width: '75%',
    height: '75vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas: `
        'Mat Mat'
        'Actions Pool'
    `,
};



// clickStone = (stoneName) => () => {
//     switch (currentAction) {
//         case 'place':
//             if (!playedStones.includes(stoneName)) this.setState({ activeStone: stoneName });
//             break;
//         case 'hide':
//             if (playedStones.includes(stoneName)) this.setState(state => ({ hiddenStones: [stoneName, ...state.hiddenStones] }));
//             break;
//         // case 'swap':
//         //     if (playedStones.includes(stoneName)) {
//         //         if (!activeStone) this.setState({ activeStone: stoneName });
//         //         else {
//         //             const activeStoneIndex = playedStones.findIndex(name => name === activeStone);
//         //             const swapStoneIndex = playedStones.findIndex(name => name === stoneName);
//         //             this.setState(state => {
//         //                 if (Math.random() > 0.5) return;
//         //                 const { playedStones } = state;
//         //                 const newPlayedStones = playedStones;
//         //                 [newPlayedStones[activeStoneIndex], newPlayedStones[swapStoneIndex]] = [playedStones[swapStoneIndex], playedStones[activeStoneIndex]];
//         //                 console.log(activeStone, stoneName, newPlayedStones, activeStoneIndex, swapStoneIndex);
//         //                 return { playedStones: newPlayedStones }
//         //             });
//         //         }
//         //     }
//         //     break;
//         default:
//             break;

//     }
// }


// const placeStone = (direction) => {
//     const { activeStone, currentAction, playedStones } = this.state;
//     if (activeStone && currentAction === 'place') {
//         switch (direction) {
//             case 'left':
//                 this.setState(state => ({ ...state, activeStone: null, playedStones: [activeStone, ...state.playedStones] }));
//                 break;
//             default:
//                 this.setState(state => ({ ...state, activeStone: null, playedStones: [...state.playedStones, activeStone] }));
//         }

//     }
// }

// const renderMat = () => {
//     const { activeStone, stones, playedStones, hiddenStones } = this.state;

//     const matStones = playedStones.map(stoneName => {
//         const stone = stones[stoneName];
//         return ({ ...stone, isActive: stone.name === activeStone, isHidden: hiddenStones.includes(stone.name), setActive: this.clickStone(stone.name) })
//     });

//     return;
// }

// const renderPool = () => {
//     const { activeStone, stones, playedStones } = this.state;
//     const poolStones = Object.values(stones).filter(({ name }) => !playedStones.includes(name))
//         .map(stone => ({ ...stone, isActive: stone.name === activeStone, setActive: this.clickStone(stone.name) }));
//     console.log(poolStones);
//     return;
// }

export const Game = () => {
    const [action, setAction] = useState(ACTIONS.PLACE);
    const [activeStone, setActiveStone] = useState(STONES.HAMMER);
    const [stoneState, setStoneState] = useState(INITIAL_STONE_STATE);

    return (
        <div style={style}>
            <Mat stoneState={stoneState} placeStone={() => { }} />
            <ActionsList setAction={action => { setAction(action); setActiveStone(null); }} possibleActions={[]} />
            <Pool stoneState={stoneState} />
        </div>
    );
}
