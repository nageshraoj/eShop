const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config({ path: 'src/config/config.env' })
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

app.use('/', (req, res, next) => {
  return res.status(200).send('Hello')
})
