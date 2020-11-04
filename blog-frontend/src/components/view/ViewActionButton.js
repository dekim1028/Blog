import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../common/Button';

const ActionButtonBlock = styled.div`
    display:flex;
`;

const ViewButtonStyle = css`
    width:50px;
    height:25px;
    margin-right:5px;
    font-size: 14px;
    font-weight:500;
`;

const StyledButton1 = styled(Button)`
    ${ViewButtonStyle}
`;

const StyledButton2 = styled(Button)`
    ${ViewButtonStyle}
    
    background-color:#E6E6E6;
    color:gray;

    &:hover{
        background-color:#F2F2F2;
    }
`;

const ViewActionButton = ({onUpdate,onRemove}) => {
    return (
        <ActionButtonBlock>
            <StyledButton1 to="/">목록</StyledButton1>
            <StyledButton2 className="edit" onClick={onUpdate}>수정</StyledButton2>
            <StyledButton2 className="delete" onClick={onRemove}>삭제</StyledButton2>
        </ActionButtonBlock>
    );
};

export default ViewActionButton;