import req from '@utils/request.js';
import {
	createType as _,
	auth as authType,
	post as postType,
	comment as commentType
} from './actionsType.js';

// Auth

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

// Post

function addPost({ title, content, byUser }) {
	return async (dispatch) => {
		const result = await req.post('/post/add', {
			title,
			content,
			byUser
		});
		dispatch(_(postType.ADD_POST, result));
	};
}

function getAllPosts() {
	return async (dispatch) => {
		const result = await req.get('/post');
		dispatch(_(postType.GET_ALL_POSTS, result));
	};
}

function getPostDetails(id) {
	return async (dispatch) => {
		const result = await req.get(`/post/${id}`);
		dispatch(_(postType.GET_POST_DETAILS, result));
	};
}

// Comment

function addComment({ userID, content, postID }) {
	debugger;
	return async (dispatch) => {
		const result = await req.post('/comment/add', {
			byUser: userID,
			comment: content,
			post: postID
		});

		dispatch(_(commentType.ADD_COMMENT), {
			userID, content, postID
		});

		return result;
	};
}

export {
	getAuth,
	submitAuth,
	addPost,
	getAllPosts,
	getPostDetails,
	addComment
};
