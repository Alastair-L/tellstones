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
        matIndex: 2,
    },
    [STONES.CHALICE]: {
        matIndex: 1,
        hidden: true,
    },
    [STONES.FIRE]: {
        matIndex: -5,
        hidden: true,
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