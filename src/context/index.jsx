import { createContext, useCallback, useReducer as ReactUseReducer } from 'react';
import { createAction } from '@/actions';

import { useReducer as DebugUseReducer } from 'reinspect';

const debug = process.env.NODE_ENV === 'development';

const useReducer = debug ? DebugUseReducer : ReactUseReducer;

function reducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case 'GET_AUTH':
			return { ...state, auth: payload };
		case 'SUBMIT_AUTH':
			return { ...state, auth: payload };
		case 'LOGOUT':
			return { ...state, auth: {} };
		case 'TOGGLE_MODAL':
			return {
				...state,
				modals: {
					...state.modals,
					[payload.type]: payload.value
				}
			};
		default:
			return state;
	}
}

const initialState = {
	auth: {},
	modals: {}
};

export const AppContext = createContext({});

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState, (x) => x, 'APP');

	const _wrapDispatch = useCallback(
		(action) => {
			if (typeof action === 'object') {
				dispatch(action);
				return action;
			}
			if (typeof action === 'function') {
				const thunkResult = action({ dispatch: _wrapDispatch, state });
				if (Object.prototype.toString.call(thunkResult) === '[object Promise]') {
					return thunkResult
						.then((x) => {
							dispatch(createAction(action.name, x));
							return x;
						})
						.catch((e) => {
							dispatch(
								createAction(`${action.name}/ERROR`, { message: e.message, stack: e.stack })
							);
							throw e;
						});
				}
				if (Object.prototype.toString.call(thunkResult) === '[object Object]') {
					const actionWithPayload = createAction(action.name, thunkResult);
					dispatch(actionWithPayload);
					return actionWithPayload;
				}
				return action;
			}
		},
		[state]
	);

	return (
		<AppContext.Provider value={{ state, dispatch: _wrapDispatch }}>{children}</AppContext.Provider>
	);
};

export default Provider;
