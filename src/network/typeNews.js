import {request} from './request'

export function getTypeNews(type){
    return request({
        params: {
            type: type,
            key: '21648b4f42bd9aa6a4b8692c97597c00'
        }
    })
}