import { ObjectID } from 'mongodb'
import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  id: ObjectID,
  name: String,
  email: String,
  password: String,
  phone: Number,
  isActive: Boolean,
})

const userModel = mongoose.model('User', UserSchema)

export default userModel
