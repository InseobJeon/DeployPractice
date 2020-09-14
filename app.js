const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ec2 deploy');
})

app.listen(5000, ()=>{
    console.log('server listening 5000')
})