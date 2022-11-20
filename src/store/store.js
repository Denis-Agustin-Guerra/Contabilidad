import {createStore, combineReducers } from 'redux';
import { authReducer } from '../components/reducers/AuthReducer';


const reducers = combineReducers({
    auth: authReducer,
});
export const store= createStore(reducers);