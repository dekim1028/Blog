import React from 'react';
import styled from 'styled-components';

const AuthTempleteBlock = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#FAFAFA;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const WhiteBox = styled.div`
    width: 450px;
    background-color:#ffffff;
    text-align:center;
    padding: 30px 0;
    box-shadow:0 0 8px rgba(0,0,0,0.1);
`;

const Logo = styled.i`
    font-weight:bold;
    font-size:30px;
`;

const AuthTemplete = ({children}) => {
    return (
        <AuthTempleteBlock>
            <WhiteBox>
                <Logo>My.log</Logo>
                {children}
            </WhiteBox>
        </AuthTempleteBlock>
    );
};

export default AuthTemplete;