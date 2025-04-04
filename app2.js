const express = require('express')
const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const { send } = require('process');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');

// __dirname 현재 디렉토리의 절대 경로 (C: 까지 나옴)
// path.join() : 경로 지정자( \ or / )를 운영체제와 맞추어 줌
app.set('views', path.join(__dirname, 'views'));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err)=>{
    if(err) {
        console.error('MySQL 연결 실패 : ', err);
        return;
    }
    console.log('MySQL 연결 성공');
});

app.get('/', (req, res) => {

})

app.get('/travel', (req, res) => {
    const _query = 'SELECT id, name FROM travellist';
    db.query(_query, (err, results) => {
        if(err){
            console.error('데이터 쿼리 실패 : ', arr);
            res.status(500).send('Internal Server Error');
            return;
        }
        const travelList = results;
        res.render('travel', {travelList});
    });
});

app.get('/travel/:id', (req, res) => {
    const travelId = req.params.id;
    const query = 'SELECT * FROM travellist WHERE id = ?';
    db.query(query, [travelId], (err, results) =>{
        if(err) {
            console.error('데이터베이스 쿼리 실패', err);
            res.status(500).send('Internal Server Error');
            return;    
        }
        if(results.length === 0) {
            res.status(404).send('여행지를 찾을 수 없습니다.');
            return;
        }
        const travel = results[0];
        res.render('travelDetail', {travel});
    })
})

// 모든 경로 처리하기 때문에 에러가 나더라도 해당 경로로 이동
app.use((req, res) => {

})

app.listen(3000, () => {
    console.log("서버가 3000에서 실행중");
})