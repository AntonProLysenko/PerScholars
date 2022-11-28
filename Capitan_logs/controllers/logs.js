const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

//INDUCES

//INDEX
router.get('/',(req,res)=>{
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
router.get('/new', (req,res)=>{
    res.render('New')    
})


//DELETE
router.delete("/:id",(req,res)=>{
    Log.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect("/")
        }
    })
})

//UPDATE

router.put("/:id", (req, res) => {
    req.body.shipIsBroken = req.body.readyToEat === "on" ? true : false
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
      if(!err){
        res.status(200).redirect(`/${req.params.id}`)
      } else {
        res.status(400).send(err)
      }
    })
  })

//CREATE
router.post('/',(req,res)=>{
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
router.get('/:id/edit',(req,res)=>{
    Log.findById(req.params.id,(err,foundLog)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).render('Edit', {log:foundLog})
        }
        
    })
})


//SHOW
router.get("/:id", (req, res) => {
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

    module.exports = router
