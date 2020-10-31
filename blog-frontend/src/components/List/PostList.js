import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import Tag from './Tag';

const PostListBlock = styled.div`
    padding-top: 30px;
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
    padding:50px 0;

    &:first-child{
        padding-top:30px;
    }

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

const PostBody = styled.div`
    overflow: hidden;
    word-break: break-all;
`;

const PostItem = ({post}) => {
    return(
        <PostItemBlock>
            <PostInfo>{new Date(post.publishedData).toLocaleDateString()}</PostInfo>
            <Tag key={`tag_${post.id}`} tags={post.tags}/>
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
                    posts.map(post=>(<PostItem key={post._id} post={post}/>))
                }
            </PostItemList>
        </PostListBlock>
    );
};

export default PostList;