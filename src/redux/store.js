import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import preloadedState from './preloadedState'
import reducer from './reducer';

export const store = createStore(reducer, preloadedState, applyMiddleware(thunk));