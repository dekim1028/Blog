import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import PostListContainer from '../containers/list/PostListContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Responsive>
                <PostListContainer/>
            </Responsive>
        </>
    );
};

export default PostListPage;