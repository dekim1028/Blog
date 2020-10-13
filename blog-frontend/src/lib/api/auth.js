import client from "./client"

export const login = ({userid,password})=>{
    client.post("/api/auth/login",{userid,password});
}

export const signup = ({userid,password})=>{
    client.post("/api/auth/signup",{userid,password});
}

export const check = () =>{
    client.get("/api/auth/check");
}