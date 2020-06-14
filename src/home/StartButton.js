import {Button , Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { PlayArrowSharp } from "@material-ui/icons";
import {Link} from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    button : {
        width : 'fit-content',
        marginBottom : '0.5vh'
    },
    text: {
        ...theme.typography.button,
        backgroundColor: 'inherit',
        textShadow : '2px 1px 1px gray',
        color : 'inherit'
    },
    innerBox : {
        marginTop : '1vh',
        color:'white'
    },
}))

export default function () {
    const classes = useStyle();
    return (
        <Box className={classes.innerBox}>
            <Link to='/management' style={{textDecoration:'none', color:'white'}}>
                <Button size='large' color='secondary' variant='contained' 
                startIcon={<PlayArrowSharp color='inherit' style={{fontSize : 30}}/>} 
                className={classes.button}>
                    GET STARTED
                </Button>
            </Link>
        </Box>
    )
}