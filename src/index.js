const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const path = require('path')

const UserRoute = require('./routes/userRoute')

const middleware = require('./middleware/middleware')
const app = express()


app.use(middleware)
app.use(express.json())


// routing
app.use('/users', UserRoute)

app.listen(port, () => {
     console.log(`server ready on port ${port}`);
})