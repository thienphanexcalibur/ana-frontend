import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth as authActions, post as postActions } from './actionsType.js';

function auth(state = {}, action) {
	const { payload, type } = action;
	switch (type) {
		case authActions.GET_AUTH:
			return ({ ...state, ...payload });
		default:
			return state;
	}
}

function posts(state = [], action) {
	const { payload, type } = action;
	switch (type) {
		case postActions.GET_ALL_POSTS: {
			return payload;
		}

		default:
			return state;
	}
}

function postDetails(state = {}, action) {
	const { payload, type } = action;
	switch (type) {
		case postActions.GET_POST_DETAILS: {
			return payload;
		}

		default:
			return state;
	}
}

export default (history) => combineReducers({
	auth,
	posts,
	postDetails,
	router: connectRouter(history)
});
