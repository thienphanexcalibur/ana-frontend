import { all, takeLatest, call, put } from 'redux-saga/effects';
import { comment, createType as _, post } from '@/store/actionsType.js';
import req from '@utils/request.js';


export function* addComment(action) {
	try {
		const {
			payload: {
				postID,
				content,
				userID
			}
		} = action;
		const result = yield call(req.post, '/comment/add',
			{
				byUser: userID,
				comment: content,
				post: postID
			});
		if (result) {
			yield put(_(comment.ADD_COMMENT_SUCCESS, result));
			yield put(_(post.GET_POST_DETAILS, { id: postID }));
		}
	} catch(e) {
		yield put(_(comment.ADD_COMMENT_ERROR, { error: true, message: e }));
	}
}


function* watchComment() {
	yield takeLatest(comment.ADD_COMMENT, addComment);
}

export default function* CommentSaga() {
	yield all([watchComment()]);
}
