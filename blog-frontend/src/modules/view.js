import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';

const [
	VIEW_POST,
	VIEW_POST_SUCCESS,
	VIEW_POST_FAILURE,
] = createRequestActionTypes('view/VIEW_POST');

export const viewPost = createAction(VIEW_POST, (id) => id);

const viewPostSaga = createRequestSaga(VIEW_POST, postsAPI.viewPost);
export function* viewSaga() {
	yield takeLatest(VIEW_POST, viewPostSaga);
}

const initialState = {
	post: null,
	error: null,
};

const view = handleActions(
	{
		[VIEW_POST_SUCCESS]: (state, { payload: post }) => ({
			...state,
			post,
		}),
		[VIEW_POST_FAILURE]: (state, { payload: error }) => ({
			...state,
			error,
		}),
	},
	initialState,
);

export default view;
