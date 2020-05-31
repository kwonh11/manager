import { Link } from "react-router-dom";
import {Drawer} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Divider} from '@material-ui/core'
import {AppBar as Appbar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import HideOnSchroll from "../util/HideOnSchroll";
import SideMenuList from "./SideMenuList";
import { UserContext } from "../app";
import { Avatar } from "@material-ui/core";
import SignOutButton from "./SignOutButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems:'flex-start',
        paddingTop:18,
        paddingBottom:18,
    },
    left : {
        flexGrow: 1,
        paddingLeft:30,
        justify:'flex-start'
    },
    center : {
        flexGrow: 1,
    },
    right : {
        display : 'flex',
        paddingRight:45,
        justify:'flex-end',
        flexDirection : 'row',
        padding:`0 ${theme.spacing(3)}`
    }
  }));
export default function Nav (props) {
    const [state, setState] = React.useState({
        menu : false,
    });
    const classes = useStyles();
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const profile = React.useContext(UserContext);
    const anchor = profile ? 'MYPAGE' : 'LOGIN';
    const links = ['board','management'];
    const LogoutBtn = profile? <SignOutButton/> : null;

    return (
        <React.Fragment>
        <HideOnSchroll {...props}>
        <Appbar color='inherit' style={{boxShadow:'none'}}>
            <Toolbar>
        <Grid container spacing={2}>
            <Grid container className={classes.root}>
                <Grid item spacing={2} className={classes.left}>
                    <Link to='/' exact style={{textDecoration : 'none'}}><Button variant='outlined'> Home </Button></Link>
                    {links.map((link) => (
                        <Link to={`/${link}`} style={{textDecoration : 'none'}}><Button variant='outlined'> {link} </Button></Link>
                    ))}
                </Grid>
                <Grid item className={classes.center}><span></span></Grid>
                <Grid item className={classes.right}>
                    <Button variant='outlined' color='primary' onClick={toggleDrawer(anchor, true)} style={{marginRight:'5px'}}>
                        {anchor}
                    </Button>
                    {LogoutBtn}
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {SideMenuList( {...props, anchor ,toggleDrawer , profile} )}
                    </Drawer>
                </Grid>
            </Grid>
            <Divider/>
        </Grid>
            </Toolbar>
        </Appbar>
        </HideOnSchroll>
        </React.Fragment>
    )
}