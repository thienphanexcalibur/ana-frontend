import { createStandaloneToast } from '@chakra-ui/toast';

const toast = createStandaloneToast();

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

const API = (...args) => {
	const [path, ...rest] = args;
	return `${process.env.API_PATH}${path.raw.join('')}${rest.join('')}`;
};

export const GET_AUTH = createActionThunk('GET_AUTH', async ({ username, password }) => {
	const payload = username && password ? { username, password } : null;

	const requestOptions = {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		...(payload ? { body: JSON.stringify(payload) } : {})
	};

	return fetch(API`/auth`, requestOptions).then((res) => res.json());
});

export const SUBMIT_AUTH = createActionThunk(
	'SUBMIT_AUTH',
	async ({ username, password }, { dispatch, state }) => {
		try {
			const result = await fetch(API`/auth/signup`, {
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

export const LOGOUT = createActionThunk('LOGOUT', () =>
	fetch(API`/auth/logout`, {
		method: 'POST',
		credentials: 'include'
	})
);

export const GET_WALL_POSTS = createActionThunk('GET_WALL_POSTS', () =>
	fetch(API`/posts`).then((res) => res.json())
);

export const GET_POST = createActionThunk('GET_POST', (id) =>
	fetch(API`/post/${id}`, {
		credentials: 'include'
	}).then((res) => res.json())
);

export const ADD_POST = createActionThunk('ADD_POST', ({ title, content, byUser }, { dispatch }) =>
	fetch(API`/post/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title,
			content,
			byUser
		}),
		credentials: 'include'
	})
		.then((res) => res.json())
		.then(() => dispatch(GET_WALL_POSTS()))
);
