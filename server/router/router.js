const express = require("express");
const router = express.Router();
const multer = require('multer')
const ImageModel = require('../model/ImageModel.js')
const path = require('path')
const fs = require("fs") 


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join("public/uploads");
        fs.mkdirSync(uploadPath ,{recursive : true});
    cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    }
    })

const upload = multer({ storage: storage })

//Upload Images
router.post('/image',upload.single('pic'),async (req,res) =>{
console.log(req.file);
await ImageModel.create({
    path : req.file.path,
}).then((data)=>{
    console.log(req.data);
    return res.status(201).send({
    msg : '',
    stete : 1,
    data : data,
    })
}).catch((err)=>{
    console.log(err);
    return res.status(500).send({
        msg : 'internal server error',
        stete : 0,
        data : [],
    })
})
});

// get Images
router.get('/getImage',async (req,res)=>{
    await ImageModel.find().then((data) =>{
        return res.status(200).send({
            msg : '',
            stete : 1,
            data : data,
        })
    }).catch((err) =>{
        console.log(err);
        return res.status(500).send({
            msg : 'internal server error',
            stete : 0,
            data : [],
        })
    })
});


module.exports = router;


