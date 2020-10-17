import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as authAPI from "../lib/api/auth";
import {takeLatest} from 'redux-saga/effects';

const TEMT_SET_USER = "user/TEMP_SET_USER";
const [CHECK,CHECK_SUCCESS,CHECK_FAILURE] = createRequestActionTypes("user/CHECK");

export const tempSetUser = createAction(TEMT_SET_USER,user=>user);
export const check = createAction(CHECK);

const initialState = {
    user:null,
    checkError:null,
};

const checkSaga = createRequestSaga(CHECK,authAPI.check);
function checkFailure(){
    try{
        localStorage.removeItem("user");
    }catch(e){
        console.log(e);
    }
};

export function* userSaga(){
    yield takeLatest(CHECK,checkSaga);
    yield takeLatest(CHECK_FAILURE,checkFailure);
}

export default handleActions({
    [TEMT_SET_USER]:(state,{payload:user})=>({
        ...state,
        user,
    }),
    [CHECK_SUCCESS]:(state,{payload:user})=>({
        ...state,
        user,
        checkError:null,
    }),
    [CHECK_FAILURE]:(state,{payload:error})=>({
        ...state,
        user:null,
        checkError:error,
    })
},initialState);