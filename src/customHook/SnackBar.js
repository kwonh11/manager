import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import PropTypes from 'prop-types';

export default function CustomSnackbar ({open, onClose, content, status, direction}) {
    return (
        <Snackbar
        open={open}
        onClose={onClose}
        anchorOrigin={direction? direction : { vertical:'top', horizontal:'center' }}
        >
            <Alert onClose={onClose} severity={status}
             variant='filled' message={{fontWeight:'bolder', fontSize:'5rem'}}>
                {content}
            </Alert>
        </Snackbar>
    )
}

CustomSnackbar.propTypes = {
    open : PropTypes.bool.isRequired,
    onClose : PropTypes.func,
    content : PropTypes.string,
    status : PropTypes.oneOf(['error','success']),
    direction : PropTypes.object,
}