import { Button, Tooltip} from '@material-ui/core'
import { saveData } from "../util/ManagementAPI";
import PropTypes from 'prop-types';

export default function SaveButton ({setSavedSnack , dataManager, profile, setErrorSnack}) {
    function onClick () {
          if (!profile) {
            setErrorSnack({open:true , content:'로그인 먼저 진행해주세요 :)'});
            console.log('not logged')
            return
          }
          // SAVE EVENT util > ManagementAPI.saveData 만들어서 콜하기
          const data = [];
          const groupings = [];
          const headers = dataManager.columns.reduce((obj,v,i)=>{
            obj[`header${i}`] = v.title;
            groupings.push(v.grouping);
            return obj;
          },{});
          dataManager.data.forEach((v,i)=>{
            const {tableData, ...rest} = v;
            data.push(rest);
          })
          console.log(` result : 
          ${JSON.stringify(data)}
          ${groupings}
          ${JSON.stringify(headers)}
        `)
        saveData(headers,groupings,data).then(result=>{
          if (result.result === 'success') {
            setSavedSnack({open:true});
          } else {
            setErrorSnack({open:true});
          }
        }).catch(error => {
          setErrorSnack({open:true});
        })
    }
    return (
    <Tooltip title='Click to SAVE ( Ctrl + S )'>
        <Button style={{fontWeight:'bolder'}} variant='contained' color='secondary' 
        onClick={()=>onClick()}>
          SAVE
        </Button>
      </Tooltip>
    )
}

SaveButton.propTypes = {
  setSavedSnack : PropTypes.func.isRequired,
  dataManager : PropTypes.object
}