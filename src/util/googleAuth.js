import qs from 'qs'
import axios from "axios";
import serverURL from "./serverURL";
// Google OpenID Connect 이용하기
// 참고 기술블로그 : https://www.daleseo.com/google-oidc/

// client ID : 1029543737304-qpf4g96mg3qchkgefigjt3rj5rkqmlog.apps.googleusercontent.com
// secret : pCh7oVceDNTSto_aX17xGJHa
// const CLIENT_ID = '1029543737304-qpf4g96mg3qchkgefigjt3rj5rkqmlog.apps.googleusercontent.com';
// const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
// const querystr = qs.stringify({
//     client_id : CLIENT_ID,
//     redirect_uri : 'http://localhost:5000',
//     response_type : 'token id_token',
//     scope : 'openid profile email', // contact API를 읽기전용으로 호출
//     nonce:
//     Math.random()
//       .toString(36)
//       .substring(2, 15) +
//     Math.random()
//       .toString(36)
//       .substring(2, 15),
// })

// URL export
// sever에서 받은 url로 리다이렉트
export default () => axios.get(`${serverURL}/login`).then(res => location.assign(res.data));




