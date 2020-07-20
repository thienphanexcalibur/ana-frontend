import { all, call, takeLatest, put } from 'redux-saga/effects';
import { post, createType as _ } from '@/store/actionsType.js';
import req from '@utils/request.js';

function* getAllPosts() {
	try {
		const posts = yield call(req.get, '/post');
		if (posts) {
			yield put(_(post.GET_ALL_POSTS_SUCCESS, posts));
		}
	} catch(e) {
		yield put(_(post.GET_ALL_POSTS_ERROR, { error: true }));
	}
}

function* addPost(action) {
	try {
		const {
			payload: {
				title,
				content,
				byUser
			}
		} = action;
		const result = yield call(req.post, '/post/add', {title, content, byUser});
		if (result) {
			yield put(_(post.ADD_POST_SUCCESS, result));
		}
	}
	catch(e) {
		yield put(_(post.ADD_POST_ERROR, { error: true, message: e }));
	}
}

function* getPostDetails(action) {
	try {
		const {
			payload: {
				id
			}
		} = action;
		const postData = yield call(req.get, `/post/${id}`);
		if (postData) {
			yield put(_(post.GET_POST_DETAILS_SUCCESS, postData));
		}
	} catch(e) {
		yield put(_(post.GET_POST_DETAILS_ERROR, { error: true }));
	}
}

function* watchPost() {
	yield takeLatest(post.GET_ALL_POSTS, getAllPosts);
	yield takeLatest(post.GET_POST_DETAILS, getPostDetails);
	yield takeLatest(post.ADD_POST, addPost);
}
export default function* PostSaga() {
	yield all([watchPost()]);
}
