import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    padding: 20px 40px 0;
    .type_text{
        font-size: 20px;
        text-align: left;
    }
`;

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

const ErrorBox = styled.div`
    color:red;
    font-size: 13px;
    margin-bottom: 10px;
`;

const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    return (
        <AuthFormBlock>
            <h1 className="type_text">
                {type==='login'?'로그인':'회원가입'}
            </h1>
            <form onSubmit={onSubmit}>
                <InputBox name="userid" type="text" placeholder="아이디" value={form.userid} onChange={onChange}/>
                <InputBox name="password" type="password" placeholder="패스워드" value={form.password} onChange={onChange}/>
                {type==='signup'&&(
                    <InputBox name="passwordConfirm" type="password" placeholder="패스워드 확인" value={form.passwordConfirm} onChange={onChange}/>
                )}
                {type==='signup'&&(
                    <InputBox name="username" type="text" placeholder="이름" value={form.username} onChange={onChange}/>
                )}
                {error&&<ErrorBox>{error}</ErrorBox>}
                <Button width="100%" height="40px">
                    {type==='login'?'로그인':'회원가입'}
                </Button>
            </form>
            <AuthFooter>
                {type==='login'?
                    (<Link to="/signup">회원가입</Link>)
                    :
                    (<Link to="/login">로그인</Link>)
                }
            </AuthFooter>
        </AuthFormBlock>
    );
};

export default AuthForm;