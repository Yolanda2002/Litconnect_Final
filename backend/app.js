require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sendError } = require('./utils/responseHandler');
const { verifyToken , stockVerifyToken} = require('./utils/auth');
const userRoutes = require('./routes/users');
const booksRoutes = require('./routes/books');
const chatRoutes = require('./routes/chat');
const chatMessageRoutes = require('./routes/chatMessage');
const uploadRoutes = require('./routes/upload');
const aiChatRoutes = require('./routes/aiChat');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
const { controllerMessagePub , controllerMessageRoom } = require('./socket');
const app = express();
const port = process.env.PORT || 3000; // 注意环境变量大小写敏感性，通常是大写

app.use(bodyParser.json());
app.use(cors());

// 中间件
app.use(verifyToken); // 验证token
app.use('/user', userRoutes);
app.use('/book', booksRoutes);
app.use('/chat', chatRoutes);
app.use('/chatMessage', chatMessageRoutes);
app.use('/upload', uploadRoutes);
app.use('/aiChat', aiChatRoutes);
app.use(express.static(__dirname));
app.use((err, req, res, next) => {
    const statusCode = err.code || 500;
    sendError(res, err, statusCode);
});

// 创建 HTTP 服务器而
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // 根据您的CORS策略进行调整
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    const token = socket.handshake.query.token; // 从连接请求中获取JWT

    // 观察是谁失去了链接（断开链接）
    stockVerifyToken(socket, token, io,(user)=>{
        socket.on('disconnect', () => {
            console.log( JSON.stringify(user) + 'User disconnected');
        });
    });
    // // 公共聊天室入口
    socket.on('chat message', (msg) => {
        stockVerifyToken(socket, token, io , controllerMessagePub(msg));
    });

    // 聊天室入口
    socket.on('roomChatMessage', ( {message , roomId } ) => {
        stockVerifyToken(socket, token, io , controllerMessageRoom( message , roomId ));
    });

});

// 使用 HTTP 服务器监听端口
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
