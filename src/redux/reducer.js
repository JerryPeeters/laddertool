import {combineReducers} from 'redux';

import { APPEND_DOC, NAVIGATE_TO_QUESTION, SET_NEXT_KEY, SET_NEXT_APPEND, CLEAR_NEXT } from './actions';

//doc is the submitted doc
const docReducer = (state = [], action) => {
    switch (action.type) {
        case APPEND_DOC:
            if (action.payload) return [...state, action.payload];
            else return state;
        default:
            return state;
    }
};
//next preloads the next option, but doesn't navigate there yet.
//should contain targetKey, optionally the toAppend text
const nextReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_NEXT_KEY:
            return {...state, targetKey: action.payload};
        case SET_NEXT_APPEND:
            return {...state, nextAppend: action.payload};
        case CLEAR_NEXT:
            return {};
        default:
            return state;
    }
};
//the question(key) that's currently in focus
const pathReducer = (state = {}, action) => {
    switch (action.type) {
        case NAVIGATE_TO_QUESTION:
            return {...state, currentQuestion: action.payload};
        default:
            return state;
    }
};

const reducer = combineReducers({
    doc: docReducer,
    path: pathReducer,
    next: nextReducer,
});

export default reducer;