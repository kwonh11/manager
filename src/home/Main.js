import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import wood2 from "../background/wood2.jpg";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent : 'center',
        height : '100vh',
        width : '100%',
        backgroundImage:`url(${wood2})`,
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
        <Fade in={fade} timeout={{enter:2000, exit:1000}}>
            <div className={classes.root} ref={domRef}>
                <Typography variant='h1' color='textSecondary'> 
                    {isFirstRef.current? 'WELCOME!!' : 'Ready to start?'}
                </Typography>
                {/* !isFirstRef 일 시 바로가기 버튼 추가 */}
            </div>
        </Fade>
    )
}