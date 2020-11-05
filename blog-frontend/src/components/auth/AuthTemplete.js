import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Logo = styled(Link)`
    font-weight:bold;
    font-size:30px;
    font-style:italic;
`;

const AuthTemplete = ({children}) => {
    return (
        <AuthTempleteBlock>
            <WhiteBox>
                <Logo to="/">My.log</Logo>
                {children}
            </WhiteBox>
        </AuthTempleteBlock>
    );
};

export default AuthTemplete;