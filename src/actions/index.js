export function createAction(name, payload) {
	return {
		type: name,
		payload
	};
}

function createThunk(name, fn) {
	return (...args) => {
		const thunk = fn.bind(null, ...args);
		Object.defineProperty(thunk, 'name', {
			configurable: false,
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

export const TOGGLE_MODAL = createThunk('TOGGLE_MODAL', ({ type, value }) => ({
	type,
	value
}));

export const GET_AUTH = createThunk('GET_AUTH', async ({ username, password }) => {
	const payload = username && password ? { username, password } : null;

	const requestOptions = {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		...(payload ? { body: JSON.stringify(payload) } : {})
	};

	return fetch(API`/user/auth`, requestOptions).then((res) => res.json());
});

export const SUBMIT_AUTH = createThunk('SUBMIT_AUTH', async ({ username, password }) => {
	try {
		const result = await fetch(API`/user/auth/signup`, {
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
});

export const LOGOUT = createThunk('LOGOUT', () =>
	fetch(API`/user/auth/logout`, {
		method: 'POST',
		credentials: 'include'
	})
);

export const GET_WALL_POSTS = createThunk('GET_WALL_POSTS', () =>
	fetch(API`/posts`).then((res) => res.json())
);

export const GET_POST = createThunk('GET_POST', (id) =>
	fetch(API`/post/${id}`, {
		credentials: 'include'
	}).then((res) => res.json())
);

export const ADD_POST = createThunk('ADD_POST', ({ title, content, byUser }, { dispatch }) =>
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

export const ADD_COMMENT = createThunk('ADD_COMMENT', ({ comment, byUser, post }) =>
	fetch(API`/comment/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			comment,
			byUser,
			post
		}),
		credentials: 'include'
	}).then((res) => res.json())
);

export const GET_COMMENTS = createThunk('GET_COMMENTS', (postId) =>
	fetch(API`/comment/post/${postId}`).then((res) => res.json())
);

export const INTERACT = createThunk('INTERACT', ({ id: postId, liked, disliked }) =>
	fetch(API`/post/interact`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify({
			postId,
			liked,
			disliked
		})
	}).then((res) => res.json())
);
