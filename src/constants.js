export const STONES = {
    HAMMER: 'hammer',
    OAK: 'oak',
    FISH: 'fish',
    CHALICE: 'chalice',
    SWORD: 'sword',
    HELM: 'helm',
    FIRE: 'fire',
};

// All stones start in the pool
export const INITIAL_STONE_STATE = {
    [STONES.OAK]: {
        onMat: true,
    }
};

export const ACTIONS = {
    PLACE: 'place',
    HIDE: 'hide',
    SWAP: 'swap',
    PEEK: 'peek',
    CHALLENGE: 'challenge',
    BOAST: 'boast',
};