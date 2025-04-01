// const express = require('express');
import express from 'express';
const app = express();

app.use(express.json());

// routing 파일 불러오기
const apiRoutes = require('./routes/api');

// routing 설정
app.use('/routes', apiRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
