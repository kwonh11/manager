import {Box, CircularProgress, Button} from '@material-ui/core';


export default function Loading ({isLoading}) {
    return (
        <React.Fragment>
        {
        isLoading && 
            (<Box style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center',
            alignItems:'center', flexDirection:'column'}}>
            <Button variant='text'
            color='primary'
            size='large'
            disabled
            style={{fontWeight:'bolder'}}
            >
            {`Saving changes`}
            </Button>
                <CircularProgress/>
            </Box>)
        }
        </React.Fragment>
        )
}