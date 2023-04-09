import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  image: String,
  topic: String,
    userName: String,
   handle: String,
    time: String,
    title: String,
    replies: Number,
    retuits: Number
}, {collection: 'tuits'});
export default schema;