const jwt = require('jsonwebtoken');
const ForbiddenError =  require('../exceptions/ForbiddenError')
// 白名单数组，列出不需要JWT验证的路径
const whitelist = [
    '/user/login',
    '/user/register'
];

// http鉴权
const verifyToken = (req, res, next) => {
    // 检查请求路径是否在白名单中，如果在，直接调用next()继续
    if (whitelist.includes(req.path) || req.path.includes( '/uploads')) {
        return next();
    }

    // 从请求头中获取token
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    // 如果token不存在，返回错误
    if (!token) {
        throw new ForbiddenError();
    }



    try {
        // 验证token
        req.user = jwt.verify(token,  process.env.secret_key);
    } catch (err) {
        throw new ForbiddenError();
    }
    return next();
};


// JWT 验证中间件函数 ws（socket）的校验
const stockVerifyToken = (socket, token, io , next) => {
    try {
        const user = jwt.verify(token, process.env.secret_key);
        next(user , io); // 继续执行下一个中间件或事件处理器
    } catch (err) {
        // JWT验证失败，断开连接
        // socket.disconnect();
        socket.emit('token-fail');
    }
};


module.exports = {
    verifyToken,
    stockVerifyToken
};
