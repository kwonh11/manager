import axios from "axios";
import serverURL from "./serverURL";

// Google OpenID Connect 이용하기
// 참고 기술블로그 : https://www.daleseo.com/google-oidc/

// URL export
// sever에서 받은 url로 리다이렉트
export const redirectGoogleLogin = () => axios.get(`${serverURL}/login`).then(res => location.assign(res.data));
export const getTokenAndProfile = (token) => {
    return axios.post(`${serverURL}/login`, {token} ,{
        withCredentials : true,
    }).then(response=> Promise.resolve(response.data));
}




