import React, { useEffect,useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const SignUpForm = ({history}) => {
    const [error, setError] = useState('');
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

        if([userid,password,passwordConfirm,username].includes('')){
            setError("빈칸을 모두 입력하세요.");
            return;
        }
        if(password!==passwordConfirm){
            setError("비밀번호가 일치하지 않습니다.");
            dispatch(changeField({form:"signup",key:"password",value:''}));
            dispatch(changeField({form:"signup",key:"passwordConfirm",value:''}));
            this.signUpRef.current.passwordRef.focus();
            return;
        }
        dispatch(signup({userid,password,username}));
    };

    useEffect(()=>{
        dispatch(initializeForm('signup'));
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            if(authError.response.status===409){
                setError("이미 사용중인 ID 입니다.");
                return;
            }
            setError("회원가입에 실패하였습니다. 관리자에게 문의하세요.");
            return;
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
            try{
                localStorage.setItem("user",JSON.stringify(user));
            }catch(e){
                console.log("localStorage is not working");
            }
        }
    },[history,user]);

    return (
        <AuthForm
            type='signup'
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(SignUpForm);