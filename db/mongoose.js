const mongoose = require('mongoose')

//please add the Database url for hobnob

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})