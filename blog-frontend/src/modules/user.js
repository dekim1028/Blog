import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as authAPI from "../lib/api/auth";
import {takeLatest} from 'redux-saga/effects';

const [CHECK,CHECK_SUCCESS,CHECK_FAILURE] = createRequestActionTypes("user/CHECK");

export const check = createAction(CHECK);

const initialState = {
    user:null,
    checkError:null,
};

const checkSaga = createRequestSaga(CHECK,authAPI.check);

export function* userSaga(){
    yield takeLatest(CHECK,checkSaga);
}

export default handleActions({
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