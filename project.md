## 安装JSON-SERVER
`yarn add json-server -g`

## 启动JSON-SERVER
`json-server --watch db.json`

>   请求地址
创建.env和.env.development,分别写上请求的地址
比如`REACT_APP_API_URL=http://localhost:3001`
然后在具体的jsx文件中，通过`const apiUrl = process.env.REACT_APP_API_URL`拿到请求的地址