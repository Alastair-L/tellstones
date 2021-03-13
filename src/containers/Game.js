import React, { useState } from 'react';
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
//     switch (direction) {
//         case 'left':
//             break;
//         default:
//     }
// }

export const Game = () => {
    const [action, setAction] = useState(ACTIONS.PLACE);
    const [activeStone, setActiveStone] = useState(STONES.HAMMER);
    const [stoneState, setStoneState] = useState(INITIAL_STONE_STATE);
    const [nextMatIndexes, setNextMatIndexes] = useState({ left: -1, right: 1 });

    const onClickMat = (direction) => {
        if (action !== ACTIONS.PLACE || !activeStone) return;
        const nextIndex = nextMatIndexes[direction];
        setStoneState({
            ...stoneState,
            [activeStone]: {
                matIndex: nextIndex,
            }
        })
        setNextMatIndexes({
            ...nextMatIndexes,
            [direction]: direction === 'left' ? nextIndex - 1 : nextIndex + 1
        })
    }

    return (
        <div style={style}>
            <Mat stoneState={stoneState} onClickStone={() => { }} onClickMat={onClickMat} />
            <ActionsList selectedAction={action} setAction={action => { setAction(action); setActiveStone(null); }} possibleActions={Object.values(ACTIONS)} />
            <Pool activeStone={activeStone} stoneState={stoneState} selectStone={setActiveStone} />
        </div>
    );
}
