import { makeStyles } from '@material-ui/core/styles';
import { Grow, Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root : {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems : 'flex-start',
        width : '100%',
        height : '35vh',
        backgroundColor : 'inherit'
    },
    innerBox : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'inherit',
        width : '30vw',
        color:'#eaeaea',
        textShadow: '1px 5px 5px #9e9999'
    }
}));
export default function Description () {
    const classes = useStyles();
    const [grow, setGrow] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setGrow(entry.isIntersecting);
        } 
      )},{   // options
          rootMargin : '150px 0px'
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
    <React.Fragment>
        <Grow in={grow}
                style={{ transformOrigin: '50% 100%' }}
                {...(grow ? { timeout: {appear : 1500 , enter : 1500 , exit : 1000} } : {})}
            >
        <Box className={classes.root} ref={domRef}>
            <Box className={classes.innerBox}>
                <Typography variant='h4' style={{fontWeight:'bolder'}}>
                    SOME TEXT
                </Typography>
            </Box>
            <Box className={classes.innerBox}>
            <Typography variant='h4' style={{fontWeight:'bolder'}}>
                    SOME TEXT
            </Typography>
            </Box>
        </Box>      
        </Grow>
    </React.Fragment>
    )
}