import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';

const [LIST_POST, LIST_POST_SUCCESS, LIST_POST_FAILURE] = createRequestActionTypes('list/LIST_POST');

export const listPost = createAction(LIST_POST,({page,userid,tag})=>({
    page,
    userid,
    tag
}));

const listPostSaga = createRequestSaga(LIST_POST,postsAPI.listPost);
export function* listSaga(){
    yield takeLatest(LIST_POST,listPostSaga);
};

const initialState = {
    posts:null,
    error:null,
};

const list = handleActions({
    [LIST_POST_SUCCESS]:(state,{payload:posts})=>({
        ...state,
        posts
    }),
    [LIST_POST_FAILURE]:(state,{payload:error})=>({
        ...state,
        error
    })
},initialState);

export default list;