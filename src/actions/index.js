export function createAction(name, payload) {
	return {
		type: name,
		payload
	};
}

function createActionThunk(name, fn) {
	return (...args) => {
		const thunk = fn.bind(null, ...args);
		Object.defineProperty(thunk, 'name', {
			writable: true,
			value: name
		});
		return thunk;
	};
}

export const GET_AUTH = createActionThunk('GET_AUTH', async () =>
	fetch(`${process.env.API_PATH}/auth`, {
		method: 'POST',
		credentials: 'include'
	}).then((res) => res.json())
);

export const SUBMIT_AUTH = createActionThunk(
	'SUBMIT_AUTH',
	async ({ username, password }, { dispatch, state }) => {
		try {
			const result = await fetch(`${process.env.API_PATH}/auth/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({
					username,
					password
				})
			}).then((res) => res.json());
			return result;
		} catch (e) {
			console.log(e);
		}
		return { username, password };
	}
);

export const GET_POSTS = createActionThunk('GET_POSTS', ({ dispatch, state }) =>
	fetch(`${process.env.API_PATH}/post`).then((res) => res.json())
);

export const LOGOUT = createActionThunk('LOGOUT', () =>
	fetch(`${process.env.API_PATH}/auth/logout`, {
		method: 'POST',
		credentials: 'include'
	})
);

