import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { user } from '../reducers/user';

const initialState = {};

const composeEnhacers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(user, initialState as any, composeEnhacers(applyMiddleware(thunk)));
