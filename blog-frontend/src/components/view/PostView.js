import React from 'react';
import styled from 'styled-components';

const PostViewBlock = styled.div`
    padding: 60px 0;
`;

const PostHeader = styled.div`
    .title{
        border-bottom: 1px solid lightgray;
        margin: 0;
    }
    .info{
        text-align: right;
    }
`;
const PostBody = styled.div``;
const PostFooter = styled.div``;

const PostView = ({post,error,loading}) => {

    if(error){
        return <PostViewBlock>에러가 발생하였습니다.</PostViewBlock>
    }

    if(loading||!post){
        return null;
    }

    const {title,body,tags,user,publishedData} = post;

    return (
        <PostViewBlock>
            <PostHeader>
                <h1 className="title">{title}</h1>
                <p className="info">
                    <b>{user.userid}</b> {new Date(publishedData).toLocaleDateString()}
                </p>
            </PostHeader>
            <PostBody dangerouslySetInnerHTML={{__html:body}}/>
            <PostFooter>
                <ul>
                    {tags.map(tag=>(<li key={tag} tag={tag}>{tag}</li>))}
                </ul>
            </PostFooter>
        </PostViewBlock>
    );
};

export default PostView;