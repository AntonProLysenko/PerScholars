const express = require('express')
const app = express()
const PORT  = 3000
const pokemons = require('./models/pokemons')

const reactViews = require('express-react-views')

app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())

app.get("/", (req,res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemons', (req,res)=>{
    res.render('Index', { pokemons })
})



app.listen(PORT, ()=>{
    console.log(`Listening port # ${PORT}`);
})