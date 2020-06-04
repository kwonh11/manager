
// DATA TABLE OPTIONS

 export const options= {
    exportButton: true,
    grouping:true,
    selection:true,
    headerStyle:{ 
        fontWeight:'bolder',
    },
    actionsColumnIndex:-1,  // 액션 아이콘위치
    columnsButton : true,   // 
    debounceInterval : 160, // 로딩시간
    pageSize : 20,          // 페이지사이즈
    pageSizeOptions : [5, 10, 20, 50, 100], // 페이즈 사이즈 종류
  }
 export const localization = {
    pagination : { labelDisplayedRows : '{count} rows | {from}-{to}' , },
    toolbar: {nRowsSelected: '{0} row(s) selected'},
    header: {actions: 'Edit'},
    body: {emptyDataSourceMessage: 'No record to display.. Click the [+] button on the right-top',}
  }
