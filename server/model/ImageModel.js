const mongoose = require('mongoose');
const ImageSchema = require('../schema/ImagesSchema')

const ImageModel = mongoose.model('Images',ImageSchema);


module.exports = ImageModel;