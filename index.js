const express = require('express');
const app = express();
const port = 5050;

app.get('/api/main',(req,res)=>{
    res.send("this is my second handson")
})

app.listen(port,()=>{
    console.log(`hello server ${port}`)
})