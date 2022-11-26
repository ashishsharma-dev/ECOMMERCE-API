const express = require('express')
const PORT = process.env.PORT || 3000
const products = require('./routes/products')
const notFound = require('./middleware/not-found')

// DB Connection 
require('./db/connect')

const app = express()


// Middlewares
app.use(express.json())
app.use('/api/v1/products', products)
app.use(notFound)

// app.get('/', (req, res) => {
//     res.status(201).send("We are at the home page now...")
// })

app.listen(PORT, (err) => {
    if (err) {
        console.log(`There is an error: ${err}`)
        return;
    }

    console.log(`The Express Server is up and running on PORT: ${PORT}...`)
})