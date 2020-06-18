import { 
    Box ,Paper, makeStyles, Fade, TextField, Tooltip, Typography, Checkbox
}
 from "@material-ui/core";
import background from "../images/management-background.jpg";
import arrow from '../images/arrow.png';
import { saveHeaders } from "../util/ManagementAPI";
import { getManagementTable } from '../util/ManagementAPI';
import useOnFirstRender from '../customHook/useOnFirstRender';
import {useCookies} from 'react-cookie';
import CustomSnackbar from '../customHook/SnackBar';
import Loading from "../customHook/Loading";
import { ProgressContext } from "../app";
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
    container : {
        width : '100%',
        height : '120vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundImage : `url(${background})`,
    },
    paper : {
        flexDirection : 'column',
        alignContent : 'space-around',
        marginTop : '10vh',
    },
    formRoot : {
        '& > *': {
            margin: '0.5vh 1vw',
            width: '60ch',
            minWidth : '40ch',
            display:'flex',
        },
    },
    arrow : {
        width : '10vw',
        height : '10vh',
        alignSelf : 'center',
        background : `no-repeat center/80% url(${arrow})`,
        backgroundSize : 'contain',
        marginLeft : '3vw',
        transform : 'rotate(90deg)'
    },
    description : {
        alignSelf : 'center'
    }
}))
const defaultHeader = {
    "header0" : '',
    "header1" : '',
    "header2" : '',
    "header3" : '',
    "header4" : '',
    "header5" : '',
    "header6" : '',
    "header7" : '',
    "header8" : '',
    "header9" : '',
}
export default function Headers ({isLoading}) {
    // style, cookie
    const classes = useStyle();
    const handleProgress = React.useContext(ProgressContext);
    const [ cookies , setCookie , removeCookie ] = useCookies (['profile']);
    // states
    const [fade, setFade] = React.useState(false);
    const [snack, setSnack] = React.useState({open:false});
    const [resultSnack , setResultSnack] = React.useState({open:false, content : ''});
    const [data , setData] = React.useState({
        headers : defaultHeader,
        groupings : Array(10).fill(false),
    })
    // ref
    const dataRef = React.useRef();
    // constructor
    useOnFirstRender(()=>{
        getManagementTable().then(response => {
            console.log(`response : ${JSON.stringify(response)}`);
            if (response.status === 200) {
                const groupingLength = response.data? response.data.groupings ? response.data.groupings.length : 0 : 0;
                const groupings = response.data? response.data.groupings ? [...response.data.groupings] : [] : [];
                for (let i = 0; i < 10 - groupingLength; i ++) {
                    groupings.push(false);
                }
                const headers = response.data? response.data.headers ? response.data.headers : {} : {};
                const headersLength = Object.values(headers).length;
                for (let i = headersLength; i < 10; i++) {
                    headers[`header${i}`] = '';
                }
                dataRef.current = {headers,groupings};
                console.log(dataRef.current);
                setData({headers, groupings})
            } else {
                if (response.status === 204) {  // unauthorized
                    setTimeout(handleLogout(), 3500);
                    setResultSnack({open : true,status:'error', content : `Please log in again.`});
                } else {
                    setResultSnack({open : true,status:'error', content : `error (code : ${response.status})`});
                }
            }
        }).catch(err => {
            if(err) {
                console.log(err);
                setTimeout(handleLogout(), 3500);
                setResultSnack({open:true,status:'error', content:'Please log in again.'});
            }
        })}
    )

    React.useEffect(()=>{
        dataRef.current = {
            headers : {
                ...data.headers
            },
            groupings : [
                ...data.groupings
            ]
        };
    },[data.headers, data.groupings]);

    // effects
    React.useEffect(()=>{ 
        setFade(true);
        return () => {
            const result = handleSubmit(dataRef.current.headers, dataRef.current.groupings, true);
            handleProgress(result === 'error' ? 'error' : 'success');
        }
    },[]);


        
    // events
    const handleLogout = () => {    // 모든 쿠키 삭제와 profile제거
        removeCookie('profile');
        location.href = location.origin;
    }
    const handleSubmit = (headers, groupings, isAutoSave) => {
        if (!Object.values(headers).every(v => v.length <= 15)) { // 15글자 이상 제한 에러메세지
            setSnack({open:true});
            return 'error';
        }
        if (Object.values(headers).filter(v=>v).length === 0) {     // 비어있을 경우 에러메세지
            setSnack({open:true})
            return 'error';
        }
        saveHeaders(headers,groupings)
        .then(response => {
            if (!isAutoSave) setResultSnack({open : true, content : response.result});
        })
        .catch(err => {
            setTimeout(handleLogout(), 2000);
            setResultSnack({open:true,status:'error', content:'Please log in again.'});
        })
    }
    const handleInputChange = (e,index) => {
        setData({...data, headers : {
                ...data.headers,
                [`header${index}`] : e.target.value
            }
        })
    }
    const handleGroupings = (e,index) => {
        setData({...data, groupings : data.groupings.map((v,i)=> i===index? e.target.checked : v)});
    }
    // component
    return (
        <React.Fragment>
        <Loading isLoading={isLoading}/>
        <Box className={classes.container}>
        <Fade in={fade} timeout={{enter : 1500}}>
            <Paper className={classes.paper} elevation={4}>
                <form className={classes.formRoot} autoComplete='off'>
                    <Box component='div'>
                        <Typography variant='h4' color='textPrimary' style={{fontWeight:'bolder'}}> 
                            Header Edit Form 
                        </Typography>
                        <Box color={Object.values(data.headers).every(v => v.length <= 15) ? 'blue' : 'red'}>
                        <Typography variant='subtitle2' color='initial'>
                             Header should be less than 15 letters.
                        </Typography>
                        </Box>
                    </Box>
        {
        Object.values(data.headers).map((header,index)=>{
            return (
                <div key={index}>
                <TextField 
                required={index===0? true:false}
                id={`${index}`}
                key={index}
                label={`header-${index+1}`}
                value={data.headers[`header${index}`]}
                margin='normal'
                onChange={(e)=>handleInputChange(e,index)}
                error={data.headers[`header${index}`].length > 15 ? true : false}
                />
                <Tooltip title="
You can arrange the data with a valid header, 
Unique values are not commonly used for this function in general.
e.g.) name, address, mobile NO. etc.
"
                 placement='right' enterDelay={200} leaveDelay={200}>
                    <Checkbox 
                    checked={data.groupings[index]} 
                    onChange={(e)=>handleGroupings(e,index)}
                    >
                    </Checkbox>
               </Tooltip>
                    {index===0? 
                    <Box component='span' className={classes.description}> Grouping!?</Box>
                    : null}
                </div>
            )})
        }

                </form>
            </Paper>
        </Fade>
        <Tooltip title="SUBMIT" aria-label='submit' placement='top' enterDelay={200} leaveDelay={400}>
            <Box className={classes.arrow} onMouseOver={(e)=>e.target.style.cursor = 'pointer'}
             onClick={()=>handleSubmit(data.headers , data.groupings)}/>
        </Tooltip>
        <CustomSnackbar open={snack.open} onClose={()=>setSnack({open:false})} 
        content={`Header should be less than 15 letters :(`} status="error"/>
        <CustomSnackbar open={resultSnack.open} onClose={()=>setResultSnack({open:false})} 
        content={resultSnack.content} status={resultSnack.status==='error'? 'error' : 'success'}/>
        </Box>
        </React.Fragment>
    )
}

Headers.propTypes = {
    isLoading : PropTypes.bool
}