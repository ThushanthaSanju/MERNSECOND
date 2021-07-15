import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:'String',
    message:'String',
    creator:'String',
    ttagsitle:[String],
    selectedFile:'String',
    likeCount:{
        type:Number,
        default:0
    },
    creatorAt:{
        type: Date,
        default: new Date(),
    }

});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;