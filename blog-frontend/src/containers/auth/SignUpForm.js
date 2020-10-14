import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import { useEffect } from 'react';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const {form, auth, authError} = useSelector(({auth})=>({
        form:auth.signup,
        auth:auth.auth,
        authError:auth.authError
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
        const {userid,password,passwordConfirm} = form;
        if(password!==passwordConfirm){
            //TODO:오류처리
            return;
        }
        dispatch(signup({userid,password}));
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
            console.log("회원사입 성공");
            console.log(auth);
        }
    },[auth,authError]);

    return (
        <AuthForm
            type='signup'
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default SignUpForm;