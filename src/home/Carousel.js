import Carousel from 'nuka-carousel';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    textContainer : {
        width : '100%',
        backgroundColor : 'inherit',
        color : '#fff',
        textShadow:'2px 1.5px 1.5px gray',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection : 'column'
    },
}));
export default function ImageCarousel (props) {
    const classes = useStyles();
    const imageList = props.list ? props.list : [{}];
    const {setStepper, currentSlide, setCurrentSlide} = props;
    const handleAfterSlide = (slideIndex) => {
        setStepper(slideIndex);
        setCurrentSlide(slideIndex);
    }
    return (
    <Carousel
    slideIndex={currentSlide}
    afterSlide= {index => handleAfterSlide(index)}
    autoplay={false}
    autoplayInterval={3000}
    transitionMode='scroll'
    speed={800}
    heightMode='max'
        >
    {
        imageList.map((image,index)=>{
                    return (
            <Box style={{width:'100%', height:'100%'}} key={index}>
                {
                    index > 0 ? (
                <Box className={classes.textContainer}>
                    <Typography variant='h3' color='inherit' style={{fontWeight:'bolder'}}>
                        {`#${index} ${image.name}`}
                    </Typography>
                </Box>
                    ) : null
                }
                <Box style={{height:'100%'}}>

                    { index===0? 
                    (<Box className={classes.textContainer} style={{height:'100%', alignItems:'center'}}>
                        <Typography variant='h3' color='inherit' style={{fontWeight:'bolder'}}>
                            QUICK START GUIDE
                            <img src=''/>
                        </Typography>
                        <Typography variant='h6' color='inherit' style={{fontWeight:'bold'}}>
                            Make your work easier
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{fontWeight:'bold'}}>
                            Turn the slide over and check.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{fontWeight:'bold'}}>
                            It consists of a few slides.
                        </Typography>
                     </Box>)
                    : <img src={image.src}/>
                }
                </Box>
            </Box>
            )
            })
        }
    </Carousel>
        );
}

ImageCarousel.propTypes = {
    setStepper : PropTypes.func.isRequired,
    currentSlide : PropTypes.number.isRequired,
    setCurrentSlide : PropTypes.func.isRequired
}