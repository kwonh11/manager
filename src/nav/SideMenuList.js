
import {List, ListItemText, ListItemAvatar , Divider, ListItem, Typography , Avatar, IconButton ,
     Modal, Box, Button,
     Paper,
     TextField} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SignInButton from './SignInButton';
import googleSigninImage from '../buttonImage/googleSignin.png';
import {redirectGoogleLogin} from '../util/LoginAPI';
import {Edit, Info, DeleteForever, Warning} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { saveData } from "../util/ManagementAPI";
import {GlobalSnackbarContext} from '../app'
const useStyles = makeStyles(theme => ({
    list : {
        width : '23vw',
        height: '100vh',
        display : 'flex',
        justifyContent : 'start',
        flexDirection : 'column'
    },
    listItem : {
        width : '100%',
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
    },
    modal : {
        top : '50%',
        left : '50%',
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: 400,
        minWidth : 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display : 'flex',
        flexDirection : 'column'
    },
    modalRowBox : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    modalColBox : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'start'
    },
    button : {
        fontWeight:'bolder'
    }
}))
export default function MenuList ({anchor , toggleDrawer, profile}) {
    const classes = useStyles();
    const handleGlobalSnackbar = React.useContext(GlobalSnackbarContext);
    const [emailInput, setEmailInput] = React.useState('');
    function handleOnClickLogin () {
        redirectGoogleLogin();
    }
    const handleOnClickModal = () => setModal(true);
    const handleOnCloseModal = () => setModal(false);
    const handleInputChange = (e) => setEmailInput(e.target.value);
    const handleOnSubmit = () => {
        if (emailInput === profile.email) {
            saveData({},[],[{}]).then(data => {
                handleGlobalSnackbar({
                    open:true, 
                    result: data.result === 'success' ? 'success' : 'error'
                });
                setTimeout(()=>{
                    location.replace(location.origin);
                },1500);
            }).catch(err => {
                throw new Error (err);
            })
        } else {
            handleGlobalSnackbar({
                open:true, 
                result:'error'
            });
        }
    }
    const [modal, setModal] = React.useState(false);
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
                    <IconButton edge='end' aria-label='edit-header' onClick={handleOnClickModal}>
                        <DeleteForever color='secondary' fontSize='large'/>
                    </IconButton>
                </ListItem>
                
                {/* 모달 */}
                <Modal
                open={modal}
                onClose={handleOnCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-contents"
                >
                    <Paper className={classes.modal}>
                        <Box className={classes.modalRowBox}>
                            <IconButton edge='start' aria-label='edit-header' disabled>
                                <DeleteForever color='secondary' fontSize='large'/>
                            </IconButton>
                            <Typography id="modal-title" variant='button' display='block' style={{fontWeight:'bolder'}}>
                                 Caution : permanent deletion
                            </Typography>
                        </Box>
                        <Box className={classes.modalColBox}>
                            <Typography id="modal-contents" variant='body1' style={{fontWeight:'bold'}}>
                                {`All data will be deleted and cannot be recovered.
                                Please enter your email correctly to continue.`}
                            </Typography>
                            <Typography variant='caption'>{profile.email}</Typography>
                        </Box>
                        <Box className={classes.modalRowBox}>
                            <TextField label='E-MAIL' onChange={handleInputChange}></TextField>
                            <Button className={classes.button} variant='contained' color='secondary' size='large' onClick={handleOnSubmit}>
                                submit
                            </Button>
                        </Box>
                    </Paper>
                </Modal>
            </React.Fragment>)
                : 
            (<ListItem button className={classes.listItem} onClick={handleOnClickLogin}>
                <SignInButton signIn={googleSigninImage}/>
            </ListItem>)}
          </List>
      </div>
    )
}