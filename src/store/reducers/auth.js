import {
    SIGN_UP,
    LOGGING_IN,
    LOG_IN,
    INVALID_CREDENTIALS,
    FETCHING_POEMS,
    FETCHED_POEMS
} from '../actions';

import { poems } from './dummy-poems';

const initialState = {
    user: {},
    poems: [],
    loggingIn: false,
    isLoggedIn: false,
    idFetchingPoems: false,
    token: ""
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SIGN_UP:
            return {greeting: "hello"};
        case LOGGING_IN:
            return {...state, loggingIn: true}
        case LOG_IN:
            return {
                ...state, 
                loggingIn: false, 
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case FETCHING_POEMS: 
            return {...state, isFetchingPoems: true}
        case FETCHED_POEMS: 
            return {...state, poems: action.payload}
        default:
            return state
    }
}