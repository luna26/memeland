import { MENU_SOURCE_CAMERA, TAKE_PICTURE_CAMERA } from '../actions/types';

const INITIAL_STATE = {
    menu_source_selected : null,
    picture_data_camera: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MENU_SOURCE_CAMERA:
            return { ...state, menu_source_selected: action.payload };
        case TAKE_PICTURE_CAMERA:;
            return { ...state, picture_data_camera: action.payload };
        default:
            return state;
    }
};