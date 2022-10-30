import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://v.juhe.cn/toutiao/index?key=21648b4f42bd9aa6a4b8692c97597c00',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    },err => {

    })
    instance.interceptors.response.use(res => {
        return res.data
    },err =>{
        console.log(err);
    })
    return instance(config)
}