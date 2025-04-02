const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// urlencoded를 파싱...

// 미들웨어
app.post('/submit', (req, res) => { 
    const {name, year} = req.body;
    res.send(`Name: ${name}, Year: ${year}`);

})

app.listen(3000, () => {
    console.log("서버가 3000에서 실행중");
})