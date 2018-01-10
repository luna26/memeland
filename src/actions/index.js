import { Actions } from 'react-native-router-flux';
import { MENU_CHANGED } from './types';

export const openMenu = (param) => {
    return {
        type : MENU_CHANGED,
        payload:param
    };
  };