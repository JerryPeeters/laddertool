//action types
export const APPEND_DOC = 'APPEND_DOC';
export const NAVIGATE_TO_QUESTION = 'NAVIGATE_TO_QUESTION';
export const SET_NEXT_KEY = 'SET_NEXT_KEY';
export const SET_NEXT_APPEND = 'SET_NEXT_APPEND';
export const CLEAR_NEXT = 'CLEAR_NEXT';

//action creators
export const appendDoc = update => ({
    type: APPEND_DOC,
    payload: update,
});
export const navigateForward = update => ({
    type: NAVIGATE_TO_QUESTION,
    payload: update,
});
export const setNextKey = update => ({
    type: SET_NEXT_KEY,
    payload: update,
});
export const setNextAppend = update => ({
    type: SET_NEXT_APPEND,
    payload: update,
});

//action creators that get acces to getState via thunk middleware
export const navigate = () => (dispatch, getState) => {
        //have to thunk it so it has access to the other slices in store. 
        let state = {...getState()}; 
        //make new object, if not then actions could work off updated states which we don't want
        if (!state.next.targetKey) return;
        dispatch({type: NAVIGATE_TO_QUESTION, payload: state.next.targetKey});
        dispatch({type: APPEND_DOC, payload: state.next.nextAppend});
        dispatch({type: CLEAR_NEXT});
}
