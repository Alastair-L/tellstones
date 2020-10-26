import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import { Stone } from '../../components';
import Actions from './Actions';
import Mat from './Mat';
import Pool from './Pool';

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

const startingStones = {
    hammer: {
        name: 'hammer',
    },
    oak: {
        name: 'oak',
    },
    fish: {
        name: 'fish',
    },
    chalice: {
        name: 'chalice',
    },
    sword: {
        name: 'sword',
    },
    helm: {
        name: 'helm',
    },
    fire: {
        name: 'fire',
    },
};

const ACTIONS = [
    'place',
    'hide',
    'swap',
    'peek',
    'challenge',
    'boast',
];

class Game extends Component {
    constructor() {
        super();
        this.state = {
            stones: startingStones,
            currentAction: 'place',
            activeStone: 'hammer',
            playedStones: [],
            hiddenStones: [],
        };
    }

    clickStone = (stoneName) => () => {
        const { activeStone, currentAction, playedStones } = this.state;
        switch (currentAction) {
            case 'place':
                if (!playedStones.includes(stoneName)) this.setState({ activeStone: stoneName });
                break;
            case 'hide':
                if (playedStones.includes(stoneName)) this.setState(state => ({ hiddenStones: [stoneName, ...state.hiddenStones] }));
                break;
            case 'swap':
                if (playedStones.includes(stoneName)) {
                    if (!activeStone) this.setState({ activeStone: stoneName });
                    else {
                        const activeStoneIndex = playedStones.findIndex(name => name === activeStone);
                        const swapStoneIndex = playedStones.findIndex(name => name === stoneName);
                        this.setState(state => {
                            if (Math.random() > 0.5) return;
                            const { playedStones } = state;
                            const newPlayedStones = playedStones;
                            [newPlayedStones[activeStoneIndex], newPlayedStones[swapStoneIndex]] = [playedStones[swapStoneIndex], playedStones[activeStoneIndex]];
                            console.log(activeStone, stoneName, newPlayedStones, activeStoneIndex, swapStoneIndex);
                            return { playedStones: newPlayedStones }
                        });
                    }
                }
                break;
            default:
                break;

        }
    }

    placeStone = (direction) => {
        const { activeStone, currentAction, playedStones } = this.state;
        console.log(playedStones);
        if (activeStone && currentAction === 'place') {
            switch (direction) {
                case 'left':
                    this.setState(state => ({ ...state, activeStone: null, playedStones: [activeStone, ...state.playedStones] }));
                    break;
                default:
                    this.setState(state => ({ ...state, activeStone: null, playedStones: [...state.playedStones, activeStone] }));
            }

        }
    }

    setAction = (action) => {
        this.setState({ currentAction: action, activeStone: null });
    }

    renderMat() {
        const { activeStone, stones, playedStones, hiddenStones } = this.state;

        const matStones = playedStones.map(stoneName => {
            const stone = stones[stoneName];
            return ({ ...stone, isActive: stone.name === activeStone, isHidden: hiddenStones.includes(stone.name), setActive: this.clickStone(stone.name) })
        });

        return <Mat stones={matStones} placeStone={this.placeStone} />;
    }

    renderPool() {
        const { activeStone, stones, playedStones } = this.state;
        const poolStones = Object.values(stones).filter(({ name }) => !playedStones.includes(name))
            .map(stone => ({ ...stone, isActive: stone.name === activeStone, setActive: this.clickStone(stone.name) }));
        console.log(poolStones);
        return <Pool stones={poolStones} />;
    }

    renderActions() {
        return <Actions setAction={this.setAction} possibleActions={ACTIONS} />;
    }

    render() {
        console.log(this.state);
        return (
            <div style={style}>
                {this.renderMat()}
                {this.renderActions()}
                {this.renderPool()}
            </div>
        );
    }
}


export default Game;