
import Loading from "../customHook/Loading";
import { Box, Paper, Typography, TextField, Avatar,Tooltip,IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import CustomSnackbar from "../customHook/SnackBar";
import useOnFirstRender from "../customHook/useOnFirstRender";
import { getGuestbookList , postGuestbook, deleteGuestbook} from '../util/GuestbookAPI';
import DeleteIcon from '@material-ui/icons/Delete';
import {useCookies} from 'react-cookie';

const useStyles = makeStyles(theme => ({
    container : {
        width : '100%',
        height : '120vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        color:'white',
    },
    paper : {
        width : '75vw',
        height : '85vh',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
    },
    backLogo : {
        color : 'white',
        fontWeight:'bolder',
        position:'absolute',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        zIndex : 1,
        opacity:0.3
    },
    chatContainer : {
        height : '85%',
        width : '100%',
        padding : '0.5vw 5vw',
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        flexDirection : 'column',
        backgroundColor : '#d0d0d0',
        overflowY : 'scroll',
        overflowX : 'hidden'
    },
    inputBox : {
        width : '60vw',
        marginTop:'2vh'
    },
    bubble : {
        display : 'flex',
        flexDirection : 'column',
        color : 'white',
        border : 'thick #8a8a8a',
        borderRadius : '15px',
        backgroundColor : '#8e8e8e',
        padding : '5px 12px',
        margin : '0px 6px',
        maxWidth: '60vw',
        overflow:'hidden'
    },
    myBubble : {
        display : 'flex',
        flexDirection : 'column',
        color : 'white',
        border : 'thick #8a8a8a',
        borderRadius : '15px',
        backgroundColor : '#789fff',
        padding : '5px 12px',
        margin : '0px 6px',
        maxWidth: '60vw',
        overflow:'hidden'
    },
    chatBox : {
        display : 'flex',
        flexDirection : 'row',
        padding : '2px',

    },
    OtherAvatar : {
        color : '#fff',
        backgroundColor : 'black',
    },
    myAvatar : {
        color : '#fff',
        backgroundColor : '#2764ff',
    }
}));

export default function Guestbook(props) {
    const classes = useStyles();
    const inputRef = React.useRef();
    const [ cookies , setCookie , removeCookie ] = useCookies (['profile']);

    const {isLoading ,
        tooFastSnack, setTooFastSnack,
        deletedSnack, setDeletedSnack,
        errorSnack, setErrorSnack,
        successSnack, setSuccessSnack,
        notLoggedSnack, setNotLoggedSnack} = props;

    const [state, setState] = React.useState({
        input : '',
        chatLogs : []
    })
    const logRef = React.useRef();
    const chatContainerRef = React.useRef();
    const transportableRef = React.useRef(true);

    const getList = () => {
        getGuestbookList().then(result => {
            // console.log(result.data);
            const list = [...result.data];
            console.log(list);
            logRef.current = [...list];
            setState({...state, chatLogs : [...list]});
        }).catch(err=>{
            setErrorSnack({open : true , content : 'GUEST BOOK 목록 불러오기 실패'});
        })
    }

    // constructor
    useOnFirstRender(()=>{
        getList();
    })
    
    const handleOnDeleteClick = (e) => {
        const id = e.currentTarget.dataset.id;
        console.log(`삭제요청 ID : ${id}`);    // db의 _id값으로 삭제요청하기
        deleteGuestbook(id).then(result=>{
            if (result.result === 'deleted') setTimeout(setDeletedSnack({open:true}),3000);
            getList();
        }).catch(err => {
            console.log(err);
            setErrorSnack({open : true , content : '권한이 없습니다. 다시 로그인해보세요'});
            getList();
        })
    }
    const onInputChange = (e) => {
        const value = e.target.value;
        if (value.length < 120) {
            setState({...state, input : value});
        } else if (value.length >= 95) {
            setErrorSnack({open:true, content : `120글자 제한, 현재 : ${value.length} 글자`})
        }
    };
    const enterKeyHandler = (e) => {
        if (e.keyCode === 13) { // enter pressed
            const input = inputRef.current? inputRef.current.querySelector('#message') : '';
            if (input.value) {
                input.focus();
                chatContainerRef.current.scrollTo(0,chatContainerRef.current.scrollHeight);
                if (input.value) {
                    // post API & get API
                    if (transportableRef.current === false) {
                        setTooFastSnack({open:true});
                    } else if (!cookies.profile) {
                        setErrorSnack({open:true, content:'글 등록은 로그인 후 이용해주세요 :) '});
                    }else {
                        postGuestbook(input.value,cookies.profile).then(response => {
                            if (response.status === 200) {
                                setTimeout(()=>{
                                    transportableRef.current = true;
                                }, 15000);
                                transportableRef.current = false;
                                getList();
                                setSuccessSnack({open:true});
                            }
                        }).catch(error => {
                            setErrorSnack({open:true, content:'재 로그인 후 다시 시도해주세요 :) '});
                        })
                    }
                } else {
                    setErrorSnack({open:true, content:'재 로그인 후 다시 시도해주세요 :) '});
                }
            }
        }
    }
    React.useEffect(()=>{
        window.addEventListener('keydown', enterKeyHandler);
        return () => window.removeEventListener('keydown' , enterKeyHandler);
    },[]);
    const email = cookies.profile ? cookies.profile.email==='kwonh11@gmail.com' ? true : false : false;
    return (
        <React.Fragment>
        <Loading isLoading={isLoading}/>
        <Box className={classes.container}>
        <Paper className={classes.paper} elevation={5}>
            <Box className={classes.chatContainer} ref={chatContainerRef}>
                <Typography variant='h3' color='textPrimary' className={classes.backLogo}>
                    {`GUEST BOOK : 
                      LEAVE A MESSAGE`}.
                </Typography>
                {
                state.chatLogs.map((article,index)=> {
                    return (
                        (article.own || email) ? // 서버에서 확인된 본인게시물일 경우  (서버측 확인필요 수정후 주석 지우기 )
                        // 내가 말했을 경우 오른쪽 정렬, profile의 이름과 비교 
                        (
                    <Tooltip interactive placement='right' key={index} title={
                        <IconButton onClick={handleOnDeleteClick} color='primary' size='small' data-id={article._id}>
                            <DeleteIcon/>
                        </IconButton>
                    }>
                        <Box className={classes.chatBox} style={{alignSelf:'flex-end'}}>
                                <Paper className={classes.myBubble}>
                                <Typography variant='caption' style={{fontSize:'0.5rem', lineHeight:'0.8'}}>{article.date}</Typography>
                                    {article.content}
                                </Paper>
                                <Avatar className={classes.myAvatar} src={article.picture}/>
                        </Box>
                    </Tooltip>
                        )
                        :
                        // 다른사람들이 말한 건 왼쪽 정렬
                        (
                        <Box className={classes.chatBox} key={index}>
                            <Avatar className={classes.OtherAvatar} src={article.picture}/>
                            <Paper className={classes.bubble}>
                            <Typography variant='caption' style={{fontSize:'0.5rem', lineHeight:'0.8'}}>{article.date}</Typography>
                                {article.content}
                            </Paper>
                        </Box>
                        )    
                        )
                    })
                }
            </Box>
            <Box className={classes.inputBox}>
                <TextField
                id="message"
                size='medium'
                label="message"
                style={{ margin: 8 }}
                value={state.input}
                onChange={onInputChange}
                autoFocus
                placeholder="Enter a message"
                fullWidth
                ref={v => inputRef.current = v}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
            </Box>
        </Paper>
        </Box>
        </React.Fragment>
    )
}
Guestbook.propTypes = {
    isLoading : PropTypes.bool,
}