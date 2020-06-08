import axios from 'axios';
import serverURL from './serverURL';

export default (token)=>{ 
    return axios.post(`${serverURL}/auth`,{
        token
    },{
        withCredentials:true
    }).then(data => Promise.resolve(data.data))
}