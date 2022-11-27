require('dotenv').config()
const mongoose = require('mongoose')
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