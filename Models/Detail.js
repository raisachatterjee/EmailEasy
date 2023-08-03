const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('item', detailSchema);
