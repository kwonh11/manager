import {useCookies} from 'react-cookie';
import MaterialTable from 'material-table';
import ManualDialog from "./ManualDialog";
import { options,localization } from "./TableOptions";
import useOnFirstRender from '../customHook/useOnFirstRender';
import { getManagementTable } from "../util/ManagementAPI";
import DefaultPage from './DefaultPage';
import parseData from '../util/parseData';
import SaveButton from './SaveButton';
import { saveData } from "../util/ManagementAPI";
import CustomSnackbar from '../customHook/SnackBar';
import { Box } from "@material-ui/core";
import { ProgressContext } from "../app";
import Loading from "../customHook/Loading";
// useEffect로 data, columns 가 변경될 때마다 서버에 저장 후 갱신
// ./util 경로에 로직 작성
// 통신에 대한 testcode작성
// columns와 data의 각 값들에 대한 무결성 체크
// propsType 작성
// SideMenuList => Login으로 변경, 비로그인 시 LOGIN으로 보일 것, 로그인시 MY MENU로 보기


export default function ManagementTable({isLoading}) {

  const handleProgress = React.useContext(ProgressContext);
  const [ cookies , setCookie , removeCookie ] = useCookies (['profile']);
  // states
  const [snack, setSnack] = React.useState({open : false});
  const [savedSnack , setSavedSnack] = React.useState({open:false});
  const [errorSnack , setErrorSnack] = React.useState({open:false});
  const [dialog, setDialog] = React.useState({open : false});
  const [state, setState] = React.useState({  // 최초 API로 받아오는 동작필요
    defaultPage : true,
    hasTable : false,
    columns: [],
    data: [],
  });
  const tableRef = React.useRef();

  // constructor
  useOnFirstRender(()=>{
      getManagementTable().then(response => {
        console.log(`status : ${response.status} , data : ${JSON.stringify(response.data)}`);
          // 유저 확인됐고 테이블도 비어있지 않을 경우
          if (response.status===200 && response.data.headers) {
            setTimeout(()=>{setSnack({open:true})},400);
            setState({
              columns : parseData(response.data.headers , response.data.groupings),
              data : response.data.data,
              defaultPage : false,
              hasTable : true});
          }
      }).catch(err => {
        console.log(err);
        setErrorSnack({open:true});
      });
  });

  // events
  const handleDialogClose = () => {setDialog({open : false});};
  const handleOnSave = (isAutoSave) => {
      // tableRef.current.dataManager 의 ref에서 신뢰도있는 데이터 참조
      const data = [];
      const groupings = [];
      const headers = tableRef.current.dataManager.columns.reduce((obj,v,i)=>{
        obj[`header${i}`] = v.title;
        groupings.push(v.grouping);
        return obj;
      },{})
      tableRef.current.dataManager.data.forEach((v,i)=>{
        const {tableData, ...rest} = v;
        data.push(rest);
      });
      saveData(headers, groupings, data).catch(err => {
        if(err) throw new Error(err);
      });
      if(!isAutoSave) setSavedSnack({open:true});
  }
  
  // effects
  React.useEffect(() => {   // window 더블클릭 이벤트 추가, 도움말 open
    const ondbClick = () => setDialog({open : !dialog.open});
    const onKeydown = (e) => {   // ctrl + s로 저장 event
      if (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        handleOnSave();
      }
    }
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('dblclick', ondbClick);
  return () => {
      window.removeEventListener('dblclick', ondbClick);
      window.removeEventListener('keydown', onKeydown);
      // 초기접근의 경우 데이터가 없어 에러 발생할 수 있어 삼항식으로 판단 후 언마운트시의 fetchAPI실행
      tableRef.current ? tableRef.current.dataManager ? handleOnSave(true) : null : null;
      tableRef.current ? tableRef.current.dataManager ? handleProgress('success') : null : null;
  };
}, []);

// components
  const Margin = () => (<Box style={{height:'100px'}}></Box>);  // 여백
  return (
    <React.Fragment>
    <Loading isLoading={isLoading}/>
    {
    state.defaultPage ?
      (<DefaultPage state={state} setState={setState}/>)
    : 
    (<Box>
        <ManualDialog open={dialog.open} onClose={handleDialogClose}/>
    <Margin/>
    <MaterialTable
      tableRef={tableRef}
      title={
      <SaveButton setSavedSnack={setSavedSnack} 
      // 마운트 이후에 접근필요
      dataManager={tableRef.current ? tableRef.current.dataManager : {}}/>
    }
      columns={state.columns}
      data={state.data}
      localization={localization} // 로컬라이즈
      options={options} // 내보내기, 그루핑
      actions={[// 멀티 셀렉션 작업
        {
            tooltip : 'Remove the Selected row(s)',
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
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
              resolve();
            }, 400);
          }),
        onRowUpdate: (newData, oldData) =>  // 수정
          new Promise((resolve) => {
            setTimeout(() => {
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
              resolve();
            }, 400);
          }),
      }}
    />
    <Margin/>
    <CustomSnackbar open={snack.open} onClose={()=>setSnack({open:false})} 
    content='need some help? ? double-click any space !' status="success"/>
    <CustomSnackbar open={savedSnack.open} onClose={()=>setSavedSnack({open:false})} 
    content='SAVED !' status="success"/>
    <CustomSnackbar open={errorSnack.open} onClose={()=>setErrorSnack({open:false})} 
    content='ERROR !' status="error"/>
    </Box>
    )}
    </React.Fragment>
  );
}