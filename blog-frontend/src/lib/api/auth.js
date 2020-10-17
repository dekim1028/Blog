import client from "./client"

export const login = ({userid,password})=>
    client.post("/api/auth/login",{userid,password});


export const signup = ({userid,password,username})=>
    client.post("/api/auth/signup",{userid,password,username});


export const check = () =>
    client.get("/api/auth/check");

export const logout = () =>
    client.post("/api/auth/logout");