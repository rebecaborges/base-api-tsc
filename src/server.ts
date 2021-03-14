import './services/mongo'
import express from 'express'
import * as OpenApiValidator from 'express-openapi-validator'
import {
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
} from './routes/index'

const app = express()

app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: true
  })
)

app.use(express.json())

app.use(
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`connected on port: ${PORT}`))
