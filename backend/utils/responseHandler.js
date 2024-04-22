// 成功响应
function sendSuccess(res, data, message = 'Success') {
    res.status(200).send({
        status: true,
        data,
        message,
    });
}

// 错误响应
function sendError(res, error, statusCode = 400) {
    res.status(statusCode).send({
        status: false,
        data: null,
        message: error || 'An error occurred',
        code: statusCode,
    });
}

module.exports={
    sendSuccess,
    sendError
}
