import axios from 'axios'
import { Loading } from 'element-ui';
const service=axios.create({
    baseURL:'https://easy-mock.com/mock/5baa15726d85f81e16ad4847/api',
    timeout:5000
})
let loadingInstance;
service.interceptors.request.use(config=>{
    loadingInstance=Loading.service();
    return config
},(error)=>{
    alert('请求出错了')
})
service.interceptors.response.use(config=>{
    if(config.status==200&&config.data.code==0){
        loadingInstance.close();
        return config.data.data
    }
},error=>{
    alert('响应出错了')
})
export default service