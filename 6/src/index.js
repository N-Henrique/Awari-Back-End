const express = require('express');
const app = express();
const port = 300;

app.get('/',(req, res) => {
    res.send('hello Word!')
});

app.listen(port, () => {
    
})