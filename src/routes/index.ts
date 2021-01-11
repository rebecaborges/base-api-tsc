import express from 'express'
import tokenValidation from '../middlewares/jwt'
import {
  userLogin,
  createUser,
  findAllUsers,
  updateUser,
  deleteUser
} from '../controllers/index'

const router = express.Router()

const login = router.get(
  '/login',
  userLogin
)

const getAllRoute = router.get(
  '/',
  tokenValidation,
  findAllUsers,
)

const createRoute = router.post(
  '/',
  tokenValidation,
  createUser
)

const updateRoute = router.put(
  '/user/:id',
  tokenValidation,
  updateUser
)

const deleteUserRoute = router.delete(
  '/user/:id',
  tokenValidation,
  deleteUser
)

export {
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
}
