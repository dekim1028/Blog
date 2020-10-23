import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = 'write/CHANGE_FIELD';
const INITIALIZE ='write/INITIALIZE';


export const changeField = createAction(CHANGE_FILED,({key,value})=>({
    key,
    value,
}));

export const initialize = createAction(INITIALIZE);

const initialState ={
    title:'',
    body:'',
    tags:[],
};

const write = handleActions({
    [CHANGE_FILED]:(state,{payload:{key,value}})=>({
        ...state,
        [key]:value,
    }),
    [INITIALIZE]:state=>initialState,
},initialState);

export default write;