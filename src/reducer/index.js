import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import articleDisplayReducer from './articleDisplayReducer';

export default combineReducers({
    articleReducer,
    articleDisplayReducer
})