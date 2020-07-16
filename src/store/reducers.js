import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth, post } from './actionsType.js';

function authReducer(state = {}, action) {
	const { payload, type } = action;
	switch (type) {
		case auth.SET_AUTH_SUCCESS:
			return ({ ...state, ...payload });

		case auth.SET_AUTH_ERROR:
			return ({error: true});

		case auth.GET_AUTH_SUCCESS:
			return ({...state, ...payload});

		case auth.GET_AUTH_ERROR:
			return ({error: true});

		default:
			return state;
	}
}

function postsReducer(state = [], action) {
	const { payload, type } = action;
	switch (type) {
		case post.GET_ALL_POSTS_SUCCESS: {
			return payload;
		}

		case post.GET_ALL_POSTS_ERROR: {
			return payload;
		}

		default:
			return state;
	}
}

function postDetailsReducer(state = {}, action) {
	const { payload, type } = action;
	switch (type) {
		case post.GET_POST_DETAILS_SUCCESS: {
			return {...state, ...payload};
		}

		case post.GET_POST_DETAILS_ERROR: {
			return payload;
		}

		default:
			return state;
	}
}


function commentReducer(state = [], action) {


}

export default (history) => combineReducers({
	auth: authReducer,
	posts: postsReducer,
	postDetails: postDetailsReducer,
	router: connectRouter(history)
});
