import Carousel from 'nuka-carousel';
import { Typography, Box } from '@material-ui/core';

export default function ImageCarousel (props) {
    const imageList = props.list ? props.list : [{}];
    const [slideIndex, setSlideIndex] = React.useState(imageList.length > 0 ? imageList.length-1 : 0);
    const {setCurrentSlide, autoPlay} = props;
    const handleAfterSlide = (slideIndex) => {
        setSlideIndex(slideIndex);
        setCurrentSlide(slideIndex);
    }
    return (
        <Carousel
        slideIndex={slideIndex}
        afterSlide={slideIndex => handleAfterSlide(slideIndex)}
        autoplay={autoPlay}
        autoplayInterval={2500}
        transitionMode='fade'
        wrapAround={true}
         >
             {
                 imageList.map((image,index)=>{
                     return (
                    <Box style={{width:'65vw', height:'80vh'}} key={index}>
                    <Box style={{width:'65vw', height:'10vh', backgroundColor:'black', color:'white',
                    display:'flex', justifyContent:'center', alignItems:'center'}}>
                     <Typography variant='h3' color='inherit' style={{fontWeight:'bolder'}}>
                         {image.name}
                    </Typography>
                    </Box>
                    <Box style={{width:'65vw',height:'70vh'}}>
                     <img src={image.src} object-fit='cover'/>
                    </Box>
                    </Box>
                     )
                 })
             }
        </Carousel>
        );
}