const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');
const router = express.Router();
const { sendSuccess, sendError } = require('../utils/responseHandler');


// 注册用户
router.post('/register', async (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
             sendError(res,"Username and password are required.");
        }

        if (password.length <= 7) {
             sendError(res,"Password must be at least 8 characters long.");
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        const [existingUsers] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUsers.length > 0) {
             sendError(res,'Username already exists');
        }

        const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        sendSuccess(res, { userId: result.insertId });
    } catch (error) {
        next(error);
    }
});


// 更新用户头像
router.post('/updateAvatar', async (req, res, next) => {
    const { avatarUrl } = req.body;
    const token = req.headers['authorization'];

    if (!token) {
        return sendError(res, "A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        const userId = decoded.id;

        console.log(userId);

        if (!avatarUrl) {
            return sendError(res, "Avatar URL is required.");
        }

        const [user] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

        if (user.length === 0) {
            return sendError(res, "User not found.");
        }
        console.log(avatarUrl);
        await db.query('UPDATE users SET profile_picture = ? WHERE id = ?', [avatarUrl, userId]);

        sendSuccess(res, { message: "Avatar updated successfully." });
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return sendError(res, "Failed to authenticate token.");
        }
        next(error);
    }
});


// 用户登录
router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    try {
    console.log(username, password);

        if (!username || !password) {
             sendError(res,"Username and password are required.");
        }

        const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (users.length > 0) {
            const user = users[0];
            const passwordIsValid = await bcrypt.compare(password, user.password);

            if (!passwordIsValid)  sendError(res,'Username or password is incorrect.');

            const token = jwt.sign({ id: user.id , userName:user.username }, process.env.secret_key, {
                expiresIn: 86400 // 24小时
            });
            console.log('token', token)
            sendSuccess(res, { token , user});
        } else {
             sendError(res, 'No user found.');
        }
    } catch (error) {
        next(error)
    }
});

module.exports = router;
