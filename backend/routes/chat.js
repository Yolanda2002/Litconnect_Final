const express = require('express');
const db = require('../database');
const router = express.Router();
const { sendSuccess } = require('../utils/responseHandler');
const InvalidEntryError = require('../exceptions/InvalidEntryError');

// 创建房间
router.post('/createRoom', async (req, res, next) => {
    try {
        const { title, content } = req.body;
        let userId = req.user.id;
        // 参数验证
        if (!title || !userId) {
            throw new InvalidEntryError('Room title and user ID are required.');
        }
        // 数据库操作
        const query = 'INSERT INTO Rooms (title, content, user_id) VALUES (?, ?, ?)';
        await db.query(query, [title, content, userId]);
        sendSuccess(res, { message: 'Room created successfully' });
    } catch (error) {
        console.log(error)
        next(error);
    }
});
// 查询公共聊天信息及对应的用户信息
router.get('/getPublicChats', async (req, res, next) => {
    try {
        const query = `
            SELECT PublicChatMessages.*, Users.username , Users.profile_picture 
            FROM PublicChatMessages 
            JOIN Users ON PublicChatMessages.user_id = Users.id 
            ORDER BY PublicChatMessages.timestamp ASC
        `;
        const messages = await db.query(query);
        sendSuccess(res, { messages:messages[0] });
    } catch (error) {
        next(error);
    }
});

// 查询特定房间的聊天信息及对应的用户信息
router.get('/getRoomChats/:roomId', async (req, res, next) => {
    try {
        const { roomId } = req.params;
        if (!roomId) {
            throw new InvalidEntryError('Room ID is required.');
        }
        const query = `
            SELECT RoomChatMessages.*, Users.username , Users.profile_picture 
            FROM RoomChatMessages 
            JOIN Users ON RoomChatMessages.user_id = Users.id 
            WHERE RoomChatMessages.room_id = ? 
            ORDER BY RoomChatMessages.timestamp ASC
        `;
        const messages = await db.query(query, [roomId]);
        console.log(messages)
        sendSuccess(res, { messages:messages[0] });
    } catch (error) {
        next(error);
    }
});

// 查询所有房间
router.get('/getAllRooms', async (req, res, next) => {
    try {
        const query = 'SELECT * FROM Rooms';
        const rooms = await db.query(query);
        sendSuccess(res, { rooms:rooms[0] });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
