import React, { createContext, useCallback } from 'react';
import { useReducer } from 'reinspect';
import { createAction } from '../actions';

function reducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case 'GET_AUTH':
			return { ...state, auth: payload };
		case 'SUBMIT_AUTH':
			return { ...state, auth: payload };
		case 'GET_POSTS':
			return { ...state, posts: state.posts.concat(payload) };
		case 'LOGOUT':
			return { ...state, auth: {} };
		default:
			return state;
	}
}

const initialState = {
	auth: {},
	posts: []
};

export const AppContext = createContext({});

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState, (state) => state, 'APP');

	const _wrapDispatch = useCallback((action) => {
		if (typeof action === 'object') {
			dispatch(action);
			return action;
		}
		if (typeof action === 'function') {
			const thunkResult = action({ dispatch, state });
			if (Object.prototype.toString.call(thunkResult) === '[object Promise]') {
				return thunkResult
					.then((x) => {
						dispatch(createAction(action.name, x));
						return x;
					})
					.catch((e) => {
						dispatch(createAction(`${action.name}/ERROR`, { error: e.message }));
					});
			}
			if (Object.prototype.toString.call(thunkResult) === '[object Function]') {
				const actionWithPayload = createAction(action.name, thunkResult);
				dispatch(actionWithPayload);
				return actionWithPayload;
			}
		}
	}, []);

	return (
		<AppContext.Provider value={{ state, dispatch: _wrapDispatch }}>{children}</AppContext.Provider>
	);
};

export default Provider;

