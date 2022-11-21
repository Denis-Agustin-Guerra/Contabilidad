import { combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import { legacy_createStore as createStore} from 'redux'
import { nominaReducer } from '../reducers/nominaReducer';

const reducers = combineReducers({
    auth: authReducer,
    nomina: nominaReducer
});

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const store = createStore(reducers,
    composeEnhancers(
    applyMiddleware(thunk))
);