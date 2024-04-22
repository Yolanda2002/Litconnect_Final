const express = require('express');
const db = require('../database');
const router = express.Router();
const { sendSuccess } = require('../utils/responseHandler');
const HandledError = require('../exceptions/HandledError');
const InvalidEntryError = require('../exceptions/InvalidEntryError');
const DatabaseError = require('../exceptions/DatabaseError');

// 当前用户发布书评的接口
router.get('/myBookReviews', async (req, res, next) => {
    const limit = 20;
    let page = 1;
    if (req.query.page && !isNaN(req.query.page) && req.query.page > 0) {
        page = parseInt(req.query.page);
    }

    const offset = (page - 1) * limit;
    const userId = req.user.id; // 假设req.user.id是当前登录用户的ID

    try {
        const countQuery = 'SELECT COUNT(*) AS total FROM book_reviews WHERE user_id = ?';
        const totalCountResult = await db.query(countQuery, [userId]);
        const total = totalCountResult[0][0].total;

        const dataQuery = 'SELECT * FROM book_reviews WHERE user_id = ? LIMIT ? OFFSET ?';
        const results = await db.query(dataQuery, [userId, limit, offset]);

        const totalPages = Math.ceil(total / limit);
        const hasMore = page < totalPages;

        sendSuccess(res, {
            data: results[0],
            total,
            page,
            limit,
            totalPages,
            hasMore
        });
    } catch (error) {
        next(error);
    }
});
// 查询书评的详细信息
router.get('/bookReview/:id', async (req, res, next) => {
    const { id } = req.params; // 获取书评ID
    const userId = req.user.id; // 假设req.user.id能够获取当前登录用户的ID

    try {
        // 查询书评详细信息，并检查当前用户是否点赞和收藏，同时获取点赞数、收藏数和评论数
        const query = `
            SELECT 
                book_reviews.*, 
                users.username, 
                users.profile_picture,
                EXISTS(SELECT 1 FROM book_review_likes WHERE book_review_likes.review_id = book_reviews.id AND book_review_likes.user_id = ?) AS liked,
                EXISTS(SELECT 1 FROM book_review_favorites WHERE book_review_favorites.review_id = book_reviews.id AND book_review_favorites.user_id = ?) AS favorited,
                (SELECT COUNT(*) FROM book_review_likes WHERE book_review_likes.review_id = book_reviews.id) AS like_count,
                (SELECT COUNT(*) FROM book_review_favorites WHERE book_review_favorites.review_id = book_reviews.id) AS favorite_count,
                (SELECT COUNT(*) FROM book_review_comments WHERE book_review_comments.review_id = book_reviews.id) AS comment_count
            FROM book_reviews
            JOIN users ON book_reviews.user_id = users.id
            WHERE book_reviews.id = ?`;

        const result = await db.query(query, [userId, userId, id]);

        if (result[0].length === 0) {
            return res.status(404).json({ message: 'Review not found' });
        }

        const reviewDetails = result[0][0];
        // 转换liked和favorited字段为布尔值
        reviewDetails.liked = !!reviewDetails.liked;
        reviewDetails.favorited = !!reviewDetails.favorited;

        sendSuccess(res, reviewDetails); // 发送找到的书评及点赞和收藏状态，包括点赞数、收藏数和评论数
    } catch (error) {
        next(error);
    }
});

// 创建书评.
router.post('/create', async (req, res,next) => {
    try {
        const { bookName, chapter, content, review ,cover_image} = req.body;
        console.log(cover_image);
        // 参数验证
        if (!bookName || !review) {
            throw new InvalidEntryError('Book name and review are required.');
        }
        // 数据库操作
        const query = 'INSERT INTO book_reviews (user_id, book_name, chapter, content, review,cover_image) VALUES (?, ?, ?, ?, ?,?)';
        await db.query(query, [req.user.id, bookName, chapter, content, review ,cover_image]);
        sendSuccess(res, { message: 'Review created successfully' });
    } catch (error) {
        next(error)
    }
});

