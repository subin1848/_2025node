const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => { 
    const {name, year} = req.body;
    res.send(`Name: ${name}, Year: ${year}`);

})

app.listen(3000, () => {
    console.log("서버가 3000에서 실행중");
})