import { makeStyles,Box } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    button : {
        width : '100%',
        height : '100%',
    }
}))
export default function SignInButton (props) {
    const classes = useStyle();
    const {signIn} = props; // 이미지

    return (
        <Box component='span'>
            <img src={signIn} className={classes.button}></img>
        </Box>
    )
}