import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default ({open, onClose, content, status}) => {
    return (
        <Snackbar
        open={open}
        onClose={onClose}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        >
            <Alert onClose={onClose} severity={status}
             variant='filled' message={{fontWeight:'bolder', fontSize:'5rem'}}>
                {content}
            </Alert>
        </Snackbar>
    )
}