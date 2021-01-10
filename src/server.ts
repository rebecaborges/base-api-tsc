import express from 'express'
import {
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
} from './routes/index'

const app = express()
app.use(express.json())

app.use(
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`connected on port: ${PORT}`))
