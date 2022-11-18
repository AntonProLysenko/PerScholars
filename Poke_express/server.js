const express = require('express')
const app = express()
const PORT  = 3000
const pokemons = require('./models/pokemons')

const reactViews = require('express-react-views')

app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())

app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
  })
  
  app.use(express.urlencoded({extended: false}))

app.get("/", (req,res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemons', (req,res)=>{
    res.render('Index', { pokemons })
})

app.get('/pokemons/new',(req,res)=>{
    res.render('New')
})

app.get('/pokemons/:id', (req,res)=>{
    res.render('Show', pokemons[req.params.id])
})

app.post('/pokemons',(req,res)=>{

    console.log(req.body);
    
    req.body.img = 'http://img.pokemondb.net/artwork/'+ req.body.name.toLowerCase()
    pokemons.push(req.body)
    res.redirect('/pokemons')
})


app.listen(PORT, ()=>{
    console.log(`Listening port # ${PORT}`);
})