const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/ecommerceDB'
mongoose.connect(uri, {
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