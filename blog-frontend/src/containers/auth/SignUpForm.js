import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import { check } from '../../modules/user';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const SignUpForm = ({history}) => {
    const dispatch = useDispatch();

    const {form, auth, authError, user} = useSelector(({auth, user})=>({
        form:auth.signup,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user,
    }));

    const onChange = e =>{
        const {name, value} = e.target;
        dispatch(
            changeField({
                form:'signup',
                key:name,
                value
            })
        );
    };

    const onSubmit = e =>{
        e.preventDefault();
        const {userid,password,passwordConfirm,username} = form;
        if(password!==passwordConfirm){
            //TODO:오류처리
            return;
        }
        dispatch(signup({userid,password,username}));
    };

    useEffect(()=>{
        dispatch(initializeForm('signup'));
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            console.log("오류발생");
            console.log(authError);
        }
        if(auth){
            console.log("회원가입 성공");
            console.log(auth);
            dispatch(check());
        }
    },[auth,authError,dispatch]);

    useEffect(()=>{
        if(user){
            history.push("/");
        }
    },[history,user]);

    return (
        <AuthForm
            type='signup'
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(SignUpForm);