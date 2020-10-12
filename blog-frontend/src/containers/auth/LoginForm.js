import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';

const LoginForm = () => {
    const dispatch = useDispatch();

    const {form} = useSelector(({auth})=>({
        form:auth.login
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
        dispatch(
            initializeForm('login')
        );
    };

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;