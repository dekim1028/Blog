import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const {form} = useSelector(({auth})=>({
        form:auth.signup
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
        dispatch(
            initializeForm('signup')
        );
    };
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