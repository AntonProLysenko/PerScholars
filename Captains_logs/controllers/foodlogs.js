const express = require('express')
const router = express.Router()
const foodLog = require('../models/foodlogs')

//Seed Route
router.get('/seed', (req,res)=>{
    foodLog.create([
      {
        title:'Breakfast',
        meal:'grapefruit'
        
    },
    {
        title:'lunch',
        meal:'grape'
        
    },
    {
        title:'Breakfast',
        meal:'avocado'
        
    }
    
  ], (err, data)=>{
    res.redirect('/food');
  })
    
  })
//INDEX
router.get('/',(req,res)=>{
    foodLog.find({},(error,allfoodLogs)=>{
        if(error){
            res.status(400).send(error+"Error")
        }else{
            res.status(200).render('foodLogs/Index',{
                logs:allfoodLogs
            })
        }
    })
})

//NEW
router.get('/new', (req,res)=>{
    res.render('foodLogs/New')    
})


//DELETE
router.delete("/:id",(req,res)=>{
    foodLog.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect("/food")
        }
    })
})

// //UPDATE

router.put("/:id", (req, res) => {
    
    foodLog.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
      if(!err){
        res.status(200).redirect(`/food/${req.params.id}`)
      } else {
        res.status(400).send(err)
      }
    })
  })

//CREATE
router.post('/',(req,res)=>{
   
    foodLog.create(req.body,(err, createdfoodLog)=>{
        if(err){
            res.status(400).send(err+' Error')
        }else{
            res.status(200).redirect('/food')
        }
    })
})

// //EDIT
router.get('/:id/edit',(req,res)=>{
    foodLog.findById(req.params.id,(err,foundLog)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).render('foodLogs/Edit', {log:foundLog})
        }
        
    })
})


//SHOW
router.get("/:id", (req, res) => {
        foodLog.findById(req.params.id,(error,foundLog)=>{
            if(error){
              res .status(400).send(error)
           }else{
                res.status(200).render('foodLogs/Show',{
                log:foundLog
               })
               
               
         } 
      })
    })

    module.exports = router
