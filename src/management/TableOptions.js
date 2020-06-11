import { Button, Box } from "@material-ui/core";
import {AddBox} from '@material-ui/icons';
// DATA TABLE OPTIONS

 export const options= {
    exportButton: true,
    grouping:true,
    selection:true,
    headerStyle:{ 
        fontWeight:'bolder',
    },
    actionsColumnIndex:-1,  // 액션 아이콘위치
    columnsButton : true, 
    debounceInterval : 160, // 로딩시간
    pageSize : 15,          // 페이지사이즈
    pageSizeOptions : [5, 15, 30, 50, 100], // 페이즈 사이즈 종류
  }
 export const localization = {
    pagination : { labelDisplayedRows : '{count} rows | {from}-{to}' , },
    toolbar: {nRowsSelected: '{0} row(s) selected'},
    header: {actions: 'Edit'},
    body: {emptyDataSourceMessage: 
        (
        <Box style={{display:'flex', flexDirection:'column'}}>
        <Button variant='text'
        color='primary'
        size='large'
        disabled
        style={{fontWeight:'bolder'}}
        endIcon={<AddBox/>}>
          {`No Record to display
          Click the Button `}
        </Button>
        <Button variant='text'
        color='primary'
        size='large'
        disabled
        style={{fontWeight:'bolder'}}
        >
          {`on the right-top`}
        </Button>
        </Box>
        )
      }
  }
