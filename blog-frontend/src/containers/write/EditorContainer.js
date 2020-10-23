import React,{ useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import { useEffect } from 'react';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const {title,body} = useSelector(({write})=>({
        title:write.title,
        body:write.body
    }))

    const onChange = useCallback(payload=>{
        dispatch(changeField(payload));
    },[dispatch]);

    useEffect(()=>{
        dispatch(initialize());
    },[dispatch]);

    return (
        <Editor onChange={onChange} title={title} body={body}/>
    );
};

export default EditorContainer;