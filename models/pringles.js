const mongoose = require('mongoose');

const pringlesSchema = new mongoose.Schema({
flavour : { type:  String, description: "Required Field", required: true },
price : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('pringles', pringlesSchema);