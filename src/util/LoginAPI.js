import axios from "axios";
import serverURL from "./serverURL";

// URL export
// sever에서 받은 url로 리다이렉트
export const redirectGoogleLogin = () => axios.get(`${serverURL}/login`).then(res => location.assign(res.data));
export const getTokenAndProfile = (token) => {
    return axios.post(`${serverURL}/login`, {token} ,{
        withCredentials : true,
    }).then(response=>{
    Promise.resolve(response.data)
    });
}




