import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
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
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
    },
    duration: {
        type: Number,
        required: true,
        min: 0,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    audioUrl: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export const Song = mongoose.model("Song", songSchema);