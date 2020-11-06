import React from 'react';
import PostList from '../../components/List/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import { listPost } from '../../modules/list';

const PostListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {posts, error, loading, user} = useSelector(({list,loading,user})=>({
        posts:list.posts,
        error:list.error,
        loading:loading["list/LIST_POST"],
        user:user.user,
    }));

    useEffect(()=>{
        const {userid} = user;
        const {page,tag} = qs.parse(location.search,{
            ignoreQueryPrefix:true
        });
        dispatch(listPost({page,userid,tag}));
    },[dispatch,location.search,user]);

    return (
        <PostList posts={posts} error={error} loading={loading} showWriteButton={user}/>
    );
};

export default withRouter(PostListContainer);