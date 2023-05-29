import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Create Schema for Message
const messageSchema = new mongoose.Schema({
  conversation: {
    type: Schema.Types.ObjectId,
    ref: 'conversations',
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  body: {
    type: String,
    required: true,
  },
})
//create collection
const Message = mongoose.model('messages', messageSchema)
export default Message
