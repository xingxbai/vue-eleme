import axios from './config'
const api={
    getSeller(){return axios.get('/seller').then(res=>res)},
    getGoods(){return axios.get('/goods').then(res=>res)},
    getRatings(){return axios.get('/ratings').then(res=>res)}
}

export default api