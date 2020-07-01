const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')

const app = express()


// Middleware
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts')

app.use('/api/posts',posts)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))