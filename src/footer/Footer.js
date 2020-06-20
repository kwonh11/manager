import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container} from '@material-ui/core';
import { Link} from '@material-ui/core';
import whiteArrow from '../images/white-arrow.png';
import arrow from '../images/arrow.png';
import {Box} from '@material-ui/core';
import {Tooltip} from '@material-ui/core';
import managementBackground from '../images/management-background.jpg';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Jack's Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '20vh',
      justifyContent:'center',
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      background : theme.palette.grey[200],
      textAlign:"center",
      color : 'white'
    },
    arrow : {
      width : '4vw',
      height : '4vw',
      padding : '3vw',
      alignSelf : 'center',
      marginBottom:'2vh',
      marginTop : '2vh',
      backgroundSize:'contain',
    },
  }));

  export default function StickyFooter(props) {
    const classes = useStyles();
    const {location} = props;
    console.log(`location.pathname? ${location.pathname}`);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    const transition = (e) => {
      e.target.style.cursor = 'pointer';
    }
    return (
      <React.Fragment>
        {location.pathname === '/guestbook'? null : (
          <React.Fragment>
      <Box className={classes.root} style={
        location.pathname === '/' ? 
        {background : `linear-gradient(black, #eeeeee)`} 
        : 
        {backgroundImage : `url(${managementBackground})`, backgroundSize : 'auto', transform: `scaleY(-1)`}}>
        <Tooltip title="Move to Top" aria-label="move-to-top" placement="top" enterDelay={350} leaveDelay={150}>
          <Box className={classes.arrow} style={
          location.pathname === '/'? 
          {background :`no-repeat center/80% url(${whiteArrow})`}
          : 
          {background :`no-repeat center/80% url(${arrow})`, transform:`rotate(180deg)`}}
          onClick={scrollToTop} onMouseOver={(e)=>transition(e)}/>
        </Tooltip>
      </Box>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright style={{fontWeight : 'bolder'}}/>
          </Container>
        </footer>
        </React.Fragment>
        )}
        </React.Fragment>
    );
  }