require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const app = express()
const reactViews = require('express-react-views')
const PORT = 3000
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
app.use(methodOverride('_method'))




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


//DELETE
app.delete("/:id",(req,res)=>{
    Log.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect("/")
        }
    })
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

//EDIT
app.get('/:id/edit',(req,res)=>{
    Log.findById(req.params.id,(err,foundLog)=>{
        res.render('Edit', {log:foundLog})
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
             console.log(foundLog.updatedAt)
         } 
      })
    })

//App Listener
app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 