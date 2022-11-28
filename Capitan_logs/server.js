let express = require('express')
const app = express()
const reactViews = require('express-react-views')

const PORT = 3000



//Engine declaration
app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())

//MIDDLEWARE
app.use((req,res,next)=>{//uses only for middleware
    console.log("I'm running for all routes")
    console.log('1. MIDDLEWARE');
    next()
  })
  
  app.use(express.urlencoded({extended: false}))



//INDUCES

//NEW
app.get('/new', (req,res)=>{
    res.render('New')    
})


//CREATE
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
    
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
})

//App Listener
app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 