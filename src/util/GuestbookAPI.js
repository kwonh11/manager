import axios from 'axios';
import serverURL from './serverURL';

// guestbook list 받아오기 30개
export const getGuestbookList = () => {
    return (axios.get(`${serverURL}/guestbook`,{withCredentials:true}))
}

// 등록
export const postGuestbook = (content) => {
    return axios.post(`${serverURL}/guestbook` , {
        data : {
            content
        }
    }, {withCredentials:true})
}

// 수정
// export const updateGuestbook = (articleId, content) => {
//     return axios.put(`${serverURL}/guestbook`, {
//         data : {
//             articleId,
//             content
//         }
//     },{withCredentials : true})
// }

export const deleteGuestbook = (article_id) => {
    return axios.delete(`${serverURL}/guestbook` , {
        data : {
            article_id
        }
    },{ withCredentials:true})
}