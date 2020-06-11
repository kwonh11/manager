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
import CustomSnackbar from './SnackBar';

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
export default function Headers ({existingHeaders}) {
    const [ cookies , setCookie , removeCookie ] = useCookies (['profile','user']);
    const handleLogout = () => {    // 모든 쿠키 삭제와 profile제거
        removeCookie('profile');
        removeCookie('user');
        location.href = location.origin;
    }

    const classes = useStyle();
    // states
    const [fade, setFade] = React.useState(false);
    const [snack, setSnack] = React.useState({open:false});
    const [resultSnack , setResultSnack] = React.useState({open:false, content : ''});
    const [data , setData] = React.useState({
        headers : defaultHeader,
        groupings : Array(10).fill(false),
    })
    // effects
    React.useEffect(()=>{ 
        setFade(true);
    },[]);
    useOnFirstRender(()=>{
        getManagementTable().then(response => {
            console.log(`response : ${JSON.stringify(response)}`);
            if (response.status === 200 && response.data.headers) {
                const groupingLength = response.data.groupings.length;
                const groupings = [...response.data.groupings];
                for (let i = 0; i < 10 - groupingLength; i ++) {
                    groupings.push(false);
                }
                const headers = response.data.headers;
                const headersLength = Object.values(headers).length;
                for (let i = headersLength; i < 10; i++) {
                    headers[`header${i}`] = '';
                }
                setData({headers, groupings})
            } else {
                if (response.status === 204) {  // unauthorized
                    setTimeout(handleLogout(), 2000);
                    setResultSnack({open : true,status:'error', content : `Please log in again.`});
                } else {
                    setResultSnack({open : true,status:'error', content : `error (code : ${response.status})`});
                }
            }
        }).catch(err => {
            console.log(err);
            setTimeout(handleLogout(), 2000);
            setResultSnack({open:true,status:'error', content:'Please log in again.'});
        })}
    )
        
    // events
    const handleSubmit = (headers, groupings) => {
        if (!Object.values(headers).every(v => v.length <= 15)) { // 15글자 이상 제한 에러메세지
            setSnack({open:true}) 
            return 
        }
        if (Object.values(headers).filter(v=>v).length === 0) {     // 비어있을 경우 에러메세지
            setSnack({open:true})
            return
        }
        saveHeaders(headers,groupings).then(response => {
            setResultSnack({open : true, content : response.result});
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
        <Box className={classes.container}>
        <Fade in={fade} timeout={{enter : 1500}}>
            <Paper className={classes.paper} elevation={4}>
                <form className={classes.formRoot} onSubmit={handleSubmit} autoComplete='off'>
                    <Box component='div'>
                        <Typography variant='h4' color='textPrimary' style={{fontWeight:'bolder'}}> 
                            Header Edit Form 
                        </Typography>
                        <Box color={Object.values(data.headers).every(v => v.length <= 15) ? 'blue' : 'red'}>
                        <Typography variant='subtitle2' color='initial'>
                             not more than 15 characters and without spaces :) 
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
                <Tooltip title="You can set grouping settings.
When you set up grouping, you can manage tables by group.
Do not use when unique values e.g.) Name, address, etc."
                 placement='right' enterDelay={200} leaveDelay={200}>
                    <Checkbox 
                    checked={data.groupings[index]} 
                    onChange={(e)=>handleGroupings(e,index)}
                    >
                    </Checkbox>
               </Tooltip>
                    {index===0? 
                    <Box component='span' className={classes.description}>Enable Grouping!?</Box>
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
        content={`Not more than 15 characters and without spaces,
        Header must not be empty. :(`} status="error"/>
        <CustomSnackbar open={resultSnack.open} onClose={()=>setResultSnack({open:false})} 
        content={resultSnack.content} status={resultSnack.status==='error'? 'error' : 'success'}/>
        </Box>
    )
}