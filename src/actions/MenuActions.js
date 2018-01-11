import { Actions } from 'react-native-router-flux';
import { MENU_CHANGED, MENU_SELECT } from './types';

export const openMenu = (param) => {
    console.log(param, 'action');
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
        case 1:
            Actions.folderPage();
        break;
    }
    return {
        type: MENU_SELECT,
        payload: param
    };
};
