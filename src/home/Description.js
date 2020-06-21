import { makeStyles } from '@material-ui/core/styles';
import { Grow, Box, Typography , Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root : {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems : 'flex-start',
        width : '100%',
        height : '35vh',
        backgroundColor : 'inherit'
    },
    innerBox1 : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width : '30vw',
        color:'#eaeaea',
        marginTop : '-5vh',
        textShadow: '1px 4px 4px #9e9999'
    },
    innerBox2 : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width : '30vw',
        color:'#eaeaea',
        marginTop : '-5vh',
        textShadow: '1px 4px 4px #9e9999'
    },
    descriptionBox : {
        display:'flex',
        color: '#fff',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        maxWidth : '50vw',
        marginTop:'3vh'
      },
}));
export default function Description () {
    const classes = useStyles();
    const [grow, setGrow] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setGrow(entry.isIntersecting);
        } 
      )},{   // options
          rootMargin : '150px 0px'
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
    <React.Fragment>
        <Grow in={grow}
                style={{ transformOrigin: '50% 100%' }}
                {...(grow ? { timeout: {appear : 1500 , enter : 1500 , exit : 1000} } : {})}
            >
        <Box className={classes.root} ref={domRef}>
            <Box className={classes.innerBox1}>
                <Typography variant='h4' style={{fontWeight:'bolder'}} gutterBottom>
                    GUESTBOOK
                </Typography>
                <Box className={classes.descriptionBox}>
                    <Typography variant='h6' gutterBottom>한줄 방명록을 작성해보세요</Typography>
                    <Typography variant='body2'>개발자 또는 유저들에게</Typography>
                    <Typography variant='body2'>피드백이나 인사를 건네보세요.</Typography>
                    <Typography variant='body2'>불편사항이나 개선점등을 알려주시면 </Typography>
                    <Typography variant='body2'>서비스를 개선하는데 도움이 됩니다.</Typography>
                    <Typography variant='body2'> </Typography>
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem style={{width:'1px',height:'60%', backgroundColor:'#9e9999'}}/>
            <Box className={classes.innerBox2}>
            <Typography variant='h4' style={{fontWeight:'bolder'}} gutterBottom>
                    MANAGEMENT
            </Typography>
            <Box className={classes.descriptionBox}>
                    <Typography variant='h6' gutterBottom>쉽게 데이터관리를 해보세요</Typography>
                    <Typography variant='body2'>입력,수정,삭제,내보내기,그룹화 등의 기능</Typography>
                    <Typography variant='body2'>구글계정으로 PC만 있다면 어디서든 </Typography>
                    <Typography variant='body2'>동일한 데이터를 관리할 수 있습니다. </Typography>
                    <Typography variant='body2'>다양하게 활용해보세요 :)</Typography>
                </Box>
            </Box>
        </Box>      
        </Grow>
    </React.Fragment>
    )
}