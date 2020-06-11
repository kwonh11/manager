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
        textShadow : '0.5px 0.5px 1px #0000005c',
    },
    innerBox : {
        marginTop : '1vh',
    },
}))

export default function () {
    const classes = useStyle();
    return (
        <Box className={classes.innerBox}>
            <Link to='/management' style={{textDecoration:'none'}}>
                <Button size='large' color='secondary' variant='outlined' startIcon={<PlayArrowSharp color='secondary' style={{fontSize : 30}}/>} className={classes.button}>
                    GET STARTED
                </Button>
            </Link>
            <Typography className={classes.text}>
                {`지금 바로 시작해보세요.`}
            </Typography>
        </Box>
    )
}