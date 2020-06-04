import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Board from "./board/Board";
import Management from "./management/Management";
import {CssBaseline} from '@material-ui/core';
import Home from "./home/Home";
import Footer from '../src/footer/Footer';
import qs from 'qs';
import jwtDecode from 'jwt-decode';

// 컨텍스트 목록
export const UserContext = React.createContext();
export const LogoutContext = React.createContext();
export const ProfileContext = React.createContext();

export default function App() {
    const [ profile , setProfile ] = React.useState();
    const { id_token } = qs.parse(window.location.hash.substr(1));
    const localToken = localStorage.getItem('token');
    React.useEffect(()=>{
        if (id_token) {
            localStorage.setItem('token' , id_token);
            window.location.href = window.location.origin;
        } else if (localToken) {
            const {sub , name, email, picture} = jwtDecode(localToken);
            console.log(jwtDecode(localToken));
            // user 확인하기 db에 저장된 id가 없다면 최초 로그인 event발생
            // 새로운 유저 데이터 생성 
            setProfile({id:sub,name,email,picture});
        }
    },[id_token , localToken]);
    return (
        <React.Fragment>
            <UserContext.Provider value={profile}>          {/* 유저 프로필 컨텍스트    */}
            <LogoutContext.Provider value={setProfile}>   {/* 로그아웃 이벤트 컨텍스트    */}
            <ProfileContext.Provider value={profile}>     {/* 프로필 컨텍스트  */}
            <CssBaseline/>
                <BrowserRouter>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/board" component={Board}></Route>
                        <Route path="/management" component={Management}></Route>
                    </Switch>
                </BrowserRouter>
            <Footer/>
            </ProfileContext.Provider>
            </LogoutContext.Provider>
            </UserContext.Provider>
        </React.Fragment>
    )
}