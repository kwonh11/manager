import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container} from '@material-ui/core';
import { Link} from '@material-ui/core';
import arrow from '../images/arrow.png';
import {Box} from '@material-ui/core';
import {Tooltip} from '@material-ui/core';

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
      backgroundColor:theme.palette.grey[200],
      textAlign:"center",
    },
    arrow : {
      width : '8vw',
      height : '8vh',
      alignSelf : 'center',
      background :`no-repeat center/80% url(${arrow})`,
      marginBottom:'2vh',
      backgroundSize:'contain',
    },
  }));

  export default function StickyFooter() {
    const classes = useStyles();
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
      <Box className={classes.root}>
        <Tooltip title="Move to Top" aria-label="move-to-top" placement="top" enterDelay={350} leaveDelay={150}>
          <Box className={classes.arrow} onClick={scrollToTop} onMouseOver={(e)=>transition(e)}/>
        </Tooltip>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </footer>
      </Box>
    );
  }