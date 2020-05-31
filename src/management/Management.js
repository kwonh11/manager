import MaterialTable from 'material-table';
import {Box} from '@material-ui/core'
import {Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ManualDialog from "./ManualDialog";

// useEffect로 data, columns 가 변경될 때마다 서버에 저장 후 갱신
// ./util 경로에 로직 작성
// 통신에 대한 testcode작성
// columns와 data의 각 값들에 대한 무결성 체크
// propsType 작성
// SideMenuList => Login으로 변경, 비로그인 시 LOGIN으로 보일 것, 로그인시 MY MENU로 보기


export default function ManagementTable() {
  const [snack, setSnack] = React.useState({
      open : false
  })
  const [dialog, setDialog] = React.useState({
      open : false,
  })
  React.useEffect(()=>{ // 최초렌더링시 도움말 Snack 출력
    setTimeout(()=>{setSnack({open:true})},500);
  },[]);
  React.useEffect(() => {   // window 더블클릭 이벤트 추가, 도움말 open
    const ondbClick = () => setDialog({open : !dialog.open});
    window.addEventListener('dblclick', ondbClick);
  return () => {
      window.removeEventListener('dblclick', ondbClick);
  };
}, []);

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' , grouping:false},
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear' },
      { title: 'Phone' , field:'phone', grouping:false},
      {
        title: 'Gender',
        field: 'gender',
        lookup: { 1: 'Male', 2: 'Female' }
      },
      { title: 'Memo' , field:'memo'}
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1983, phone:'01046509995' ,gender: 1 , memo:''},
      { name: 'Adam', surname: 'Adam', birthYear: 1984, phone:'01046509795' ,gender: 2 , memo:''},
      { name: 'Mehmet', surname: 'Atom', birthYear: 1985, phone:'01046509695' ,gender: 1 , memo:''},
      { name: 'mul', surname: 'Kongna', birthYear: 1986, phone:'01046509195' ,gender: 1 , memo:''},
      { name: 'Jack', surname: 'Jack', birthYear: 1987, phone:'01046509295' ,gender: 2 , memo:''},
      { name: 'Bob', surname: 'Bob', birthYear: 1988, phone:'01046509395' ,gender: 2 , memo:''},
      { name: 'Mehmet', surname: 'Bill', birthYear: 1989, phone:'01046509495' ,gender: 1 , memo:''},
      { name: 'Johnson', surname: 'Johnson', birthYear: 1990, phone:'01046509895' ,gender: 2 , memo:''},
    ],
  });

  const Margin = () => (<Box style={{height:'100px'}}></Box>);

  const options= {
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
  const localization = {
    pagination : { labelDisplayedRows : '{count} rows | {from}-{to}' , },
    toolbar: {nRowsSelected: '{0} row(s) selected'},
    header: {actions: 'Edit'},
    body: {emptyDataSourceMessage: 'No record to display.. Click the [+] button on the right-top',}
  }

  const handleClose = (event, reason) => {
    setSnack({open: false });
  };
  const handleDialogClose = () => {
    setDialog({open : false});
  }

  return (
    <Box>
        <ManualDialog open={dialog.open} onClose={handleDialogClose}/>
    <Margin/>
    <MaterialTable
      title="Management App"
      columns={state.columns}
      data={state.data}
      localization={localization} // 로컬라이즈
      options={options} // 내보내기, 그루핑
      actions={[// 멀티 셀렉션 작업
        {
            tooltip : 'Remove All Selected Users',
            icon : 'delete',
            onClick : (e , deletions) => {  // 선택한 체크박스에 대해 모두 삭제 진행
                const data = [...state.data];
                deletions.forEach(v=>{
                    data.splice(data.indexOf(v), 1);
                })
                setState((prevData)=>{
                    return {...prevData , data};
                })
            }
        }
    ]} 
      editable={{
        onRowAdd: (newData) =>  // 추가
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>  // 수정
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
      }}
    />
    <Margin/>
    <Snackbar
    open={snack.open}
    onClose={handleClose}
    anchorOrigin={{ vertical:'top', horizontal:'center' }}
    >
        <Alert onClose={handleClose} severity="success" variant='filled' message={{fontWeight:'bolder', fontSize:'5rem'}}>
            need some help? ? double-click any space !
        </Alert>
    </Snackbar>
    </Box>
  );
}