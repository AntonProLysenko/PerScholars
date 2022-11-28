require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const app = express()
const reactViews = require('express-react-views')
const PORT = 3000
const Log = require('./models/logs')
const logController = require('./controllers/logs')



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

//ROUTES
app.use('/',logController)





//App Listener
app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 