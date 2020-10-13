import client from './client';

export const login = ({userid,password})=>
    client.post('/api/auth/login',{userid,password});