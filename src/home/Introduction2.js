
import { Paper, Box, Grow, Avatar, Typography,Fade , Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import guideImage from '../images/moon.png';
import Crossline from './Crossline';
import ProjectDescription from './Description'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      height : '100vh',
      width : '100vw',
      backgroundColor : 'black'
    },
    logoBox : {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexDirection : 'row'
    },
    bigAvatar : {
      width : theme.spacing(12),
      height : theme.spacing(12),
      color: '#fff',
      backgroundColor: "green",
    },
    textWithShadow : {
      color:'#fff',
      fontWeight:'bolder',
      fontSize:'4rem',
      marginLeft:'2vw',
      textShadow: '1px 5px 5px #9e9999'
    },
    descriptionBox : {
      display:'flex',
      color: '#fff',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      maxWidth : '50vw',
      margin : '0 0 0 3vw'
    },
  }));

  export default function Introduction () {
    const [grow, setGrow] = React.useState(false);
    const [rise, setRise] = React.useState(false);
    const classes = useStyles();
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setGrow(entry.isIntersecting);
        } 
      )},{   // options
          rootMargin : '-70px 0px'
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <React.Fragment>
        <Box className={classes.root} ref={domRef}>
        <Fade in={grow}  timeout={{enter:2000, exit:800}}>
        <Crossline>
            <Box className={classes.logoBox}>
            <Fade in={grow} {...(grow? {timeout:{enter:3000, exit:800}} : {})}>
              <Avatar alt='help' src={guideImage} className={classes.bigAvatar}/>
            </Fade>
              <Typography variant='button' className={classes.textWithShadow}> Management App </Typography>
            </Box>
            <Box className={classes.descriptionBox}>
              <Typography variant='subtitle2'>An application that you can easily create & design your own data.</Typography>
              <Typography variant='subtitle2'>Get started with your Google account!</Typography>
              <Typography variant='subtitle2'>This app will not keep any personal information.</Typography>
            </Box>
        </Crossline>
        </Fade>
          <ProjectDescription/>
        </Box>
      </React.Fragment>
    )
}