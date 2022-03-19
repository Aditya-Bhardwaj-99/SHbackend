import express from "express"
import cors from 'cors'
import {ConnectMongo} from "./connectors/mongoConnector.js"
import errorHandler from "./lib/errorHandler.js"
import responder from "./lib/responder.js"
import login from "./servlet/login.js"
import jwtAuth from "./module/jwtAuth.js"
import changeState from "./servlet/changeState.js"
import fetchDevices from "./servlet/fetchDevices.js"

const app = express()
const mongoConnector = await ConnectMongo()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use((req,res,next)=>{
    console.log(req.path)
    next();
})

app.get('/', function (req, res) {
  res.send('App is running')
})

app.post('/login',login(mongoConnector,responder))

app.post('/changeState',jwtAuth(),changeState(mongoConnector,responder))

app.post('/fetchDevices',jwtAuth(),fetchDevices(mongoConnector,responder))

app.use(errorHandler())

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("server running")
    }
})