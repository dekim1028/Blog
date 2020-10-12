import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import SignUpForm from '../containers/auth/SignUpForm';

const SignUpPage = () => {
    return (
        <AuthTemplete>
            <SignUpForm/>
        </AuthTemplete>
    );
};

export default SignUpPage;