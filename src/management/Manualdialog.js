
import {Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    Box,
    makeStyles} from '@material-ui/core';
const useStyle = makeStyles(theme => {
    icon : {
        width : '3vw'
    }
})
export default function ManualDialog (props) {
    const classes = useStyle();
    const {open, onClose} = props;
    const icons = [
        {icon : 'add_box' , description : '[Add] rows.'},
        {icon : 'create' , description : '[Edit] records.'},
        {icon : 'search' , description : 'Type down words to [search].'},
        {icon : 'save_alt' , description : '[Download] files in CVS format.'},
        {icon : 'view_week' , description : '[Select] columns to be displayed'},
        {icon : 'playlist_add_check' , description : 'Follow the steps below to [delete] rows.'},
        {icon : 'check_box' , description : ' ① Select the checkbox on the row.'},
        {icon : 'fact_check' , description : ' ② Check the number of the rows selected.'},
        {icon : 'delete' , description : ' ③ Click the Bin icon on the right above.'},
        {icon : 'playlist_add_check' , description : 'Follow the steps below to [Edit] headers.'},
        {icon : 'menu' , description : ' ① Open the MYPAGE'},
        {icon : 'create' , description : ' ② Click the Pencil icon'},
    ]

    return (
    <Dialog onClose={onClose} open={open}>
        <DialogTitle> BASIC MANUAL </DialogTitle>
        <List>
            {
                icons.map((icon, index) => {
                    return (
                    <ListItem key={`${icon} + ${index}`}>
                            <Box component='span' className={`material-icons ${classes.icon}`} style={{width:'3vw'}}>
                                {icon.icon}
                            </Box>
                        <ListItemText primary={icon.description} />
                    </ListItem>
                    )
                })
            }
        </List>
    </Dialog>
    )
}