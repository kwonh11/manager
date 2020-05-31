
import {List, ListItemText, ListItemAvatar , Divider, ListItem, Typography , Avatar} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SignInButton from './SignInButton';
import googleSignin from '../buttonImage/googleSignin.png';
import loginUrl from '../util/googleAuth';
import SignOutButton from "./SignOutButton";


const useStyles = makeStyles(theme => ({
    list : {
        width : '22vw',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column'
    },
    listItem : {
        width : '100%',
        height : '100%',
        padding : '1.3vh 1.5vw'
    },
    listItemText : {
        textAlign : 'center',
        color : '#838282',
        marginBottom : '30px',
    },
    largeAvatar : {
        width : theme.spacing(9),
        height : theme.spacing(9),
    },
    inline : {
        display : 'inline'
    },
    listText : {
        color : '#838282',
        textAlign:'center'
    }
}))
export default function MenuList ({anchor , toggleDrawer, profile}) {
    const classes = useStyles();
    function handleOnClickLogin (loginUrl) {
        window.location.assign(loginUrl);
    }
    const isLogged = profile? true : false;
    console.log(`profile : ${JSON.stringify(profile)}`)

    return (
        <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
                <ListItemText primary={isLogged? 'PROFILE' : 'LOGIN MENU'} className={classes.listItemText}>
                </ListItemText>

            {isLogged? 

            (<React.Fragment>
                <ListItem alignItems='center' className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar src={profile.picture} className={classes.largeAvatar} alt={profile.name}/>
                    </ListItemAvatar>
                    <ListItemText primary={profile.name} className={classes.listText}></ListItemText>
                    <br/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className={classes.listItem} divider>
                    <ListItemText primary='EMAIL : ' secondary={
                        <React.Fragment>
                            <Typography component='span' variant='body2' color='textPrimary' className={classes.inline}>
                                {profile.email} 
                            </Typography>
                        </React.Fragment>
                    }>
                    </ListItemText>
                </ListItem>
            </React.Fragment>)
                : 
            (<ListItem button className={classes.listItem} onClick={()=>handleOnClickLogin(loginUrl)}>
                <SignInButton signIn={googleSignin}/>
            </ListItem>)}
            <SignOutButton className={classes.listItem}/>
          </List>
      </div>
    )
}