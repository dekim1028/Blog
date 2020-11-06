import React from 'react';
import Header from '../../components/common/Header';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../../modules/user';
import {withRouter} from 'react-router-dom';

const HeaderContainer = ({history}) => {
    const {user} = useSelector(({user})=>({user:user.user}));
    const dispatch = useDispatch();

    const onLogout = () =>{
        dispatch(logout());
        alert("로그아웃 되었습니다.");
        history.push("/");
    }
    return (
        <Header user={user} onLogout={onLogout}/>
    );
};

export default withRouter(HeaderContainer);