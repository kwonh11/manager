 import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Board from "./board/Board";
import Management from "./management/Management";
import Headers from './management/Headers';
import {CssBaseline} from '@material-ui/core';
import Home from "./home/Home";
import Footer from '../src/footer/Footer';
import qs from 'qs';
import {useCookies} from 'react-cookie'
import { getTokenAndProfile } from "./util/LoginAPI";
import CustomSnackbar from './customHook/SnackBar';

// 컨텍스트 목록
export const UserContext = React.createContext();
export const LogoutContext = React.createContext();
export const ProgressContext = React.createContext();
export const GlobalSnackbarContext = React.createContext();

export default function App() {
    const { id_token } = qs.parse(window.location.hash.substr(1));
    const [ cookies , setCookie , removeCookie ] = useCookies (['profile','user']);
    const [ profile , setProfile ] = React.useState(cookies.profile);
    const [isLoading, setIsLoading] = React.useState(false);
    const [globalSnackbar, setGlobalSnackbar] = React.useState({open : false , result: 'success'})
    const token = cookies.user;
    const progressRef = React.useRef(0);
    const handleBeforeunload = (result) => {
        const interval = setInterval(()=> {
            console.log(`progress : ${progressRef.current}`);
            setIsLoading(true);
            progressRef.current = (progressRef.current < 100 ? progressRef.current + 20 : 100);
        if (progressRef.current === 100) {
             progressRef.current = 0;
             setIsLoading(false);
             setGlobalSnackbar({open:true , result:result});
             clearInterval(interval);
        }
    },200)
    }
    React.useEffect(()=>{
        if(id_token) {
            console.log('fetch API 실행');
            getTokenAndProfile(id_token).then(data => {
                const {name ,email, picture} = data;
                console.log(`response data : ${JSON.stringify(data)}`);
                setCookie("profile",{name , email, picture},{path:"/" , maxAge : 7200});  // maxAge : 2시간
            }).catch(err => {
                console.log(`error occured : ${err}`)
            })
        }
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
            <UserContext.Provider value={profile || {name : ''}}>          {/* 유저 프로필 컨텍스트    */}
            <LogoutContext.Provider value={setProfile}>   {/* 로그아웃 이벤트 컨텍스트   */}
            <ProgressContext.Provider value={(result)=>handleBeforeunload(result)}>
            <GlobalSnackbarContext.Provider value={setGlobalSnackbar}>
            <CssBaseline/>
                <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path='/' render={()=><Home isLoading={isLoading}/>}></Route>
                    <Route path='/board' render={()=><Board isLoading={isLoading}/>}></Route>
                    <Route path='/management' render={()=> <Management isLoading={isLoading}/>}></Route>
                    <Route path='/headers' render={()=> <Headers isLoading={isLoading}/>}></Route>
                </Switch>
                    <Route path='/' render={(props)=><Footer {...props}/>}></Route>
                </BrowserRouter>
            </GlobalSnackbarContext.Provider>
            </ProgressContext.Provider>
            </LogoutContext.Provider>
            </UserContext.Provider>
            <CustomSnackbar open={globalSnackbar.open} onClose={()=>setGlobalSnackbar({open:false})} 
            content={globalSnackbar.result==='error'? `Not saved.
            Reason : Invalid input.` :' SAVED '} status={globalSnackbar.result}
            direction={{vertical:'top', horizontal:'right'}}/>
        </React.Fragment>
    )
}