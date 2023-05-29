import express from 'express'
import mongoose from 'mongoose'
const app = express()
const router = express.Router()
import bodyParser from 'body-parser'
import * as userRouter from './src/routes/user.routes.js'
const port = process.env.port || 4000

app.use(bodyParser.json())
//database connection
mongoose
  .connect('mongodb://localhost:27017/Chatapp', { useNewUrlParser: true })
  .then(() => {
    console.log('database Connected')
  })
  .catch((error) => {
    console.log('error occured ', error.message)
  })
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRouter.router)

app.listen(port, () => {
  console.log('we are listening to port ' + port)
})
