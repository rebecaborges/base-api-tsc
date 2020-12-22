import { ObjectID } from 'mongodb'
import mongoose from 'mongoose'
const { Schema } = mongoose

const User = new Schema ({
  id: ObjectID,
  name: String,
  email: String,
  phone: Number,
  isActive: Boolean,
  password: String
})

export default User
