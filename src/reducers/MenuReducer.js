import { MENU_CHANGED } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case MENU_CHANGED:
            console.log('hola desde redux');
            return action.payload;
        default:
            return state;
    }
};