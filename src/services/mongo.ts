import mongoose from 'mongoose'

mongoose.connect('mongodb://mongo:27017' || process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
