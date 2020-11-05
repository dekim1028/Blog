import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    position:fixed;
    width:100%;
    background-color:white;
    box-shadow: 0px 1px 3px rgb(0,0,0,0.2);
    z-index:999;
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
        font-style:italic;
    }
`;

const Header = ({user,onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link className="logo" to="/">
                        {user?user.username:"My"}.log
                    </Link>
                    {
                        user?(
                            <Button onClick={onLogout}>로그아웃</Button>
                        ):(
                            <Button to="/login">로그인</Button>
                        )
                    }
                    
                </Wrapper>
            </HeaderBlock>
        </>
    );
};

export default Header;