const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

// 게시글의 전체 목록
router.get('/', (req, res) => {
    const _query = 'SELECT id, name FROM travellist';
    db.query(_query, (err, results) => {
        if (err) {
            console.error('데이터 쿼리 실패 : ', arr);
            res.status(500).send('Internal Server Error');
            return;
        }
        const travelList = results;
        res.render('travel', { travelList });
    });
});

// 게시글 추가 페이지로 이동
router.get('/add', (req, res) => {
    res.render('addTravel');
});

// 게시글을 추가
router.post('/', (req, res) => {
    const { name } = req.body;
    const _query = 'INSERT INTO travellist (name) VALUE (?)';
    db.query(_query, [name], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.redirect('/travel');
    });
});

// 해당 게시글 내용 읽기
router.get('/:id', (req, res) => {
    const travelId = req.params.id;
    const query = 'SELECT * FROM travellist WHERE id = ?';
    db.query(query, [travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('여행지를 찾을 수 없습니다.');
            return;
        }
        const travel = results[0];
        res.render('travelDetail', { travel });
    });
});

// 해당 게시글 수정 페이지로 이동
router.get('/:id/edit', (req, res) => {
    const travelId = req.params.id;
    const _query = 'SELECT * FROM travellist WHERE id = ?';
    db.query(_query, [travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패', err);
            res.status(500).send('Internal Server Error');
            return; 
        }
        if (results.length === 0) {
            res.status(404).send('여행지를 찾을 수 없습니다.');
            return;
        }
        const travel = results[0];
        res.render('editTravel', { travel });
    });
});

// 게시글 수정
router.put('/:id', (req, res) => {
    const travelId = req.params.id;
    const { name } = req.body;
    const _query = 'UPDATE travellist SET name=? WHERE id = ?';
    db.query(_query, [name, travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패 : ', err);
            res.status(500).send('데이터베이스 에러');
            return;
        };
        res.render('updateSuccess');
    });
});

// 게시글 삭제
router.delete('/:id', (req, res) => {
    const travelId = req.params.id;
    const _query = 'DELETE FROM travellist WHERE id = ?';
    db.query(_query, [travelId], (err, results) => {
        if (err) {
            console.error('데이터베이스 쿼리 실패 : ', err);
            res.status(500).send('데이터베이스 에러');
            return;
        };
        res.render('deleteSuccess');
    });
});
module.exports = router;