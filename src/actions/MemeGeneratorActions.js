import { Actions } from 'react-native-router-flux';
import { MENU_SOURCE_CAMERA, TAKE_PICTURE_CAMERA } from './types';

export const selectMenuSource = (param) => {
    switch(param){
        case 0:
            Actions.memeGeneratorCamera();
        break;
    }
    return {
        type: MENU_SOURCE_CAMERA,
        payload: param
    };
};

export const takePictureAction = (param) =>{
    Actions.memeGeneratorConfirm();
    return {
        type: TAKE_PICTURE_CAMERA,
        payload: param
    };
}