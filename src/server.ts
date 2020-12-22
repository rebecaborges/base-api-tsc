import express from 'express'
import {
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
} from './routes/index'

const app = express()
app.use(express.json())

app.use(
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
)

const PORT = process.env.MONGODB_URI || process.env.PORT || 3000
app.listen(PORT, () => console.log(`connected on port: ${PORT}`))
