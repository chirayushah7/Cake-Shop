const mongoose = require('mongoose');

const rentBookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    username: {
        type: String
    },
    userphone: {
        type: String
    },
    useraddress: {
        type: String
    },
    fromDate: {
        type: String
    },
    toDate: {
        type: String
    },
    id: {
        type: String
    }
})

const Rent = mongoose.model('rent', rentBookSchema);

module.exports = Rent;