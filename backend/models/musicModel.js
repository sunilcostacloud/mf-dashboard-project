const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the music name"],
    },
    genre: {
        type: String,
        required: [true, "Please enter the music genre"],
    },
    file: {
        type: String,
        required: [true, "Please upload the music file"],
    },
    singer: {
        type: String,
        required: [true, "Please enter the singer's name"],
    },
    movie: {
        type: String,
        required: [true, "Please enter the movie name"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    cloudinaryPublicId: { // Add this field to store the public_id from Cloudinary
        type: String,
        required: false, // Not required since it will be empty for new records
    },
});

module.exports = mongoose.model("Music", musicSchema);
