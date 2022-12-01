const mongoose = require ('mongoose')

const foodLogsSchema = new mongoose.Schema({
    title: {type:String, requires:true},
    meal:{type:String}
},

{
    timestamps:true
})

const foodLog = mongoose.model('foodLog', foodLogsSchema)
module.exports = foodLog