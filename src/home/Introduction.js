import { makeStyles } from '@material-ui/core/styles';
import { Grow , Box, Typography , Paper, Avatar } from "@material-ui/core";
import Crossline from './Crossline';
import ImageCarousel from "./Carousel";
import guideImage from '../images/guide.png';
import imageList from './ImageSlideSources';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent : 'center',
        height : '100vh',
        width : '100vw',
    },
    paper : {
        minWidth: 750,
        width : '65vw',
        height : '80vh',
        margin : theme.spacing(4),
    },
    textPaper : {
        minWidth : 350,
        width : '25vw',
        height : '80vh',
        alignSelf : 'center',
        justifyContent : 'center'
    },
    bigAvatar : {
        width : theme.spacing(12),
        height : theme.spacing(12),
        color: '#fff',
        backgroundColor: "green",
    },
    textWithShadow : {
      color:'#585656',
      fontWeight:'bolder',
      fontSize:'3.5rem',
      marginLeft:'2vw',
      textShadow: '4px 1.5px 1.5px grey'
    },
    logoBox : {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexDirection : 'row'
    },
    descriptionBox : {
      display:'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      maxWidth : '50vw',
      margin : '0 0 0 3vw'
    },
  }));

export default function Introduction () {
    const [grow, setGrow] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [autoPlay, setAutoPlay] = React.useState(false);
    const classes = useStyles();
    const domRef = React.useRef();

    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setGrow(entry.isIntersecting));
        setAutoPlay(true);
      },{   // options
          rootMargin : '-70px 0px'
        });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <React.Fragment>
        <Crossline>
            <Box className={classes.logoBox}>
            <Avatar alt='help' src={guideImage} className={classes.bigAvatar}>
            </Avatar>
              <Typography variant='button' className={classes.textWithShadow}> Management App </Typography>
            </Box>
            <Box className={classes.descriptionBox}>
              <Typography variant='subtitle2'>An application that you can easily create & design your own data.</Typography>
              <Typography variant='subtitle2'>Get started with your Google account!</Typography>
              <Typography variant='subtitle2'>This app will not keep any personal information.</Typography>
            </Box>
        </Crossline>
        <Box className={classes.root} ref={domRef}>
            <Grow in={grow} 
                  style={{ transformOrigin: '0 0 0' }}
                  {...(grow ? { timeout: 1000 } : {})}
                >
                <Paper elevation={4} className={classes.paper} >
                  <ImageCarousel list={imageList} setCurrentSlide={setCurrentSlide} autoPlay={autoPlay}/>
                </Paper>
            </Grow>
            <Grow in={grow}
                 style={{ transformOrigin: '0 0 0' }}
                 {...(grow ? { timeout: 1500 } : {})}
                 >
                <Paper elevation={4} className={classes.textPaper}>
                    {currentSlide}
                </Paper>
            </Grow>
        </Box>
      </React.Fragment>
    )
}