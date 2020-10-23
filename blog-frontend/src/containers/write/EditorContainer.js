import React,{ useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const {title,body} = useSelector(({write})=>({
        title:write.title,
        body:write.body
    }))

    const onChange = useCallback(payload=>{
        dispatch(changeField(payload));
    },[dispatch]);

    return (
        <Editor onChange={onChange} title={title} body={body}/>
    );
};

export default EditorContainer;