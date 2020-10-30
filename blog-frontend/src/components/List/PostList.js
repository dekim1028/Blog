import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';

const PostListBlock = styled.div`
    padding: 60px 0;
`;

const ButtonBlock = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const PostItemList = styled.ul`
    list-style: none;
    margin: 0;
`;

const PostItemBlock = styled.li`
    padding:60px 0;
    &+&{
        border-top:1px solid #F2F2F2;
    }
`;

const PostInfo = styled.div`
    color: gray;
    font-size: 14px;
`;

const PostSubject = styled.h2`
    margin: 10px 0;
`;

const PostBody = styled.div``;

const PostItem = ({post}) => {
    return(
        <PostItemBlock>
            <PostInfo>{new Date(post.publishedData).toLocaleDateString()}</PostInfo>
            <PostSubject>{post.title}</PostSubject>
            <PostBody>{post.body}</PostBody>
        </PostItemBlock>
    );
}

const PostList = ({posts,error,loading,showWriteButton}) => {

    if(error){
        return <PostListBlock>에러발생</PostListBlock>;
    }

    if(loading || !posts){
        return null;
    }

    return (
        <PostListBlock>
            {showWriteButton&&
            (
                <ButtonBlock>
                    <Button to="/write">기록하기</Button>
                </ButtonBlock>
            )}
            
            <PostItemList>
                {
                    posts.map(post=>(<PostItem post={post}/>))
                }
            </PostItemList>
        </PostListBlock>
    );
};

export default PostList;