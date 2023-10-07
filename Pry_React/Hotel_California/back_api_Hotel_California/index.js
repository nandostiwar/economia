const express = require('express')
const { urlencoded, json } = require('express')
const router = require('./endpoints/endpoints_Hotel')
const cors = require('cors')

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())

app.use('/v1/hotel', router)

// ultima validacion 404 Not Found
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(3500, () => {
  console.log('Listening at port 3500')
})
