const express = require('express')
const cors = require("cors")
const router = require("./router/router");
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const multer = require('multer')
const path = require('path')
const app = express()
const port = 1010

dotenv.config();

app.use(express.static(path.join(__dirname,"/public")));


mongoose.connect(process.env.CONNACTION_STRING,{
    useNewUrlparser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Seccsesfull connected");
}).catch((err) =>{
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))