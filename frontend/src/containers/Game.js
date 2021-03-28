import React, { useState } from 'react';
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

export const Game = ({ openModal }) => {
    const [action, setAction] = useState(ACTIONS.PLACE);
    const [activeStone, setActiveStone] = useState(STONES.HAMMER);
    const [stoneState, setStoneState] = useState(INITIAL_STONE_STATE);
    const [nextMatIndexes, setNextMatIndexes] = useState({ left: -100, right: 100 });

    const onClickMat = direction => {
        if (action !== ACTIONS.PLACE || !activeStone) return;
        const nextIndex = nextMatIndexes[direction];
        setStoneState({
            ...stoneState,
            [activeStone]: {
                matIndex: nextIndex,
            }
        });
        setNextMatIndexes({
            ...nextMatIndexes,
            [direction]: direction === 'left' ? nextIndex - 1 : nextIndex + 1
        });
        setActiveStone(null);
    }

    const onClickMatStone = stone => {
        switch (action) {
            case ACTIONS.SWAP: {
                if (activeStone) {
                    console.log(stoneState);
                    setStoneState({
                        ...stoneState,
                        [activeStone]: {
                            ...stoneState[activeStone],
                            matIndex: stoneState[stone].matIndex,
                        },
                        [stone]: {
                            ...stoneState[stone],
                            matIndex: stoneState[activeStone].matIndex,
                        }
                    });
                    setActiveStone(null);
                    break;
                }
                setActiveStone(stone);
                break;
            }
            case ACTIONS.PEEK:
                openModal(stone);
                break;
            case ACTIONS.HIDE:
                setStoneState({ ...stoneState, [stone]: { ...stoneState[stone], hidden: true } })
                break;
            case ACTIONS.PLACE: // Fall through
            default: return;
        }
    }

    const onClickPoolStone = stone => {
        if (action !== ACTIONS.PLACE) return;
        setActiveStone(stone);
    }

    return (
        <div style={style}>
            <Mat stoneState={stoneState} activeStone={activeStone} onClickStone={onClickMatStone} onClickMat={onClickMat} />
            <ActionsList selectedAction={action} setAction={action => { setAction(action); setActiveStone(null); }} possibleActions={Object.values(ACTIONS)} />
            <Pool activeStone={activeStone} stoneState={stoneState} selectStone={onClickPoolStone} />
        </div>
    );
}
