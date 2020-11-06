import React from 'react';
import styled from 'styled-components';
import Tag from '../List/Tag';

const PostViewBlock = styled.div`
    padding: 60px 0;
`;

const PostHeader = styled.div`
    .title{
        border-bottom: 1px solid lightgray;
        margin: 0;
        padding: 20px 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .info{
        text-align: right;
    }
`;
const PostBody = styled.div`
    min-height:400px;
    overflow: hidden;
    word-break: break-all;
`;
const PostFooter = styled.div`
    margin:10px 0;
`;

const PostView = ({post,error,loading, actionButton}) => {

    if(error){
        return <PostViewBlock>에러가 발생하였습니다.</PostViewBlock>
    }

    if(loading||!post){
        return null;
    }

    const {title,body,tags,user,publishedData} = post;

    return (
        <PostViewBlock>
            {actionButton}
            <PostHeader>
                <h1 className="title">{title}</h1>
                <p className="info">
                    <b>{user.userid}</b> {new Date(publishedData).toLocaleDateString()}
                </p>
            </PostHeader>
            <PostBody dangerouslySetInnerHTML={{__html:body}}/>
            <PostFooter>
                <Tag tags={tags}/>
            </PostFooter>
            {actionButton}
        </PostViewBlock>
    );
};

export default PostView;