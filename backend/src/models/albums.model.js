import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    artist: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    releaseYear: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear() + 1,
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export const Album = mongoose.model("Album", albumSchema);
