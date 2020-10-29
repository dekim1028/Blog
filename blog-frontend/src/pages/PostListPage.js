import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import PostList from '../components/List/PostList';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Responsive>
                <PostList/>
            </Responsive>
        </>
    );
};

export default PostListPage;