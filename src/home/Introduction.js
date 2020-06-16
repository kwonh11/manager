import { makeStyles } from '@material-ui/core/styles';
import { Grow , Box, Paper,Fade } from "@material-ui/core";
import ImageCarousel from "./Carousel";
import imageList from './ImageSlideSources';
import ListCrouselDescription from './ListCarouselDescription';
import background from '../images/background1.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        height : '100vh',
        width : '100vw',
        backgroundImage : `url(${background})`,
        backgroundSize : 'cover',
    },
    paper : {
        minWidth: 750,
        maxWidth: '1000px',
        width : '70vw',
        height : '65vh',
        margin : theme.spacing(4),
        backgroundColor : 'inherit'
    },
    textPaper : {
        minWidth : 350,
        width : '70vw',
        alignSelf : 'center',
        justifyContent : 'center',
        backgroundColor:'inherit'
    },
  }));

export default function Introduction () {
    const [grow, setGrow] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [stepper, setStepper] = React.useState(0);
    const classes = useStyles();
    const domRef = React.useRef();
    console.log(`currentSlide : ${currentSlide}`)
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setGrow(entry.isIntersecting));
        setCurrentSlide(0);
      },{   // options
          rootMargin : '-70px 0px'
        });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <React.Fragment>
        <Fade in={grow}  timeout={{enter:3000, exit:800}}>
        <Box className={classes.root} ref={domRef}>
            <Grow in={grow} 
                  style={{ transformOrigin: '50% 100%'}}
                  {...(grow ? { timeout: {appear : 1500 , enter : 1500 , exit : 1000} } : {})}
                >
                <Paper elevation={4} className={classes.paper} >
                  {/* image carousel */}
                  <ImageCarousel 
                  list={imageList} 
                  currentSlide={currentSlide} 
                  setCurrentSlide={setCurrentSlide} 
                  setStepper={setStepper} 
                  />
                </Paper>
            </Grow>
            <Grow in={grow}
                 style={{ transformOrigin: '50% 100%'}}
                 {...(grow ? { timeout: {appear : 2000 , enter : 1500 , exit : 1000}} : {})}
                 >
                <Paper elevation={4} className={classes.textPaper}>
                    {/* list */}
                    <ListCrouselDescription stepper={stepper} ></ListCrouselDescription>
                </Paper>
            </Grow>
        </Box>
        </Fade>
      </React.Fragment>
    )
}