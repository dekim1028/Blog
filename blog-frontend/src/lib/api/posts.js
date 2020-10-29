import client from "./client";

export const writePost = ({title,body,tags})=>
    client.post("/api/posts",{title,body,tags});

export const viewPost = id => client.get(`/api/posts/${id}`);