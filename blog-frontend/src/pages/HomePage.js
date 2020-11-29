import React from 'react';
import { useSelector } from 'react-redux';
import PostListPage from './PostListPage';
import AboutDDPage from './AboutDDPage';

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
            <AboutDDPage/>
        );
    }
};

export default HomePage;