// const express = require('express');
import express from 'express';
const app = express();

app.use(express.json());

const PORT = 3000;

// routing 설정
app.get('/api', (req, res) => {
    res.status(200).send('Get api');
});

app.post('/api', (req, res) => {
    res.status(200).send('post api');
});

app.get('/api/:person', (req, res) => {
    const person = req.params.person;
    // req.params : 객체
    res.status(200).send(person);
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
