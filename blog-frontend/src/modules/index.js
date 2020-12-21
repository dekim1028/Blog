import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import view, { viewSaga } from './view';
import list, { listSaga } from './list';

const rootReducer = combineReducers({
	auth,
	loading,
	user,
	write,
	view,
	list,
});

export function* rootSaga() {
	yield all([authSaga(), userSaga(), writeSaga(), viewSaga(), listSaga()]);
}

export default rootReducer;
