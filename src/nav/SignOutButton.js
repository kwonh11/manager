import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ListItem , IconButton, Tooltip} from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core'
import { LogoutContext } from '../app';
import {useCookies} from 'react-cookie';


const useStyle = makeStyles(theme => ({
    logout : {
        justifyContent:'flex-end',
        padding : '2px',
        margin : 0,
        width : 'auto',
    }
}))
const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[2],
      fontSize: 14,
      fontWeight:'bold'
    },
  }))(Tooltip);

export default function () {
    const classes = useStyle();
    const setProfile = React.useContext(LogoutContext);
    const [ cookies , setCookie , removeCookie ] = useCookies (['name','email','picture','user']);
    const handleLogout = () => {    // 모든 쿠키 삭제와 profile제거
        removeCookie('profile');
        removeCookie('user');
        location.href = location.origin;
    }
    return (
        <React.Fragment>
            <ListItem className={classes.logout}>
                <LightTooltip title='Log-out'>
                    <IconButton style={{padding:4}} onClick={handleLogout}>
                        <ExitToAppIcon/>
                    </IconButton>
                </LightTooltip>    
            </ListItem>
        </React.Fragment>
    )
}