import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import { useEffect } from 'react';

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
`;

const PostItem = styled.li`
    &+&{
        margin-top: 50px;
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

const PostList = () => {
    return (
        <PostListBlock>
            <ButtonBlock>
                <Button to="/write">기록하기</Button>
            </ButtonBlock>
            <PostItemList>
                <PostItem>
                    <PostInfo><b>test</b> | 2020.02.03</PostInfo>
                    <PostSubject>제목입니다.</PostSubject>
                    <PostBody>내용이야아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ내용이야아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</PostBody>
                </PostItem>
            </PostItemList>
        </PostListBlock>
    );
};

export default PostList;