import {combineReducers} from 'redux';
import {auth as authActions} from './actionsType.js';

function auth(state = null, action) {
    switch(action.type) {
        case authActions.GET_AUTH: 
            return ({...state, ...action.payload})
    }
    return state;
}

function post(state = [], action) {
    
}

export default combineReducers({
    auth
});