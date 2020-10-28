import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const LoginForm = ({history}) => {
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const {form, auth, authError, user} = useSelector(({auth,user})=>({
        form:auth.login,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user,
    }));

    const onChange = e =>{
        const {name, value} = e.target;
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        );
    };

    const onSubmit = e =>{
        e.preventDefault();
        const {userid,password} = form;
        dispatch(login({userid,password}));
    };

    useEffect(()=>{
        dispatch(
            initializeForm('login')
        );
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            setError("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
            return;
        }
        if(auth){
            console.log("로그인 성공");
            dispatch(check());
        }
    },[authError,auth,dispatch]);

    useEffect(()=>{
        if(user){
            console.log("CHECK api 성공");
            alert(`${user.username}님 안녕하세요!`);
            history.push("/");
            try{
                localStorage.setItem("user",JSON.stringify(user));
            }catch(e){
                console.log("localStorage is not working");
            }
        }
    },[user,history]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(LoginForm);