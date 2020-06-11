import { Box, Button, Fade, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from '../images/management-background.jpg'
import { Link, Route, Switch } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    container : {
        width : '100%',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        backgroundImage : `url(${background})`
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
      { title: 'Name', field: 'name' , grouping:false},
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear' },
      { title: 'Phone' , field:'phone', grouping:false},
      {
        title: 'Gender',
        field: 'gender',
      },
      { title: 'Memo' , field:'memo'}
    ],
    data : [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1983, phone:'01046509995' ,gender: 1 , memo:''},
      { name: 'Adam', surname: 'Adam', birthYear: 1984, phone:'01046509795' ,gender: 2 , memo:''},
      { name: 'Mehmet', surname: 'Atom', birthYear: 1985, phone:'01046509695' ,gender: 1 , memo:''},
      { name: 'mul', surname: 'Kongna', birthYear: 1986, phone:'01046509195' ,gender: 1 , memo:''},
      { name: 'Jack', surname: 'Jack', birthYear: 1987, phone:'01046509295' ,gender: 2 , memo:''},
      { name: 'Bob', surname: 'Bob', birthYear: 1988, phone:'01046509395' ,gender: 2 , memo:''},
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
            <Typography variant='h1' color='textSecondary'>
                Management Table
            </Typography>
            <Typography variant='subtitle2' gutterBottom> 
                
                손쉽게 사용할 있는 데이터 테이블입니다.
                처음이라면 DEMO 를 체험해보거나 바로 시작해볼 수 있습니다.
                
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