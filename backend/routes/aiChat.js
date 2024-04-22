const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const db = require('../database');
const router = express.Router();
const { sendSuccess, sendError } = require('../utils/responseHandler');


router.post('/addChat', async (req, res, next) => {
    const { content, is_me } = req.body;
    const userId = req.user.id;  // 假设req.user.id能获取当前登录用户的ID

    try {
        const query = 'INSERT INTO aiChat (user_id, content, is_me) VALUES (?, ?, ?)';
        await db.query(query, [userId, content, is_me]);
        sendSuccess(res, { message: 'Chat added successfully' });
    } catch (error) {
        next(error);
    }
});
router.get('/getChats', async (req, res, next) => {
    const userId = req.user.id;  // 假设req.user.id是当前登录用户的ID

    try {
        const query = 'SELECT * FROM aiChat WHERE user_id = ?';
        const results = await db.query(query, [userId]);
        sendSuccess(res, results[0]);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
