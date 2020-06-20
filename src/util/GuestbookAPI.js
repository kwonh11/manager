import axios from 'axios';
import serverURL from './serverURL';

// guestbook list 받아오기 30개
export const getGuestbookList = () => {
    return (axios.get(`${serverURL}/guestbook`))
}
// 삭제의 경우 req.articleId, 수정의 경우 req.articleId, req.content

// 등록
export const postGuestbook = (content) => {
    return axios.post(`${serverURL}/guestbook` , {
        data : {
            content
        }
    }, {withCredentials:true})
}

// 수정
export const updateGuestbook = (articleId, content) => {
    return axios.put(`${serverURL}/guestbook`, {
        data : {
            articleId,
            content
        }
    },{withCredentials : true})
}

export const deleteGuestbook = (articleId) => {
    return axios.delete(`${serverURL}/guestbook` , {
        data : {
            articleId
        }
    },{ withCredentials:true})
}