import { all, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { auth, createType as _ } from '@/store/actionsType.js';
import req from '@utils/request.js';

function* getAuth() {
	try {
		const authData = yield call(req.post, '/auth');
		if (authData) {
			yield put(_(auth.GET_AUTH_SUCCESS, authData));
		}
	} catch(e) {
		yield put(_(auth.GET_AUTH_ERROR, e));
	}
}

function* submitAuth(action) {
	const {
		payload: {
			username,
			password
		}
	} = action;
	try {
		const submittedAuth = yield call(req.post, '/auth/signup', {username, password});
		if (submittedAuth) {
			yield put(_(auth.SET_AUTH_SUCCESS, submittedAuth));
		}
	} catch(e) {
		yield put(_(auth.SET_AUTH_ERROR, e));
	}
}

function* watchAuth() {
	yield takeEvery(auth.GET_AUTH, getAuth);
	yield takeEvery(auth.SUBMIT_AUTH, submitAuth);
}

export default function* authSaga() {
	yield all([watchAuth()]);
}



