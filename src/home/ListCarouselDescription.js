import { makeStyles } from '@material-ui/core/styles';
import {Typography , Stepper, Step, Box, StepLabel} from '@material-ui/core';
import slideSource from './ImageSlideSources';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexDirection:'row',
      fontWeight : 'bolder'
    },
    inline: {
      display: 'inline',
    },
  }));

export default function DescriptionList ({stepper}) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Stepper activeStep={stepper} orientation="horizontal" style={{backgroundColor:'inherit'}}>
                {
                    slideSource.map((item,index)=>{
                        return (
                    <Step completed={index < stepper} key={index}>
                        <StepLabel>
                            <Typography variant='caption' style={{fontWeight:'bolder'}}>{item.name}</Typography>
                        </StepLabel>
                    </Step>
                    
                    )})
                }
            </Stepper>
        </Box>
    );
}