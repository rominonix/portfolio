import { combineReducers } from "redux";
import menu from './menu';
import settings from './settings';
import home from './home'
import page from './page'


const allReducers =  combineReducers({
    menu, settings, home, page
});

export default allReducers;