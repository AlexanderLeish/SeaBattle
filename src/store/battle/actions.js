export const NEW_GAME_MAPS = 'NEW_GAME_MAPS';
export const NEW_PC_MAPS = 'NEW_PC_MAPS';
export const NEW_GAMER_MAPS = 'NEW_GAMER_MAPS';

export const setBattleMap = (gamerMap, pcMap, gamerShips, pcShips) => ({
    type: NEW_GAME_MAPS,
    gamerMap: gamerMap,
    pcMap: pcMap,
    gamerShips: gamerShips,
    pcShips: pcShips
});

export const setPcMap = pcMap => ({
    type: NEW_PC_MAPS,
    pcMap: pcMap
});

export const setGamerMap = gamerMap => ({
    type: NEW_GAMER_MAPS,
    gamerMap: gamerMap
});