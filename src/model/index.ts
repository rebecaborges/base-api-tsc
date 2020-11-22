import mongoose from 'mongoose'
import connect from '../config/config'
import User from '../schema/index'

connect

const modelUser = mongoose.model('User', User)

export default modelUser
