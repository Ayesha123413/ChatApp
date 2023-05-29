import mongoose from 'mongoose'

//define structure of collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

//create collection
const User = mongoose.model('users', userSchema)
export default User
