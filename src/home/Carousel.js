import Carousel from 'nuka-carousel';
import { Typography, Box } from '@material-ui/core';

export default function ImageCarousel (props) {
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
         >
             {
                 imageList.map((image,index)=>{
                     return (
                    <Box style={{width:'100%', height:'100%'}} key={index}>
                    <Box style={{width:'100%', backgroundColor:'inherit', color:'#fff', textShadow:'5px 1.5px 1.5px gray',
                    display:'flex', justifyContent:'center', alignItems:'center'}}>
                     <Typography variant='h3' color='inherit' style={{fontWeight:'bolder'}}>
                         {`#${index+1} ${image.name}`}
                    </Typography>
                    </Box>
                    <Box style={{width:'100%'}}>
                     <img src={image.src} object-fit='cover'/>
                    </Box>
                    </Box>
                     )
                 })
             }
        </Carousel>
        );
}