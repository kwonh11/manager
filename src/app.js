import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Board from "./board/Board";
import Management from "./management/Management";
import {CssBaseline} from '@material-ui/core';
import Home from "./home/Home";
import Footer from '../src/footer/Footer';
import redirectWithToken from "./util/redirectWithToken";
import qs from 'qs';

// 컨텍스트 목록
export const UserContext = React.createContext();
export const LogoutContext = React.createContext();

export default function App() {
    const [ profile , setProfile ] = React.useState();
    const { id_token } = qs.parse(window.location.hash.substr(1));
    console.log(`id_token : ${id_token}`);
    React.useEffect(()=>{
        if (id_token) {
            console.log('operate')
            redirectWithToken(id_token).then(data => {
                // setprofile 로직
                console.log(data);
            }).catch(err => {
                console.log(`error occured : ${err}`)
            })
            // localStorage.setItem('token' , id_token);
            // window.location.href = window.location.origin;
        } 
        // 만료기한 짧은 쿠키로 jwt 받아오는 로직 만들기

        // else if (localToken) {
        //     const {sub , name, email, picture} = jwtDecode(localToken);
        //     console.log(jwtDecode(localToken));
        //     // user 확인하기 db에 저장된 id가 없다면 최초 로그인 event발생
        //     // 새로운 유저 데이터 생성 
        //     setProfile({id:sub,name,email,picture});
        // }
    },[id_token]);
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