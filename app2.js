const express = require('express')
const path = require('path');
const methodOverride = require('method-override');
const travelRouter = require('./routes/travel');

const app = express();

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

});

app.use('/travel', travelRouter)

// use(전체 method에 대해) + 모든 경로
// 위의 엔드포인트에 해당 하지 않으면 유효하지 않는 페이지로 간주
app.use((req, res) => {
    res.status(404).send('404 not found');
});

app.listen(3000, () => {
    console.log("서버가 3000에서 실행중");
});