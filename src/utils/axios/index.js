import axios from 'axios'

import store from '../../store/index'

//默认地址
axios.defaults.baseURL = "http://localhost:2020"

//过期时间
axios.defaults.timeout = 20000

//设置请求头

//向后端发送时的配置
axios.interceptors.request.use(
    config=>{
        config.headers['Token'] = store.state.token
        return config
    },
    error =>{
        return error
    }
)

//接受后端返回数据
axios.interceptors.response.use(

    data =>{
        return data
    },
    error =>{
        return error
    }
)

export default axios