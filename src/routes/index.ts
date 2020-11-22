import express from 'express'
import {
  createUser,
  findAllUsers,
  updateUser,
  deleteUser
} from '../controllers/index'

const router = express.Router()

const createRoute = router.post('/', createUser)

const getAllRoute = router.get('/', findAllUsers)

const updateRoute = router.put('/user/:id', updateUser)

const deleteUserRoute = router.delete('/user/:id', deleteUser)

export {
  createRoute,
  getAllRoute,
  updateRoute,
  deleteUserRoute
}
