const express = require('express');
const axios = require('axios');
const {sendSuccess} = require("../utils/responseHandler");
const router = express.Router();
const API_KEY = 'sk-dmw4Sl8w5MeI5gF4Ef3fEd28593e4c94882f1cEaB11d820b';
// 创建axios的一个api实例
const api = axios.create({
    baseURL:'https://one.aiskt.com/v1',//这里写的就是ChatGPT的接口
    timeout: 15000,// 可以不写
    headers: {
        'Content-Type': 'application/json', // 这个可以不写，重要的是下面的Authorization
        Authorization: `Bearer ${API_KEY}`,// 这里是咱们自己的token,看env文件，这里我把key放到了环境变量中
        "OpenAI-Organization": "org-8d8geK9GTZUN56r2aDghOefM"
    },
    // httpsAgent: new HttpsProxyAgent('http://127.0.0.1:3000')
})
router.post('/', async (req, res, next) => {
    const { question } = req.body;
    try {
        // 向GPT发送请求，要求其判断句子是否使用了“Would you”句式进行了礼貌的请求
        const response = await api.post(
            '/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: question
                }],
                max_tokens: 1500  // 可根据需要调整生成的回答长度
            },
        );

        // 解析GPT的回答来确定句子是否使用了正确的句式
        const gptResponse = response.data.choices[0].message.content.trim();
        // const isCorrectFormat = gptResponse === "yes";
        // res.json({ correctness: gptResponse });
        // sendSuccess(res, { data:res.json({ correctness: gptResponse }) });

        sendSuccess(res, {
            data: { correctness: gptResponse },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;
