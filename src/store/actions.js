import req from '@utils/request.js';
import {
	createType as _,
	auth,
	post,
	comment
} from './actionsType.js';

// Auth

function getAuth() {
	return _(auth.GET_AUTH);
}

function submitAuth({username, password}) {
	return _(auth.submitAuth, {username, password});
}

// Post

function addPost({ title, content, byUser }) {
	return _(post.ADD_POST, { title, content, byUser });
}

function getAllPosts() {
	return _(post.GET_ALL_POSTS);
}

function getPostDetails(id) {
	return _(post.GET_POST_DETAILS, {id});
}

// Comment
function addComment({ userID, content, postID }) {
	return _(comment.ADD_COMMENT, {userID, content, postID});
}

export {
	getAuth,
	submitAuth,
	addPost,
	getAllPosts,
	getPostDetails,
	addComment
};
