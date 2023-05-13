const { Schema, model } = require('../connection');

const myschema = new Schema({
    title : String,
    user : String,
    templateImage : String,
    productImage: String,
    config: Object,
    createdAt : Date,

});

module.exports = model('mockup', myschema);
