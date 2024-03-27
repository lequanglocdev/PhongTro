require("dotenv").config();
const express  = require("express")
const cors = require("cors")
const dbConnect = require('./src/config/connectDb')
const initRoutes = require('./src/routes')
const app = express()
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

const port = process.env.PORT || 6000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();
initRoutes(app);
const listen = app.listen(port,() =>{
  console.log(`Server is running ${listen.address().port}`)
})