
const express  = require("express")
const cors = require("cors")

const app = express()

const port = process.env.PORT || 8000

app.use("/",(req,res) =>{
  res.send("Server on ....")
})

const listen = app.listen(port,() =>{
  console.log(`Server is running ${listen.address().port}`)
})