import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewContainer from '../containers/view/PostViewContainer';
import Responsive from '../components/common/Responsive';

const PostViewPage = () => {
    return (
        <>
            <HeaderContainer/>
            <Responsive>
                <PostViewContainer/>
            </Responsive>
            
        </>
    );
};

export default PostViewPage;