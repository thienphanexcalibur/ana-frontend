import AuthSaga from './auth';
import PostSaga from './post';
import CommentSaga from './comment';
import {all} from 'redux-saga/effects';

export default function* saga() {
	yield all([
		AuthSaga(),
		PostSaga(),
		CommentSaga()
	]);
}
