
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grow} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'row-reverse',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignContent : 'center',
        height : '100vh',
        width : '90vw',
    },
    paper : {
      minWidth: 650,
      width : '60vw',
      height : '70vh',
      margin : theme.spacing(4),
  },
  text : {
    minWidth : 450,
    width : '30vw',
    height : '70vh',
    alignSelf : 'center',
    justifyContent : 'center'
  },
  }));

  export default function Introduction () {
    const [grow, setGrow] = React.useState(false);
    const classes = useStyles();
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setGrow(entry.isIntersecting));
      },{   // options
          rootMargin : '-70px 0px'
        });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div className={classes.root} ref={domRef}>
            <Grow in={grow} 
                  style={{ transformOrigin: '0 0 0' }}
                  {...(grow ? { timeout: 1000 } : {})}
                >
                <Paper elevation={4} className={classes.paper}></Paper>
            </Grow>
            <Grow in={grow}
                 style={{ transformOrigin: '0 0 0' }}
                 {...(grow ? { timeout: 1500 } : {})}
                 >
                <Paper elevation={4} className={classes.text}></Paper>
            </Grow>
        </div>
    )
}