const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: {
=======
    username: {
>>>>>>> upstream/develop
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
<<<<<<< HEAD

=======
>>>>>>> upstream/develop
    created: {
        type: Date,
        default: Date.now(),
    },
    updated: Date,
});
module.exports = mongoose.model("Users", userSchema);
