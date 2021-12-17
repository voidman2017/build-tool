const express = require('express')
const app = express()
app.get('/api/users',(req,res)=>{
    res.send('users')
})

app.listen(7788,()=>{
    console.log('server listen on: http://localhost:7788')
})