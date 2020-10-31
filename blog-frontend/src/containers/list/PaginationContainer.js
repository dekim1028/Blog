import React from 'react';
import Pagination from '../../components/List/Pagination';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({location,match}) => {

    const {posts, lastPage, loading} = useSelector(({list, loading})=>({
        posts:list.posts,
        lastPage:list.lastPage,
        loading:loading["list/LIST_POST"],
    }));

    if(!posts || loading) return null;

    const {userid} = match.params;

    const {tag,page=1} = qs.parse(location.search,{
        ignoreQueryPrefix:true,
    });

    return (
        <Pagination lastPage={lastPage} userid={userid} tag={tag} page={parseInt(page)}/>
    );
};

export default withRouter(PaginationContainer);