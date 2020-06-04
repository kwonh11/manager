import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import {Fade} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      margin:0,
      padding:0,
      display: 'flex',
      flexWrap: 'wrap',
      height : '13vh',
      width : '100%',
      justifyContent : 'center',
      alignItems : 'center',
      background: 'rgb(191,185,185)',
      background: 'linear-gradient(160deg, rgba(191,185,185,1) 26%, rgba(47,135,166,1) 77%)',
      zIndex:100,
      margin:'auto',
      opacity:0.7,
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
      <Fade in={fade} timeout={{enter:1000, exit:800}}>
        <Box className={classes.root} boxShadow={4} ref={domRef}>
            {children}
        </Box>
      </Fade>
    )
}