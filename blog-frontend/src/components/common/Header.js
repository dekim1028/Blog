import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeaderBlock = styled.div`
    position:fixed;
    width:100%;
    background-color:white;
    box-shadow: 0px 1px 3px rgb(0,0,0,0.7);
`;

const Wrapper = styled.div`
    height: 60px;
    padding: 15px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    .logo{
        font-size: 18px;
        font-weight:bold;
        letter-spacing:2px;
    }
`;

const Spacer = styled.div`
    height: 60px;
`

const Header = ({user,onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">
                        {user?user.username:"My"}.log
                    </div>
                    {
                        user?(
                            <Button onClick={onLogout}>로그아웃</Button>
                        ):(
                            <Button to="/login">로그인</Button>
                        )
                    }
                    
                </Wrapper>
            </HeaderBlock>
            <Spacer/>
        </>
    );
};

export default Header;