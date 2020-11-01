import React from 'react';
import { useSelector } from 'react-redux';
import PostListPage from './PostListPage';
import AboutMyLogPage from './AboutMyLogPage';

const HomePage = () => {
    const {user} = useSelector(({user})=>({
        user:user.user
    }));
    
    if(user){
        return (
            <PostListPage/>
        );
    }else{
        return (
            <AboutMyLogPage/>
        );
    }
};

export default HomePage;