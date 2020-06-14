import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from "@material-ui/core";
import backgroundImage from '../images/background1.jpg';
import { Fade } from "@material-ui/core";
import StartButton from "./StartButton";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent : 'center',
        height : '100vh',
        width : '100%',
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize : 'cover',
        color : 'white'
    },
}));
export default function Main () {
    const classes = useStyles();
    const [fade,setFade] = React.useState(false);
    const isFirstRef = React.useRef(true);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setFade(entry.isIntersecting));
            if (isFirstRef.current) isFirstRef.current = false;
        },{   // options
            rootMargin : '-350px 0px'
        });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
    <Fade in={fade} timeout={{enter:1300, exit:800}}>
        <Box className={classes.root} ref={domRef}>
            <Typography variant='h1' color='inherit' style={{textShadow:'5px 1.5px 1.5px gray'}}>
                {isFirstRef.current ? 'WELCOME' : 'Ready to start?'}
            </Typography>
            {/* {
            isFirstRef.current && 
            (<Typography variant='h6' color='inherit' style={{textShadow:'3px 1px 1px gray'}}>
                
            </Typography>)
            } */}
                {isFirstRef.current? null : (<StartButton/>)}
            {/* !isFirstRef 일 시 바로가기 버튼 추가 */}
        </Box>
    </Fade>
    )
}