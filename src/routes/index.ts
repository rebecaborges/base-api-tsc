import express from 'express'
import tokenValidation from '../middlewares/jwt'
import {
  ping,
  userLogin,
  createUser,
  findAllUsers,
  updateUser,
  deleteUser,
} from '../controllers/user'

const router = express.Router()

const pingResponse = router.get(
  '/ping',
  ping
)

const login = router.post(
  '/login',
  userLogin
)

const getAllRoute = router.get(
  '/users',
  tokenValidation,
  findAllUsers,
)

const createRoute = router.post(
  '/users',
  tokenValidation,
  createUser
)

const updateRoute = router.put(
  '/users/:id',
  tokenValidation,
  updateUser
)

const deleteUserRoute = router.delete(
  '/users/:id',
  tokenValidation,
  deleteUser
)

export {
  pingResponse,
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute,
}
