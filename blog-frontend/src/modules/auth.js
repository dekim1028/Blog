import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import {takeLatest} from "redux-saga/effects";

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes('auth/SIGNUP');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
    CHANGE_FIELD,
    ({form,key,value})=>({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM,form=>form);

export const signup = createAction(SIGNUP,({userid,password})=>({
    userid,
    password
}));

export const login = createAction(LOGIN,({userid,password})=>({
    userid,
    password
}));

//사가 생성
const signupSaga = createRequestSaga(SIGNUP,authAPI.signup);
const loginSaga = createRequestSaga(LOGIN,authAPI.login);

export function* authSaga(){
    yield takeLatest(SIGNUP,signupSaga);
    yield takeLatest(LOGIN,loginSaga);
}

const initialState ={
    login:{
        userid:'',
        password:''
    },
    signup:{
        userid:'',
        password:'',
        passwordConfirm:''
    },
    auth:null,
    authError:null
};

const auth = handleActions(
    {
        [CHANGE_FIELD]:(state,{payload:{form,key,value}})=>
            produce(state,draft=>{
                draft[form][key]=value;
            }),
        [INITIALIZE_FORM]:(state,{payload:form})=>({
            ...state,
            [form]:initialState[form],
            authError:null
        }),
        [SIGNUP_SUCCESS]:(state,{payload:auth})=>({
            ...state,
            authError:null,
            auth,
        }),
        [SIGNUP_FAILURE]:(state,{payload:error})=>({
            ...state,
            authError:error,
        }),
        [LOGIN_SUCCESS]:(state,{payload:auth})=>({
            ...state,
            authError:null,
            auth,
        }),
        [LOGIN_FAILURE]:(state,{payload:error})=>({
            ...state,
            authError:error,
        }),
    },
    initialState
)

export default auth;