router.get('/getAllBookReviews', async (req, res, next) => {
    let searchCondition = ''; // 初始化搜索条件为空
    const queryParams = []; // 存放查询参数

    // 统一搜索条件
    const searchKeyword = req.query.search;
    if (searchKeyword) {
        searchCondition += ` AND (users.username LIKE ? OR book_reviews.book_name LIKE ? OR book_reviews.content LIKE ?)`;
        const searchParam = `%${searchKeyword}%`;
        queryParams.push(searchParam, searchParam, searchParam);
    }

    // 根据章节进行搜索
    const chapter = req.query.chapter;
    if (chapter) {
        searchCondition += ` AND book_reviews.chapter = ?`;
        queryParams.push(chapter); // 假设 chapter 是精确匹配
    }

    try {
        // 获取与搜索条件匹配的所有书评数据
        const dataQuery = `SELECT book_reviews.*, users.username, users.profile_picture FROM book_reviews
                            JOIN users ON book_reviews.user_id = users.id
                            WHERE 1=1 ${searchCondition}`;
        const results = await db.query(dataQuery, queryParams);

        // 构造响应数据
        const responseData = {
            data: results[0], // 返回的数据
            total: results[0].length // 数据总数
        };

        // 发送响应
        sendSuccess(res, responseData);
    } catch (error) {
        next(error);
    }
});



// 点赞或取消点赞书评
router.post('/review/like', async (req, res, next) => {
    const { reviewId, like } = req.body; // like为true表示点赞，为false表示取消点赞
    const userId = req.user.id;

    try {
        if (like) {
            // 点赞操作
            const checkLikeQuery = 'SELECT 1 FROM book_review_likes WHERE review_id = ? AND user_id = ?';
            const likeExists = await db.query(checkLikeQuery, [reviewId, userId]);
            if (likeExists[0].length === 0) {
                const insertLikeQuery = 'INSERT INTO book_review_likes (review_id, user_id) VALUES (?, ?)';
                await db.query(insertLikeQuery, [reviewId, userId]);
                sendSuccess(res, { message: 'Review liked successfully.' });
            } else {
                throw new HandledError('Review already liked.');
            }
        } else {
            // 取消点赞操作
            const deleteLikeQuery = 'DELETE FROM book_review_likes WHERE review_id = ? AND user_id = ?';
            await db.query(deleteLikeQuery, [reviewId, userId]);
            sendSuccess(res, { message: 'Like removed successfully.' });
        }
    } catch (error) {
        next(error);
    }
});
// 收藏或取消收藏书评
router.post('/review/favorite', async (req, res, next) => {
    const { reviewId, favorite } = req.body; // favorite为true表示收藏，为false表示取消收藏
    const userId = req.user.id;

    try {
        if (favorite) {
            // 收藏操作
            const checkFavoriteQuery = 'SELECT 1 FROM book_review_favorites WHERE review_id = ? AND user_id = ?';
            const favoriteExists = await db.query(checkFavoriteQuery, [reviewId, userId]);
            if (favoriteExists[0].length === 0) {
                const insertFavoriteQuery = 'INSERT INTO book_review_favorites (review_id, user_id) VALUES (?, ?)';
                await db.query(insertFavoriteQuery, [reviewId, userId]);
                sendSuccess(res, { message: 'Review favorited successfully.' });
            } else {
                throw new HandledError('Review already favorited.');
            }
        } else {
            // 取消收藏操作
            const deleteFavoriteQuery = 'DELETE FROM book_review_favorites WHERE review_id = ? AND user_id = ?';
            await db.query(deleteFavoriteQuery, [reviewId, userId]);
            sendSuccess(res, { message: 'Favorite removed successfully.' });
        }
    } catch (error) {
        next(error);
    }
});
// 评论书评
router.post('/commentReview', async (req, res, next) => {
    try {
        const { reviewId, comment } = req.body;
        if (!reviewId || !comment) {
            throw new InvalidEntryError('Review ID and comment are required.');
        }
        const userId = req.user.id; // 假设req.user.id是当前登录用户的ID
        const query = 'INSERT INTO book_review_comments (review_id, user_id, comment) VALUES (?, ?, ?)';
        await db.query(query, [reviewId, userId, comment]);
        sendSuccess(res, { message: 'Comment added successfully' });
    } catch (error) {
        next(error);
    }
});

