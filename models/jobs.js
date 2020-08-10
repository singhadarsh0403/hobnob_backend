const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    duration:{ 
        type:Number,
        required:true
    },
    prices:{
        type:Number,
        required:true
    },
    numberOfPosts:{
        type:Number,
        required:true
    },
    typeOfPost:{
        type:string,
        required:true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Company'
    }
},{
    timestamps:true
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job