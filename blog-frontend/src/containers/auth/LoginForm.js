import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = ({history}) => {
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
            console.log("오류발생");
            console.log(authError);
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
            history.push("/");
        }
    },[user,history]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(LoginForm);