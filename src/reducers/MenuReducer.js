import {
    MENU_CHANGED,
    MENU_SELECT
} from '../actions/types';

const INITIAL_STATE = {
    mainMenuOpen: false,
    menu_selected: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MENU_CHANGED:
            return { ...state, mainMenuOpen: action.payload };
        case MENU_SELECT: 
            return  { ...state, menu_selected: action.payload, mainMenuOpen:false };
        default:
            return state;
    }
};
