import axios from 'axios'
// 设置基础路径
axios.defaults.baseURL = 'http://localhost:8082/';
// 为axios加一个拦截器
axios.interceptors.request.use(request => {
    // request.url get中的参数
    request.url = request.url + ".json";
    // console.log(request.url)
    return request;
})
axios.interceptors.response.use(response => {
    if (response.status == 200) {
        return response.data.data;
    }
})

export default axios;