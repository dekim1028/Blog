import React from 'react';
import WriteActionButton from '../../components/write/WriteActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { writePost,initialize, updatePost } from '../../modules/write';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const WriteActionButtonContainer = ({history}) => {
    const dispatch = useDispatch();
    const {title, body, tags, post, postError, originalId} = useSelector(({write})=>({
        title:write.title,
        body:write.body,
        tags:write.tags,
        post:write.post,
        postError:write.postError,
        originalId:write.originalId,
    }));

    const onPublish = () =>{
        if(originalId){
            dispatch(updatePost({
                title,
                body,
                tags,
                originalId,
            }));
            return;
        }

        dispatch(
            writePost({
                title,
                body,
                tags
            }),
        );
    };

    useEffect(()=>{
        if(post){
            const {_id,user} =post;
            history.push(`/@${user.userid}/${_id}`);
        }
        if(postError){
            console.log(postError);    
        }
    },[history,post,postError]);

    const onCancle = () =>{
        history.goBack();
    }

    return (
        <WriteActionButton onPublish={onPublish} onCancle={onCancle} isEdit={originalId}/>
    );
};

export default withRouter(WriteActionButtonContainer);