import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = 'write/CHANGE_FIELD';

export const changeField = createAction(CHANGE_FILED,({key,value})=>({
    key,
    value,
}));

const initialState ={
    title:'',
    body:'',
    tags:[],
};

const write = handleActions({
    [CHANGE_FILED]:(state,{payload:{key,value}})=>({
        ...state,
        [key]:value,
    })
},initialState);

export default write;