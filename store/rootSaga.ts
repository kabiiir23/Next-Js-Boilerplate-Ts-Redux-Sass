import { all } from 'redux-saga/effects';
import exampleSaga from './example/example.saga';

export default function* rootSaga() {
	yield all([exampleSaga()]);
}
