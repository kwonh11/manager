
import {List, ListItemText, ListItemAvatar , Divider, ListItem, Typography , Avatar, IconButton ,ListItemSecondaryAction} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SignInButton from './SignInButton';
import googleSigninImage from '../buttonImage/googleSignin.png';
import {redirectGoogleLogin} from '../util/LoginAPI';
import {Edit, Info, DeleteForever, Warning} from '@material-ui/icons'
import { Link } from 'react-router-dom';

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
    function handleOnClickLogin () {
        redirectGoogleLogin();
    }
    const isLogged = profile? profile.name? true : false : false;
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
                <ListItem className={classes.listItem} divider/>
                <ListItem className={classes.listItem} divider>
                    <Info color='primary' style={{marginRight:'1vw'}}/>
                    <ListItemText secondary='EDIT HEADERS'/>
                    <Link to='/headers'>
                        <IconButton edge='end' aria-label='edit-header'>
                            <Edit color='primary' fontSize='large'/>
                        </IconButton>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem} divider/>
                <ListItem className={classes.listItem} divider>
                    <Warning color='secondary' style={{marginRight:'1vw'}}/>
                    <ListItemText secondary='REMOVE ALL DATA'/>
                    <IconButton edge='end' aria-label='edit-header'>
                        <DeleteForever color='secondary' fontSize='large'/>
                    </IconButton>
                </ListItem>
            </React.Fragment>)
                : 
            (<ListItem button className={classes.listItem} onClick={handleOnClickLogin}>
                <SignInButton signIn={googleSigninImage}/>
            </ListItem>)}
          </List>
      </div>
    )
}