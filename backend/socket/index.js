const db = require('../database');
// 处理信息（公共聊天室）
const  controllerMessagePub = ( message )=>{
    return async (user , io) => {
        console.log(user)
        let { id , userName} = user;
        try {
            // 确保提供了消息和用户ID
            if (!message || !id) {
                throw new Error('Message and user ID are required.');
            }
            const query = 'INSERT INTO PublicChatMessages (user_id, message_content, timestamp) VALUES (?, ?, NOW())';
            const queryUser = 'SELECT * FROM users WHERE id = ?';

            // 执行数据库查询，插入消息
            await db.query(query, [id, message]);
           let userInfo = await db.query(queryUser, [id]);
            // console.log(userInfo[0][0])
            // 可以在这里使用io对象来广播消息到所有连接的客户端
            io.emit('newMessage', { id,message_content:message ,username:userName,profile_picture:userInfo[0][0].profile_picture});
        } catch (error) {
            console.log(error)
            console.log('add public message error ！')
            // console.error('Failed to insert message into PublicChatMessages', error);
        }
    };
}
// 房间聊天的处理
const controllerMessageRoom = (message, roomId) => {
    return async (user, io) => {
        let { id, userName } = user;
        console.log(id, userName)
        try {
            // 确保提供了消息、用户ID和房间ID
            if (!message || !id || !roomId) {
                throw new Error('Message, user ID, and room ID are required.');
            }
            // 插入消息到RoomChatMessages表
            const query = 'INSERT INTO RoomChatMessages (room_id, user_id, message_content, timestamp) VALUES (?, ?, ?, NOW())';
            const queryUser = 'SELECT * FROM users WHERE id = ?';
            await db.query(query, [roomId, id, message]);
            let userInfo = await db.query(queryUser, [id]);

            // 使用io对象广播消息到特定房间
            io.emit('newRoomMessage', { roomId, userId: id, message_content: message, username: userName,profile_picture:userInfo[0][0].profile_picture });
        } catch (error) {
            console.log('Add room message error ！');
        }
    };
};


module.exports = {
    controllerMessagePub,
    controllerMessageRoom
}
