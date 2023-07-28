const mongoose = require('mongoose');

const banana chipsSchema = new mongoose.Schema({
color : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('banana chips', banana chipsSchema);