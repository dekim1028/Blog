import React, { useEffect } from 'react';
import PostView from '../../components/view/PostView';
import { useSelector, useDispatch } from 'react-redux';
import { viewPost } from '../../modules/view';
import {withRouter} from 'react-router-dom';

const PostViewContainer = ({match}) => {
    const {postId} = match.params;
    const dispatch = useDispatch();
    const {post, error, loading} = useSelector(({view, loading})=>({
        post:view.post,
        error:view.error,
        loading:loading['view/VIEW_POST']
    }));

    useEffect(()=>{
        dispatch(viewPost(postId));
    },[dispatch,postId]);

    return (
        <PostView post={post} error={error} loading={loading}/>
    );
};

export default withRouter(PostViewContainer);