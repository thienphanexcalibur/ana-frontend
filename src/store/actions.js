import req from '@utils/request.js';
import {
	createType as _,
	auth as authType
} from './actionsType.js';

function getAuth() {
	return async (dispatch) => {
		let auth;
		try {
			auth = await req.post('/auth');
		} catch (e) {
			auth = null;
		}
		dispatch(_(authType.GET_AUTH, auth));
	};
}

function submitAuth({ username, password }) {
	return async (dispatch) => {
		dispatch(_(authType.SET_AUTH, { username, password }));
		const user = await req.post('/auth/signup',
			{
				username,
				password
			});
		dispatch(_(authType.GET_AUTH, user));
	};
}

export { getAuth, submitAuth };
