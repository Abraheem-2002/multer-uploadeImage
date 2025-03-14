const express = require('express')
const cors = require("cors")
const router = require("./router/router");
const multer = require('multer')
const path = require('path')
const app = express()
const port = 1010

app.use(express.static(path.join(__dirname,"/public")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))