const fs =  require('fs') //文件读写库
const request = require("request");//request请求库
let cont = `import axios from 'axios';
import './axios.js';
`
request({
    url: "http://wbs.test.szvoc.net:9090/v2/api-docs",//你要请求的地址
    method: "get",//请求方法 post get
    json: true,
    headers: {
        "content-type": "application/json",
        "Cookie":""//如果携带了cookie
    },
    body: {"page":1,"pageSize":3,"sortAsc":false,"sortKey":"lastVisitTime","prodLineId":2},
    //这里是post 传的参数 如果是get 方法在url上拼接就好了
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        for (let keys in body.paths)  {
            cont += `
                export function _${keys.replace('/', '')} (data) {
                   return axios.${Object.keys(body.paths[keys])[0]}('${keys}'${(Object.keys(body.paths[keys])[0] == 'get' ? '+ data' : ',')}${(Object.keys(body.paths[keys])[0] == 'post' ? 'data' : '')})
                }
            `
        }

        fs.writeFileSync('./server2.js', cont)

    }
});
