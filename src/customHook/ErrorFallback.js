import { Box, Paper,Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100vw',
        height : '100vh'
    },
    paper : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width : '80vw',
        height : '50vh',
        color : theme.palette.grey[500],
        fontWeight : 'bolder'
    },
    paper2 : {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        marginTop:'3vh',
        fontWeight : 'bolder'
    },
    button : {
        marginTop : '5vh',
        fontWeight:'bolder'
    }
}));
export default function ErrorFallback ({error, componentStack, resetErrorBoundary}) {
    const classes = useStyle();
    const [second , setSecond] = React.useState(10);

    React.useEffect(()=>{
        if (second <= 0) location.replace(location.origin);
        console.log(`second :  ${second}`);
        const interval = setInterval(()=>{
            setSecond(second-1);
        }, 1000);
        return () => clearInterval(interval);
    },[second]);

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant='h3'> {`ERROR : ${error.message}`} </Typography>
                <Typography variant='h3'> {`Will go back to the HOME`}  </Typography>
                <Typography variant='h2'> {`in ${second} seconds.`}  </Typography>
                <Button className={classes.button} variant='outlined' color='secondary' size='large' onClick={resetErrorBoundary}> 
                    Return to Home Now 
                </Button>
                <Paper className={classes.paper2} elevation={0}>
                    <Typography variant='subtitle1'> {`Please check below.`}  </Typography>
                    <Typography variant='subtitle2'> {`1. Login timeout - Login Retention Time: 2 hours`}  </Typography>
                    <Typography variant='subtitle2'> {`2. Invalid Request`}  </Typography>
                </Paper>
            </Paper>
        </Box>
    )
}