import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/posts';

const CHANGE_FILED = 'write/CHANGE_FIELD';
const INITIALIZE ='write/INITIALIZE';
const [WRITE_POST,WRITE_POST_SUCCESS,WWRITE_POST_FAILURE] =createRequestActionTypes('write/WRITE_POST');


export const changeField = createAction(CHANGE_FILED,({key,value})=>({
    key,
    value,
}));

export const initialize = createAction(INITIALIZE);

export const writePost = createAction(WRITE_POST,({title,body,tags})=>({
    title,
    body,
    tags,
}));

const writePostSaga = createRequestSaga(WRITE_POST,postAPI.writePost);

export function* writeSaga(){
    yield takeLatest(WRITE_POST,writePostSaga);
}

const initialState ={
    title:'',
    body:'',
    tags:[],
    post:null,
    postError:null,
};

const write = handleActions({
    [CHANGE_FILED]:(state,{payload:{key,value}})=>({
        ...state,
        [key]:value,
    }),
    [INITIALIZE]:()=>initialState,
    [WRITE_POST]:(state)=>({
        ...state,
        post:null,
        postError:null,
    }),
    [WRITE_POST_SUCCESS]:(state,{payload:post})=>({
        ...state,
        post,
    }),
    [WWRITE_POST_FAILURE]:(state,{payload:postError})=>({
        ...state,
        postError,
    })
},initialState);

export default write;