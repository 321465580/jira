/* 
    给json-sever配置中间件，为了实现login功能
    json-sevrer是满足一个规范，这个中间件是为了打破这个规范

    如何把中间件注入到json-sever中？
    在package.json中，启动json-server 的地方，写--middlewares ./__json_server_mock__/middleware.js
*/
module.exports = (req, res, next) => {
    console.log('11');
    if(req.method === "POST" && req.path === "/login") {
        if(req.body.username === 'jack' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '123'
                }
            })
        } else {
            return res.status(400).json({
                message: '用户名或密码错误'
            })
        }
    }
    next()
}
