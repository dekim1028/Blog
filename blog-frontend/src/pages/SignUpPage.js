import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import AuthForm from '../components/auth/AuthForm';

const SignUpPage = () => {
    return (
        <AuthTemplete>
            <AuthForm type="signup"/>
        </AuthTemplete>
    );
};

export default SignUpPage;