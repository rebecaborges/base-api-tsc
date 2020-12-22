import express from 'express'
import {
  userLogin,
  createUser,
  findAllUsers,
  updateUser,
  deleteUser
} from '../controllers/index'

const router = express.Router()

const login = router.get('/login', userLogin)

const createRoute = router.post('/', createUser)

const getAllRoute = router.get('/', findAllUsers)

const updateRoute = router.put('/user/:id', updateUser)

const deleteUserRoute = router.delete('/user/:id', deleteUser)

export {
  login,
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
}
