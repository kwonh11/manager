import axios from "axios";
import serverURL from './serverURL';

// 테이블 데이터 받아오기 cookie에 담긴 token사용
export const getManagementTable =  () => {
    return (axios.get(`${serverURL}/management`,{
        withCredentials:true
    }));
}

export const saveHeaders = (headers, groupings) => {
    console.log(`saving headers : 
    headers : ${JSON.stringify(headers)}
    groupings : ${JSON.stringify(groupings)}`);
    return (axios.put(`${serverURL}/headers`, {
        // data
        headers,
        groupings
    },{withCredentials:true}).then(res => Promise.resolve(res.data)));    // 쿠키와 함께
}

export const saveData = (headers, groupings, data) => {
    return (axios.put(`${serverURL}/data`, {
        headers,
        groupings,
        data
    },{withCredentials:true}).then(res => {
        return Promise.resolve(res.data)
    }));
}