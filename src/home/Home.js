
import { makeStyles } from '@material-ui/core/styles';
import Introduction from "./Introduction";
import Introduction2 from "./Introduction2";
import Main from './Main';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height : '350vh',
      justifyContent : 'center',
    },
  }));

export default function Home() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Main/>
                <Introduction/>
                <Introduction2/>
            </div>
    )
}