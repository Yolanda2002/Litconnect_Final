const express = require('express');
const multer = require('multer');
const {sendSuccess, sendError} = require("../utils/responseHandler");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');  // Make sure this path exists and is accessible
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage ,
    limits: {
        fileSize: 1024 * 1024 * 5, // 限制为5MB
        files: 8, // 每次请求只接受一个文件
      },
});

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => { // 'image' should match the name attribute of your file input field
    if(req.file) {
        sendSuccess(res,  req.file );
    } else {
        sendError(res,'No file uploaded.')
    }
});

module.exports = router;
