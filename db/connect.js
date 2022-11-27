const mongoose = require('mongoose')
<<<<<<< HEAD
const connectDB = () => {
=======
const connectDB = async () => {
>>>>>>> fb2da09b81aae74a9759ea267be59e874f4f4f00
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(data => {
        if (data) {
            console.log(`Connected to db...`)
        }
    }).catch(err => {
        if (err) {
            console.log(`There was an error connecting to db: ${err}`)
        }
    })
}

module.exports = connectDB