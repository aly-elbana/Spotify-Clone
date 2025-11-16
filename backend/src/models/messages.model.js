import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    senderId: {
        type: String,
        required: true,
        trim: true,
    },
    receiverId: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

export const Message = mongoose.model("Message", messageSchema);