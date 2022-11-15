const express = require("express")
const app = express()
const PORT = 3000
const fruits = require('./models/fruits')
const vegatables = require('./models/vegatables')

const reactViews = require('express-react-views')


app.set('view engine', 'jsx')//giving the extention for the view engine .jsx
app.engine('jsx', reactViews.createEngine())

app.get("/fruits", (req, res) => {
  res.render("./fruits/Index",{fruits})
})

app.get("/fruits/:indexOfFruit", (req, res) => {
//   res.send(fruits[req.params.indexOfFruit])
    res.render('Show',  fruits[req.params.indexOfFruit] )  //.render automaticaly looks to views folder looking for the engine(Show) 
})

app.get("/vegatables", (req, res) => {
    res.render("./vegetables/Index",{vegatables})
  })

  app.get("/vegatables/:indexOfVegatable", (req, res) => {
    //   res.send(fruits[req.params.indexOfFruit])
        res.render('Show',  vegatables[req.params.indexOfVegatable] )  //.render automaticaly looks to views folder looking for the engine(Show) 
    })


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 