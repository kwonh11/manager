import axios from 'axios';
import serverURL from './serverURL';

export default (token)=>{ 
    return axios.post(`${serverURL}/auth`,{
        token
    }).then(data => Promise.resolve(data.data))
}