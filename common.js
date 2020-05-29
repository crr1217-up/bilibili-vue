//用来设置axios默认配置

axios.defaults.baseURL = "https://developer.duyiedu.com/vue/bz";
axios.interceptors.response.use(response => {
    if (response.status==200) { 
        return response.data;
    }
    
})