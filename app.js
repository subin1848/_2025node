// const express = require('express');
import express from 'express';
const app = express();

app.use(express.json());

const PORT = 3000;

app.post('/api', (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
