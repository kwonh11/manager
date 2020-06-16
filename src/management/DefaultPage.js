import { Box, Button, Fade, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from '../images/management-background.jpg'
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    container : {
        width : '100%',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        backgroundImage : `url(${background})`,
        color:'white',
    },
    button : {
        fontWeight : 'bolder',
        margin : theme.spacing(1)
    },
    buttonContainer : {
        flexDirection : 'row',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        margin : theme.spacing(1),
    },
    text: {
        ...theme.typography.button,
        backgroundColor: 'inherit',
        textShadow : '0.5px 0.5px 1px #0000005c',
        margin : '0 1vw 1.7vh',
        color: '#6a748c',
    },
}));
const defaultData = {
    columns : [
      { title: 'Name', field: 'Name' , grouping:false},
      { title: 'Surname', field: 'Surname' },
      { title: 'Birth Year', field: 'Birth Year' },
      { title: 'Phone' , field:'Phone', grouping:false},
      {
        title: 'Gender',
        field: 'Gender',
      },
      { title: 'Memo' , field:'Memo'}
    ],
    data : [
      { "Name": 'Mehmet', 'Surname': 'Baran', "Birth Year": 1983, "Phone":'01046509995' ,"Gender": 1 , "Memo":''},
      { "Name": 'Adam', 'Surname': 'Adam', "Birth Year": 1984, "Phone":'01046509795' ,"Gender": 2 , "Memo":''},
      { "Name": 'Mehmet', 'Surname': 'Atom', "Birth Year": 1985, "Phone":'01046509695' ,"Gender": 1 , "Memo":''},
      { "Name": 'mul', 'Surname': 'Kongna', "Birth Year": 1986, "Phone":'01046509195' ,"Gender": 1 , "Memo":''},
      { "Name": 'Jack', 'Surname': 'Jack', "Birth Year": 1987, "Phone":'01046509295' ,"Gender": 2 , "Memo":''},
      { "Name": 'Bob', 'Surname': 'Bob', "Birth Year": 1988, "Phone":'01046509395' ,"Gender": 2 , "Memo":''},
    ]
  }
export default function DefaultPage ({state , setState, match}) {
    const [fade, setFade] = React.useState(false);
    const [fade2, setFade2] = React.useState(false);
    const classes = useStyles();
    const handleOnDEMOClick = () => {
        setState({...state , columns : defaultData.columns , data : defaultData.data, defaultPage : !state.defaultPage});
    }
    React.useEffect(()=>{
        setFade(true);
        setTimeout(setFade2(true) , 1500);
    },[])
    return (
    <Fade in={fade} timeout={{enter : 800, exit:500}}>
        <Box className={classes.container}>
            <Typography variant='h1' color='initial' style={{textShadow:'5px 1.5px 1.5px gray'}}>
                Management Table
            </Typography>
            <Typography variant='subtitle2' gutterBottom style={{textShadow:'2px 2px 1px black'}}> 
                You may try the DEMO if this your first time, 
                or get started right away!
            </Typography>
            <Fade in={fade2} timeout={{enter : 3000, exit:500}}>
                <Box className={classes.buttonContainer}>
                    <Button className={classes.button} variant='contained' color='secondary' size='large' onClick={handleOnDEMOClick}>
                            USE DEMO 
                    </Button>
                    <Link to='/headers' style={{textDecoration : 'none'}}>
                        <Button className={classes.button} variant='contained' color='primary' size='large'>
                            GET STARTED RIGHT AWAY
                        </Button>
                    </Link>
                </Box>
            </Fade>
        </Box>
    </Fade>
    )
}