
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grow} from '@material-ui/core';
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Crossline from './Crossline';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent : 'center',
        height : '100vh',
        width : '90vw',
        marginTop:'-10vh',
        zIndex:0,
    },
    paper : {
        maxWidth: 850,
        minWidth: 350,
        width : '50vw',
        height : '70vh',
        margin : theme.spacing(4),
        flex : 2,
    },
    text : {
        maxWidth : 650,
        minWidth : 225,
        width : '30vw',
        height : '50vh',
        flex : 1,
        alignSelf : 'center',
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
      <React.Fragment>
        <Crossline>
            <Typography variant='h2' style={{color:'white', alignSelf:'center'}}> User's Guide </Typography>
        </Crossline>
        <div className={classes.root} ref={domRef}>
            <Grow in={grow} 
                  style={{ transformOrigin: '0 0 0' }}
                  {...(grow ? { timeout: 1000 } : {})}
                >
                <Paper elevation={3} className={classes.paper} ></Paper>
            </Grow>
            <Grow in={grow}
                 style={{ transformOrigin: '0 0 0' }}
                 {...(grow ? { timeout: 1200 } : {})}
                 >
                <Paper elevation={1} className={classes.text} ></Paper>
            </Grow>
        </div>
      </React.Fragment>
    )
}