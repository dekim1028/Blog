import React from 'react';
import styled from 'styled-components';
import '../../styles/css/auth/AuthForm.scss';
import { Link } from 'react-router-dom';

const InputBox = styled.input`
    width: 100%;
    border:none;
    border-bottom:1px solid #A4A4A4;
    font-size: 15px;
    margin-bottom: 20px;
`;

const AuthFooter = styled.div`
    margin:20px 0;
    a{
        color:#868e96;
        font-size: 13px;
        &:hover{
            color:#212529;
        }
    }
`;

const onSubmit = e =>{
    e.preventDefault();
}

const AuthForm = ({type}) => {
    return (
        <div className="AuthForm">
            <h1 className="type_text">
                {type==='login'?'로그인':'회원가입'}
            </h1>
            <form>
                <InputBox name="id" type="text" placeholder="아이디"/>
                <InputBox name="password" type="password" placeholder="패스워드"/>
                {type==='signup'&&(
                    <InputBox name="passwordConfirm" type="password" placeholder="패스워드 확인"/>
                )}
                <button className="type_btn" onSubmit={onSubmit}>
                    {type==='login'?'로그인':'회원가입'}
                </button>
            </form>
            <AuthFooter>
                {type==='login'?
                    (<Link to="/signup">회원가입</Link>)
                    :
                    (<Link to="/login">로그인</Link>)
                }
                
            </AuthFooter>
        </div>
    );
};

export default AuthForm;