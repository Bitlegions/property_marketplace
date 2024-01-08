const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.listen(5555, () => {
    console.log('server running on 5555')
})