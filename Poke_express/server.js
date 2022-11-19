require('dotenv').config()

const express = require('express')
const app = express()
const PORT  = 3000

const Pokemon = require('./models/pokemons')

const reactViews = require('express-react-views')
const mongoode = require('mongoose')
const { default: mongoose } = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
})
mongoose.connection.once('open',()=>{
    console.log('MongoDB connected');
})


app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())


//Middle Ware
app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
})
app.use(express.urlencoded({extended: false}))




//Routes
app.get("/", (req,res)=>{
    res.send(`Welcome to the Pokemon App!<br/><a href = '/pokemons'>Check your PokeBall</a>`)
})

app.get('/pokemons', (req,res)=>{
    Pokemon.find({},(error,allPokemons)=>{
        if(error){
            res.status(400).send(error)
        }else{
            res.status(200).render('Index',{
                pokemons:allPokemons
            })
        }
    })
})

app.get('/pokemons/new',(req,res)=>{
    res.render('New')
})

app.get('/pokemons/:id', (req,res)=>{
    Pokemon.findById(req.params.id,(error,foundPokemon)=>{
        if(!error){
            res
                .status(200)
                .render('Show', {
                pokemons:foundPokemon
            })
        }else{
            res.status(400).send(error)
        }
    })
})

app.post('/pokemons',(req,res)=>{

   req.body.img = 'http://img.pokemondb.net/artwork/'+ req.body.name.toLowerCase()

    Pokemon.create(req.body,(error, createdPokemon)=>{
        if(!error){
            res.status(200).redirect('/pokemons')
        }else{
            res.status(400).show(error)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening port # ${PORT}`);
})