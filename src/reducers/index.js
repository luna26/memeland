import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import MenuReducerData from './MenuReducerData';

export default combineReducers({
    mainMenu: MenuReducer,
    mainMenuData: MenuReducerData
});