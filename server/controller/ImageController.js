const ImageModel = require('../model/ImageModel');


exports.UploadImage = async(req,res) => {
    try {
        const path = req.file.path;
        if(!path){
            return res.status(500).send({
                msg : 'please upload the image',
                stete : 0,
                data : []
            })
        }
        await ImageModel.create({
            path : path,
        }).then((data)=>{
            console.log(req.data);
            return res.status(201).send({
            msg : '',
            stete : 1,
            data : data,
            })
        }).catch((err) =>{
            console.log(err);
            return res.status(500).send({
                msg : 'internal server error',
                stete : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            msg : 'internal server error',
            stete : 0,
            data : []
        })
    }
}

exports.getImage = (req,res) => {
try {
    const image = ImageModel.find()
    if (image){
        return res.status(200).send({
            msg : '',
            stete : 1,
            data : image
        })
    }else{
        return res.status(500).send({
            msg : 'internal server error',
            stete : 0,
            data : []
        })
    }
} catch (error) {
    console.log(error);
    return res.status(500).send({
        msg : 'internal server error',
        stete : 0,
        data : []
    })
}
}