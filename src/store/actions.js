import req from '@utils/request.js';
import {
	createType as _,
	auth,
	post,
	comment
} from './actionsType.js';

// Auth

function getAuth() {
	return (dispatch) => {
		dispatch(_(auth.GET_AUTH));
	}
}

function submitAuth({username, password}) {
	return (dispatch) => {
		dispatch(_(auth.submitAuth, {username, password}));
	};
}

// Post

function addPost({ title, content, byUser }) {
	return (dispatch) => {
		dispatch(_(post.ADD_POST, { title, content, byUser }));
	};
}

function getAllPosts() {
	return async (dispatch) => {
		dispatch(_(post.GET_ALL_POSTS));
	};
}

function getPostDetails(id) {
	return (dispatch) => {
		dispatch(_(post.GET_POST_DETAILS, {id}));
	};
}


// Comment

function addComment({ userID, content, postID }) {
	return (dispatch) => {
		dispatch(_(commentType.ADD_COMMENT), {userID, content, postID});
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
