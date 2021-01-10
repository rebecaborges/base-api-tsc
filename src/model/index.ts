import mongoose from 'mongoose'
import User from '../schema/index'

const connect = mongoose.createConnection('mongodb://mongo:27017' || process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const modelUser = connect.model('User', new mongoose.Schema(User))

export default modelUser
