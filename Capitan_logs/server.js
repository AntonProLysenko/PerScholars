require('dotenv').config()
let express = require('express')
const app = express()
const reactViews = require('express-react-views')
const PORT = 3000
const mongoose = require('mongoose')
const Log = require('./models/logs')



//MongoDB connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.once("open",()=>{
    console.log('MongoDb connected');
})

//Engine declaration
app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())

//MIDDLEWARE
app.use((req,res,next)=>{//uses only for middleware
    next()
  })
  
  app.use(express.urlencoded({extended: false}))



//INDUCES

//INDEX
app.get('/',(req,res)=>{
    Log.find({},(error,allLogs)=>{
        if(error){
            res.status(400).send(error+"Error")
        }else{
            res.status(200).render('Index',{
                logs:allLogs
            })
        }
    })
})

//NEW
app.get('/new', (req,res)=>{
    res.render('New')    
})


//CREATE
app.post('/',(req,res)=>{
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }

    Log.create(req.body,(err, createdLog)=>{
        if(err){
            res.status(400).send(err+'Error')
        }else{
            res.status(200).redirect('/')
        }
    })
})

//SHOW
app.get("/:id", (req, res) => {
        Log.findById(req.params.id,(error,foundLog)=>{
          if(error){
            res .status(400).send(error)
        }else{
          res.status(200).render('Show',{
            log:foundLog
          })
        }
        // res.render('Show',  Fruit[req.params.id] )  //.render automaticaly looks to views folder looking for the engine(Show) 
      })
    })

//App Listener
app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 