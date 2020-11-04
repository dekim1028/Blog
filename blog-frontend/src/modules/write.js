import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/posts';

const CHANGE_FILED = 'write/CHANGE_FIELD';
const INITIALIZE ='write/INITIALIZE';
const [WRITE_POST,WRITE_POST_SUCCESS,WWRITE_POST_FAILURE] =createRequestActionTypes('write/WRITE_POST');
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';
const [UPDATE_POST,UPDATE_POST_SUCCESS,UPDATE_POST_FAILURE] = createRequestActionTypes('write/UPDATE_POST');

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

export const setOriginalPost = createAction(SET_ORIGINAL_POST,post=>post);
export const updatePost = createAction(UPDATE_POST,({title,body,tags,originalId})=>({
    title,
    body,
    tags,
    id:originalId,
}))

const writePostSaga = createRequestSaga(WRITE_POST,postAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST,postAPI.updatePost);

export function* writeSaga(){
    yield takeLatest(WRITE_POST,writePostSaga);
    yield takeLatest(UPDATE_POST,updatePostSaga);
}

const initialState ={
    title:'',
    body:'',
    tags:[],
    post:null,
    postError:null,
    originalId:null,
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
    }),
    [SET_ORIGINAL_POST]:(state,{payload:post})=>({
        ...state,
        title:post.title,
        body:post.body,
        tags:post.tags,
        originalId:post._id,
    }),
    [UPDATE_POST_SUCCESS]:(state,{payload:post})=>({
        ...state,
        post,
    }),
    [UPDATE_POST_FAILURE]:(state,{payload:postError})=>({
        ...state,
        postError,
    })
},initialState);

export default write;