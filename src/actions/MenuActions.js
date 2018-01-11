import { Actions } from 'react-native-router-flux';
import { MENU_CHANGED, MENU_SELECT } from './types';

export const openMenu = (param) => {
    return {
        type: MENU_CHANGED,
        payload: param
    };
};

export const selectMenu = (param) =>{
    switch(param){
        case 0:
            Actions.memeGenerator();
        break;
    }
    return {
        type: MENU_SELECT,
        payload: param
    };
};
