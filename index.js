require('dotenv').config()
const express = require('express')
const app = express()
 const router =require('express-router')
 const bodyParser = require('body-parser')

const port = process.env.PORT



app.listen(port, () => {
console.log(`i am listening ${port}`)
app.use(router)
})






app.get('/', function (req, res) {
    res.status(200).send({
        status: true,
        message:' Alli u are welcome'
    })
  })
  

  app.get('/', function (req, res) {
    res.status(400).send({
        status: false,
        message:' sorry, seems you got loss'
    })
  })