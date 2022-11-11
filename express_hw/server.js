const express = require ('express')
const app = express()
const port = 3000


const pgs = ['/','/first', '/second', '/smth',];

//Build 10 Routes and a view engine, say anything you want
//Make 2 different templates, and use them both in different routes
//( you can only have 1 view engine but multiple templates )

const fs = require ('fs')
app.engine('ext', (filePath, options, callback)=>{
    fs.readFile(filePath, (err, content)=>{
        if (err) return callback(err)
        const rendered = content.toString()
        .replace('#header#', `<header>${options.header}</header>`)
        .replace('#message#', `<h1>${options.message}</h1>`)
        .replace('#link#', `<a href ='${options.link}'>Next Page</a>` )
    return callback(null, rendered)
    })
})


// app.get('/:indexOfPlantsArra',(req, res)=>{
//     let index = req.params.indexOfPlantsArra
  
// })






app.set('views', './views')
app.set('view engine','ext')


app.get('/',(req, res)=>{
    res.render('firstTemplate', {header: 'Hey', message: 'This is our Start Page', link:'/1'})
})


app.get('/1',(req,res)=>{
    res.render('firstTemplate',{header:'First page', message:'Second Page',link:'/2'})
})

app.get('/2',(req, res)=>{
    res.render('firstTemplate', {header: 'Second page', message: 'Here i am', link:'/3'})
})

app.get('/3',(req, res)=>{
    res.render('secondTemplate', {header: 'Third page', message: 'woop woop ', link:'/4'})
})

app.get('/4',(req, res)=>{
    res.render('firstTemplate', {header: 'Fourth page', message: 'Display ', link:'/5'})
})

app.get('/5',(req, res)=>{
    res.render('secondTemplate', {header: 'Fifth page', message: 'Text', link:'/6'})
})

app.get('/6',(req, res)=>{
    res.render('firstTemplate', {header: 'Sixth page', message: 'another Text', link:'/7'})
})

app.get('/7',(req, res)=>{
    res.render('secondTemplate', {header: 'Seventh page', message: 'Almost End ', link:'/8'})
})

app.get('/8',(req, res)=>{
    res.render('firstTemplate', {header: 'Eighth page', message: 'Two more to go ', link:'/9'})
})

app.get('/9',(req, res)=>{
    res.render('secondTemplate', {header: 'Nineth page', message: 'Typing...', link:'/10'})
})

app.get('/10',(req, res)=>{
    res.render('firstTemplate', {header: 'Tenth page', message: 'I`m the last one ', link:'/'})
})







app.get('/learners/:name', function(req, res) {
   
    res.send(`Hello! I'm ${req.params.name}`);
  });




app.listen(port, ()=>{
    console.log('listening the port');
})