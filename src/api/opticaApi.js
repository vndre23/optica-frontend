import axios from 'axios';



const opticaApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

//configurar interceptores
opticaApi.interceptors.request.use(config=> {
    config.headers = {
        ...config.headers,
         'x-token': localStorage.getItem('token')
    }
    return config;
})    

export default opticaApi;