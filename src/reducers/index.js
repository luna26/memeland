import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import MenuReducerData from './MenuReducerData';
import MemeGeneratorReducer from './MemeGeneratorReducer';

export default combineReducers({
    mainMenu: MenuReducer,
    mainMenuData: MenuReducerData,
    memeGeneratorInfo: MemeGeneratorReducer
});