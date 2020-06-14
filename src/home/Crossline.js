import { makeStyles } from '@material-ui/core/styles';
import { Box , Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      margin:0,
      padding:'1vw',
      display: 'flex',
      flexWrap: 'wrap',
      width : '100%',
      justifyContent : 'center',
      flexDirection : 'column',
      alignItems : 'center',
      margin:'auto',
    },
}));

  export default function Crossline({children}) {
    const [fade, setFade] = React.useState(false);
    const classes = useStyles();
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setFade(entry.isIntersecting));
      },{   // options
          rootMargin : '-50px 0px'
        });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <Fade in={fade} timeout={{enter:2000, exit:800}}>
        <Box className={classes.root} boxShadow={4} ref={domRef}>
            {children}
        </Box>
      </Fade>
    )
}