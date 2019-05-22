import {NEW_GAME_MAPS} from './actions';
import {NEW_PC_MAPS} from './actions';
import {NEW_GAMER_MAPS} from './actions';
import {GAME_MAPS} from './actions';

const defaultState = {
    gamerMap: [],
    pcMap: [],
    gamerShips: [],
    pcShips: []
};

export const battleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEW_GAME_MAPS:
            return {
                ...state,
                gamerMap: action.gamerMap,
                pcMap: action.pcMap,
                gamerShips: action.gamerShips,
                pcShips: action.pcShips
            }
        case NEW_PC_MAPS:
            return {
                ...state,
                pcMap: action.pcMap
            }
        case NEW_GAMER_MAPS:
            return {
                ...state,
                gamerMap: action.gamerMap
            }
        case GAME_MAPS:
            return {
                ...state,
                gamerMap: action.gamerMap,
                pcMap: action.pcMap
            }
        default:
    }
    return state;
    
};