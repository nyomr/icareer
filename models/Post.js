import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.models.Post || mongoose.model("Post", postSchema);