const express = require("express");
const router = express.Router();
const multer = require('multer')
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


router.post("/image",upload.single("pic"), (req,res) =>{
        try {
            console.log(req.file);
            res.status(200)
        } catch (error) {
            console.log(error);
        }
    
})


module.exports = router;