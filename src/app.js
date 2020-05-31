import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Board from "./board/Board";
import Management from "./management/Management";
import {CssBaseline} from '@material-ui/core';
import Home from "./home/Home";
import Footer from '../src/footer/Footer';
import qs from 'qs';
import jwtDecode from 'jwt-decode';

export const UserContext = React.createContext();
export const LogoutContext = React.createContext();

export default function App() {
    const [ profile , setProfile ] = React.useState();
    const { id_token } = qs.parse(window.location.hash.substr(1));
    const localToken = localStorage.getItem('token');
    React.useEffect(()=>{
        if (id_token) {
            console.log(`idToken 있음`);
            localStorage.setItem('token' , id_token);
            const {email , name, picture} = jwtDecode(id_token);
        } else if (localToken) {
            console.log(`localToken 있음`);
            const {email , name, picture} = jwtDecode(localToken);
            setProfile({name,email,picture});
        }
    },[id_token , localToken]);
    return (
        <React.Fragment>
            <UserContext.Provider value={profile}>          {/* 유저 프로필 컨텍스트 */}
            <LogoutContext.Provider value={setProfile}>   {/* 로그아웃 이벤트 컨텍스트 */}
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
            </LogoutContext.Provider>
            </UserContext.Provider>
        </React.Fragment>
    )
}