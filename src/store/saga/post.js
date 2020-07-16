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

function* getPostDetails(action) {
	const {payload: {
		id
	}} = action;
	try {
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
}
export default function* PostSaga() {
	yield all([watchPost()]);
}
