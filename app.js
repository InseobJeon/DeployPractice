const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('ec2 deploy');
})

app.listen(5000, ()=>{
    console.log('server listening 5000')
})
