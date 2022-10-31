import {request} from './request'

export function getTopNews(){
    return request({
        params: {
            type: 'top',
            key: '21648b4f42bd9aa6a4b8692c97597c00'
        }
    })
}