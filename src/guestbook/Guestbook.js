
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

export default function Guestbook({isLoading}) {
    const classes = useStyles();
    const inputRef = React.useRef();
    const [ cookies , setCookie , removeCookie ] = useCookies (['profile']);
    const [snack, setSnack] = React.useState({open:false});
    const [tooFastSnack, setTooFastSnack] = React.useState({open:false});
    const [deletedSnack, setDeletedSnack] = React.useState({open:false});
    const [errorSnack, setErrorSnack] = React.useState({open:false});
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
            setErrorSnack({open : true});
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
            setErrorSnack({open : true});
            getList();
        })
    }
    const onInputChange = (e) => {
        const value = e.target.value;
        if (value.length < 120) {
            setState({...state, input : value});
        } else if (value.length >= 95) {
            setSnack({open:true})
        }
    };
    const enterKeyHandler = (e) => {
        if (e.keyCode === 13) { // enter pressed
            const input = inputRef.current? inputRef.current.querySelector('#message') : '';
            if (input.value) {
                input.focus();
                chatContainerRef.current.scrollTo(0,chatContainerRef.current.scrollHeight);
                if (input.value, cookies.profile) {
                    // post API & get API
                    if (transportableRef.current === false) {
                        setTooFastSnack({open:true});
                    }else {
                        postGuestbook(input.value,cookies.profile.name, cookies.profile.picture).then(response => {
                            if (response.status === 200) {
                                setTimeout(()=>{
                                    transportableRef.current = true;
                                }, 15000);
                                transportableRef.current = false;
                                setSnack({open:true , status:'success'});
                                getList();
                            } 
                        }).catch(error => {
                            setSnack({open:true , status:'error'});
                        })
                    }
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
                    GUEST BOOK : LEAVE A MESSAGE.
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
        <CustomSnackbar open={snack.open} onClose={()=>setSnack({open:false})}
        content={snack.status === 'success'? 'SUCCESS' : snack.status === 'error'? 'FAILED : LOGIN FIRST' : 'max length : 120'} 
        status={snack.status === 'success'? 'success' : 'error'} />
        <CustomSnackbar open={tooFastSnack.open} onClose={()=>setTooFastSnack({open:false})}
        content='FAILED : sorry TOO FAST , Interval : 15s' status='error' />
        <CustomSnackbar open={deletedSnack.open} onClose={()=>setDeletedSnack({open:false})}
        content='Deleted' status='success' />
        <CustomSnackbar open={errorSnack.open} onClose={()=>setErrorSnack({open:false})}
        content={`Error ! `} status='error' />
        </React.Fragment>
    )
}

Guestbook.propTypes = {
    isLoading : PropTypes.bool
}