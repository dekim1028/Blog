import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';

const WriteActionButtonBlock = styled.div`
    display:flex;
    
    button+button{
        margin-left:10px;
    }
`;

const WriteActionButton = () => {
    return (
        <WriteActionButtonBlock>
            <Button width="145px">포스트 저장</Button>
            <Button color1 width="65px">취소</Button>
        </WriteActionButtonBlock>
    );
};

export default WriteActionButton;