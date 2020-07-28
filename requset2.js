import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8;'
axios.defaults.headers.post['token'] = 'asdn,asnd,mansmdbamsbdjasbdjasdhavsh'

var ajaxElVm = null;
var ajaxTimeout = null

//输入拦截
axios.interceptors.request.use( config => {
    if (ajaxElVm) {
        ajaxElVm.close();
        clearTimeout(ajaxTimeout)
    }
    return config;
});

//输出拦截
axios.interceptors.response.use((response) => {
    if (ajaxElVm) {
        ajaxTimeout = setTimeout(() => ajaxElVm.close(), 1000);
    }

    if (response.status != 200) {
        console.error(response);
    } else {
        var data = response.data;
        if (!data.type) {
            if (data.code != 0) {
            } else {
                return response.data.data;
            }
        } else {
            return response
        }

    }
    return Promise.reject(data.message)
}, function(error) {
    if (ajaxElVm) {
        ajaxTimeout = setTimeout(() => ajaxElVm.close(), 1000);
    }
    return Promise.reject(error)
});