
import Loading from "../customHook/Loading";
import { Box, Paper, Typography, TextField, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {Face as FaceIcon} from '@material-ui/icons';
import CustomSnackbar from "../customHook/SnackBar";

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
        zIndex : 1
    },
    chatContainer : {
        height : '80%',
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
        width : '40vw',
        marginTop:'5vh'
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
        width: '60vw',
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
        width: '60vw',
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

export default function Board({isLoading}) {
    const classes = useStyles();
    const inputRef = React.useRef();
    const [snack, setSnack] = React.useState({open:false});
    const [state, setState] = React.useState({
        input : '',
        chatLogs : []
    })
    const logRef = React.useRef(state.chatLogs);
    const chatContainerRef = React.useRef();
    const onInputChange = (e) => {
        const value = e.target.value;
        if (value.length < 95) {
            setState({...state, input : value});
        } else if (value.length >= 95) {
            setSnack({open:true})
        }
    };
    const enterKeyHandler = (e) => {
        if (e.keyCode === 13) { // enter pressed
            const input = inputRef.current? inputRef.current.querySelector('#message') : '';
            if (input) {
                input.focus();
                chatContainerRef.current.scrollTo(0,chatContainerRef.current.scrollHeight);
                if (input.value) {
                    // post API & get API
                    logRef.current = [...logRef.current , input.value];
                    setState({input : '' , chatLogs : logRef.current});
                }
            }
        }
    }
    React.useEffect(()=>{
        // get API
        window.addEventListener('keydown', enterKeyHandler);
        return () => window.removeEventListener('keydown' , enterKeyHandler);
    },[]);

    return (
        <React.Fragment>
        <Loading isLoading={isLoading}/>
        <Box className={classes.container}>
        <Paper className={classes.paper} elevation={5}>
            <Box className={classes.chatContainer} ref={chatContainerRef}>
                <Typography variant='h3' color='textPrimary' className={classes.backLogo}>
                    PREPARING
                </Typography>
                {
                    state.chatLogs.map((value,index)=> {
                        return (
                            index%2===0? 
                            // 다른사람들이 말한 건 왼쪽 정렬
                            (
                        <Box className={classes.chatBox} key={index}>
                            <Avatar className={classes.OtherAvatar}>
                                <FaceIcon/>
                            </Avatar>                       
                            <Paper className={classes.bubble}>
                                <Typography variant='caption' style={{fontSize:'0.5rem', lineHeight:'0.8'}}>{`${new Date().toDateString()} ${new Date().toTimeString()}`}</Typography>
                                {value}
                            </Paper>
                        </Box>)
                            :
                            // 내가 말했을 경우 오른쪽 정렬, profile의 이름과 비교 
                            (
                        <Box className={classes.chatBox} style={{alignSelf:'flex-end'}} key={index}>
                            <Paper className={classes.myBubble} key={index}>
                            <Typography variant='caption' style={{fontSize:'0.5rem', lineHeight:'0.8'}}>{`${new Date().toDateString()} ${new Date().toTimeString()}`}</Typography>
                                {value}
                            </Paper>
                            <Avatar className={classes.myAvatar}>
                                <FaceIcon/>
                            </Avatar>
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
        content='max length : 80' status='error'>
        </CustomSnackbar>
        </React.Fragment>
    )
}

Board.propTypes = {
    isLoading : PropTypes.bool
}