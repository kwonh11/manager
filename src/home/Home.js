
import { makeStyles } from '@material-ui/core/styles';
import Introduction from "./Introduction";
import Introduction2 from "./Introduction2";
import Main from './Main';
import Loading from "../customHook/Loading";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent : 'center',
    },
  }));

export default function Home({isLoading}) {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Loading isLoading={isLoading}/>
                <Main/>
                  <Introduction2/>
                  <Introduction/>
            </div>
    )
}