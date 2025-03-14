const mongoose = require("mongoose");
const schema = mongoose.Schema;

const imageSchema = new schema ({
    path : {
        type : String
    }
})

module.exports = imageSchema;