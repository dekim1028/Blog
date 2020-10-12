import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplete>
            <LoginForm/>
        </AuthTemplete>
    );
};

export default LoginPage;