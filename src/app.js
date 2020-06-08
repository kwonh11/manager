 import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Board from "./board/Board";
import Management from "./management/Management";
import {CssBaseline} from '@material-ui/core';
import Home from "./home/Home";
import Footer from '../src/footer/Footer';
import redirectWithToken from "./util/redirectWithToken";
import qs from 'qs';
import {useCookies} from 'react-cookie'

// 컨텍스트 목록
export const UserContext = React.createContext();
export const LogoutContext = React.createContext();

export default function App() {
    const { id_token } = qs.parse(window.location.hash.substr(1));
    const [ cookies , setCookie , removeCookie ] = useCookies (['profile','user']);
    const [ profile , setProfile ] = React.useState(cookies.profile);
    const token = cookies.user;

    React.useEffect(()=>{
        console.log('fetch API 실행');
        redirectWithToken(id_token).then(data => {
            const {name ,email, picture} = data;
            console.log(`response data : ${JSON.stringify(data)}`);
            setCookie("profile",{name , email, picture},{path:"/" , maxAge : 7200});  // maxAge : 2시간
        }).catch(err => {
            console.log(`error occured : ${err}`)
        })
    },[id_token]);

    React.useEffect(()=>{
        // 기존 토큰이 있을 경우 서버로 재요청해서 만료된 토큰인지 확인
        // 만료된 토큰일 경우 쿠키프로필, state프로필, 만료된 토큰 모두 제거
        if (token) {
            console.log(`기존 토큰 있음 token : ${token}`);
        }
    },[token]);

    React.useEffect(()=>{
        if (cookies.profile) {
            console.log(`cookies.profile : ${JSON.stringify(cookies.profile)}`);
            setProfile(cookies.profile);
        }
    },[cookies.profile]);

    return (
        <React.Fragment>
            <UserContext.Provider value={profile}>          {/* 유저 프로필 컨텍스트    */}
            <LogoutContext.Provider value={setProfile}>   {/* 로그아웃 이벤트 컨텍스트   */}
            <CssBaseline/>
                <BrowserRouter>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/board' component={Board}></Route>
                        <Route path='/management' component={Management}></Route>
                    </Switch>
                </BrowserRouter>
            <Footer/>
            </LogoutContext.Provider>
            </UserContext.Provider>
        </React.Fragment>
    )
}