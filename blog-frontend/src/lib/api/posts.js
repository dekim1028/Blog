import client from "./client";
import qs from 'qs';

export const writePost = ({title,body,tags})=>
    client.post("/api/posts",{title,body,tags});

export const viewPost = id => client.get(`/api/posts/${id}`);

export const listPost = ({page,userid,tag})=>{
    const queryString = qs.stringify({
        page,
        userid,
        tag,
    });
    return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({id,title,body,tags})=>
    client.patch(`/api/posts/${id}`,{title,body,tags});

export const removePost = id =>
    client.delete(`/api/posts/${id}`);