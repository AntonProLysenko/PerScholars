const express = require('express')
const app = express()
const PORT  = 3000
// const reactViews = require('express-react-views')

app.get("/", (req,res)=>{
    res.send('Welcome to the Pokemon App!')
})





app.listen(PORT, ()=>{
    console.log(`Listening port # ${PORT}`);
})