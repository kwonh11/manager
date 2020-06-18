
import Loading from "../customHook/Loading";
import { Box, Button, Fade, Paper, Typography,Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
        justifySelf : 'center',
    },
    inputBox : {
        width : '40vw',
        marginTop:'5vh'
    }
}));
export default function Board({isLoading}) {
    const classes = useStyles();
    const inputRef = React.useRef();
    React.useEffect(()=>{
        window.addEventListener('keydown', (e)=>{
            if (e.keyCode === 13) { // enter pressed
                inputRef.current.querySelector('#message').focus(); // focus 작동
            }
        })
    },[]);
    return (
        <React.Fragment>
        <Loading isLoading={isLoading}/>
        <Box className={classes.container}>
        <Paper className={classes.paper} elevation={5}>
            <Box className={classes.backLogo} >
            <Typography variant='h1' style={{fontWeight:'bolder' , color:'#e0e0e0'}}> IN READY. </Typography>
            <Typography variant='h1' style={{fontWeight:'bolder' , color:'#e0e0e0'}}> ~ 2020/06/21 </Typography>
            </Box>
            <Box className={classes.inputBox}>
                <TextField
                id="message"
                label="message"
                style={{ margin: 8 }}
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