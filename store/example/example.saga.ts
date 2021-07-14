import jsonApi from 'api/jsonApi';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { exampleActionTypes } from './example.actionTypes';

function* getPosts() {
	try {
		const res = yield jsonApi.getPosts();
		yield put({
			type: exampleActionTypes.GET_ALL_POSTS,
			payload: { posts: res.data },
		});
	} catch (error) {
		yield put({ type: exampleActionTypes.GET_ALL_POSTS_FAIL });
	}
}

/**
 *
 * This is your watcher saga that watches for GET_USERS action.
 * Whenever GET_USERS action is dispatched,
 * The watcher saga takes the latest action of the type
 * and calls the getPosts function.
 *
 */
function* onGetUsers() {
	yield takeLatest(exampleActionTypes.GET_USERS, getPosts);
}

export default function* exampleSaga() {
	yield all([call(onGetUsers)]);
}
