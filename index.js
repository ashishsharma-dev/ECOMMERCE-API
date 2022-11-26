const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()


app.get('/', (req, res) => {
    res.status(201).send("We are at the home page now...")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(`There is an error: ${err}`)
        return;
    }

    console.log(`The Express Server is up and running on PORT: ${PORT}...`)
})