let express = require('express')
const app = express()
const reactViews = require('express-react-views')

const PORT = 3000



//Engine declaration
app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())





//INDUCES
app.get('/new', (req,res)=>{
    res.render('New')    
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 