router.get('/bookReviewComments/:reviewId', async (req, res, next) => {
    const { reviewId } = req.params; // 获取书评ID

    try {
        // 查询指定书评的所有评论，并按创建时间降序排序
        const query = `
            SELECT 
                book_review_comments.*,
                users.username,
                users.profile_picture
            FROM book_review_comments
            JOIN users ON book_review_comments.user_id = users.id
            WHERE book_review_comments.review_id = ?
            ORDER BY book_review_comments.created_at DESC`; // 修改这里，使用DESC进行降序排序

        const result = await db.query(query, [reviewId]);

        if (result[0].length === 0) {
            // 如果没有找到评论，返回一个空数组
            return sendSuccess(res, []);
        }

        sendSuccess(res, result[0]); // 发送找到的评论列表
    } catch (error) {
        next(error);
    }
});

// 获取当前用户收藏的书评
router.get('/myFavorites', async (req, res, next) => {
    const limit = 20;
    let page = 1;
    if (req.query.page && !isNaN(req.query.page) && req.query.page > 0) {
        page = parseInt(req.query.page);
    }

    const offset = (page - 1) * limit;
    const userId = req.user.id;

    try {
        const countQuery = 'SELECT COUNT(*) AS total FROM book_review_favorites WHERE user_id = ?';
        const totalCountResult = await db.query(countQuery, [userId]);
        const total = totalCountResult[0][0].total;

        const dataQuery = `
            SELECT book_reviews.* 
            FROM book_reviews 
            JOIN book_review_favorites ON book_reviews.id = book_review_favorites.review_id 
            WHERE book_review_favorites.user_id = ? 
            LIMIT ? OFFSET ?`;

        const results = await db.query(dataQuery, [userId, limit, offset]);

        const totalPages = Math.ceil(total / limit);
        const hasMore = page < totalPages;

        sendSuccess(res, {
            data: results[0],
            total,
            page,
            limit,
            totalPages,
            hasMore
        });
    } catch (error) {
        next(error);
    }
});
// 获取当前用户点赞的书评
router.get('/myLikes', async (req, res, next) => {
    const limit = 20;
    let page = 1;
    if (req.query.page && !isNaN(req.query.page) && req.query.page > 0) {
        page = parseInt(req.query.page);
    }

    const offset = (page - 1) * limit;
    const userId = req.user.id;

    try {
        const countQuery = 'SELECT COUNT(*) AS total FROM book_review_likes WHERE user_id = ?';
        const totalCountResult = await db.query(countQuery, [userId]);
        const total = totalCountResult[0][0].total;

        const dataQuery = `
            SELECT book_reviews.* 
            FROM book_reviews 
            JOIN book_review_likes ON book_reviews.id = book_review_likes.review_id 
            WHERE book_review_likes.user_id = ? 
            LIMIT ? OFFSET ?`;

        const results = await db.query(dataQuery, [userId, limit, offset]);

        const totalPages = Math.ceil(total / limit);
        const hasMore = page < totalPages;

        sendSuccess(res, {
            data: results[0],
            total,
            page,
            limit,
            totalPages,
            hasMore
        });
    } catch (error) {
        next(error);
    }
});
router.get('/myYearlyStats', async (req, res, next) => {
    const userId = req.user.id;  // 假设req.user.id是当前登录用户的ID
    console.log(userId)
    const year = new Date().getFullYear();  // 获取当前年份

    const reviewCountsQuery = `
        SELECT MONTH(created_at) AS month, COUNT(*) AS reviewCount
        FROM book_reviews
        WHERE user_id = ? AND YEAR(created_at) = ?
        GROUP BY MONTH(created_at)
        ORDER BY month;
    `;
    const favoriteCountsQuery = `
        SELECT MONTH(book_reviews.created_at) AS month, COUNT(*) AS favoriteCount
        FROM book_review_favorites
        JOIN book_reviews ON book_reviews.id = book_review_favorites.review_id
        WHERE book_reviews.user_id = ? AND YEAR(book_reviews.created_at) = ?
        GROUP BY MONTH(book_reviews.created_at)
        ORDER BY month;
    `;
    const likeCountsQuery = `
        SELECT MONTH(book_reviews.created_at) AS month, COUNT(*) AS likeCount
        FROM book_review_likes
        JOIN book_reviews ON book_reviews.id = book_review_likes.review_id
        WHERE book_reviews.user_id = ? AND YEAR(book_reviews.created_at) = ?
        GROUP BY MONTH(book_reviews.created_at)
        ORDER BY month;
    `;
    const commentCountsQuery = `
        SELECT MONTH(book_reviews.created_at) AS month, COUNT(*) AS commentCount
        FROM book_review_comments
        JOIN book_reviews ON book_reviews.id = book_review_comments.review_id
        WHERE book_reviews.user_id = ? AND YEAR(book_reviews.created_at) = ?
        GROUP BY MONTH(book_reviews.created_at)
        ORDER BY month;
    `;

    // 使用Promise.all来并发执行所有查询
    const [reviewCounts, favoriteCounts, likeCounts, commentCounts] = await Promise.all([
        db.query(reviewCountsQuery, [userId, year]),
        db.query(favoriteCountsQuery, [userId, year]),
        db.query(likeCountsQuery, [userId, year]),
        db.query(commentCountsQuery, [userId, year])
    ]);

    // 组装结果
    const results = {};
    for (let i = 1; i <= 12; i++) {
        results[i] = {
            month: i,
            reviewCount: (reviewCounts[0].find(item => item.month === i) || {}).reviewCount || 0,
            favoriteCount: (favoriteCounts[0].find(item => item.month === i) || {}).favoriteCount || 0,
            likeCount: (likeCounts[0].find(item => item.month === i) || {}).likeCount || 0,
            commentCount: (commentCounts[0].find(item => item.month === i) || {}).commentCount || 0
        };
    }

    sendSuccess(res, results);
});
// 删除指定的评论
// 使用POST请求删除指定的评论
router.post('/deleteComment', async (req, res, next) => {
    const { commentId } = req.body; // 从请求体获取评论ID



    try {
        // 执行删除评论的数据库操作
        const deleteQuery = 'DELETE FROM book_review_comments WHERE id = ?';
        const result = await db.query(deleteQuery, [commentId]);

        // 检查是否有行被删除
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comment not found or already deleted.' });
        }

        // 发送成功响应
        res.status(200).json({ message: 'Comment deleted successfully.' });
    } catch (error) {
        // 处理可能的错误
        next(error);
    }
});


router.post('/deleteBookReview', async (req, res, next) => {
    const { reviewId } = req.body;
    try {
        // 删除所有评论
        const deleteCommentsQuery = 'DELETE FROM book_review_comments WHERE review_id = ?';
        await db.query(deleteCommentsQuery, [reviewId]);

        // 删除所有点赞
        const deleteLikesQuery = 'DELETE FROM book_review_likes WHERE review_id = ?';
        await db.query(deleteLikesQuery, [reviewId]);

        // 删除所有收藏
        const deleteFavoritesQuery = 'DELETE FROM book_review_favorites WHERE review_id = ?';
        await db.query(deleteFavoritesQuery, [reviewId]);

        // 删除书评本身
        const deleteReviewQuery = 'DELETE FROM book_reviews WHERE id = ?';
        const [result] = await db.query(deleteReviewQuery, [reviewId]);

        // 检查是否真的删除了一行
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Review not found' });
        }

        // 发送成功响应
        res.send({ message: 'Review and all related records deleted successfully' });
    } catch (error) {
        // 发生错误，发送错误响应
        next(error);
    }
});



module.exports = router;
